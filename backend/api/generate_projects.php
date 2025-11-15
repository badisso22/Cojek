<?php
require_once(__DIR__ . '/../config/db.php');
require_once(__DIR__ . '/../config/api_keys.php');

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$model = "mistralai/Mistral-7B-Instruct-v0.2";
$endpoint = "https://api-inference.huggingface.co/models/$model";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $messages = $input['messages'] ?? [];
    if (!is_array($messages) || count($messages) === 0) {
        echo json_encode(['success' => false, 'error' => 'Message history required']);
        exit;
    }
    $prompt = "You are an expert AI project advisor. Answer only based on the latest user's message, but use prior messages for context.\n";
    foreach ($messages as $msg) {
        $role = $msg['role'] === 'user' ? 'User' : 'AI';
        $prompt .= "$role: " . trim($msg['content']) . "\n";
    }
    $prompt .= "AI:";

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
    $reply = isset($respObj[0]['generated_text']) ? $respObj[0]['generated_text'] : $response;
    $parts = explode("AI:", $reply);
    $answer = trim(end($parts));

    echo json_encode(['success' => true, 'reply' => $answer]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'POST method only']);
    exit;
}
?>
