<?php
require_once(__DIR__ . '/../config/db.php');
require_once(__DIR__ . '/../config/api_keys.php');

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$model = "mistralai/Mistral-7B-Instruct-v0.2";
$endpoint = "https://api-inference.huggingface.co/models/$model";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $skills = $input['skills'] ?? '';
    if (!$skills) {
        echo json_encode(['success' => false, 'error' => 'Skills required']);
        exit;
    }

    $prompt = "Suggest 3 web app project ideas for someone with these skills: $skills. Each idea: title + 1-sentence description.";

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

    $ideas = isset($respObj[0]['generated_text']) ? $respObj[0]['generated_text'] : $response;

    echo json_encode(['success' => true, 'ideas' => $ideas]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'POST method only']);
    exit;
}
?>
