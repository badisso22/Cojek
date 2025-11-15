<?php
require_once(__DIR__ . '/../config/db.php');
require_once(__DIR__ . '/../config/api_keys.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$model = "mistralai/Mistral-7B-Instruct-v0.2";
$endpoint = "https://api-inference.huggingface.co/models/$model";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $project_id = $input['project_id'] ?? '';
    $title = $input['title'] ?? '';
    $description = $input['description'] ?? '';
    if (!$project_id || !$title || !$description) {
        echo json_encode(['success' => false, 'error' => 'Project info required']);
        exit;
    }
    $prompt = "Give a detailed step-by-step roadmap for a web app titled '$title' with description: $description.";
    $data = [ "inputs" => $prompt ];

    $ch = curl_init($endpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer " . HF_TOKEN,
        "Content-Type: application/json"
    ]);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    $response = curl_exec($ch);
    curl_close($ch);
    $respObj = json_decode($response, true);
    $roadmap = isset($respObj[0]['generated_text']) ? $respObj[0]['generated_text'] : $response;

    $stmt = $pdo->prepare('INSERT INTO roadmaps (project_id, steps, created_at) VALUES (?, ?, NOW())');
    $stmt->execute([$project_id, $roadmap]);
    $roadmap_id = $pdo->lastInsertId();
    echo json_encode(['success' => true, 'roadmap_id' => $roadmap_id, 'roadmap' => $roadmap]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'POST method only']);
    exit;
}
?>
