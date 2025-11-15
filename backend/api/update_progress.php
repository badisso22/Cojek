<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $project_id = $input['project_id'] ?? '';
    $user_id = $input['user_id'] ?? '';
    $progress = $input['progress'] ?? '';
    if (!$project_id || !$user_id || $progress == '') {
        echo json_encode(['success' => false, 'error' => 'All fields required']);
        exit;
    }
    $stmt = $pdo->prepare('INSERT INTO progress (project_id, user_id, progress, updated_at) VALUES (?, ?, ?, NOW())');
    $success = $stmt->execute([$project_id, $user_id, $progress]);
    echo json_encode(['success' => $success]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'POST only']);
    exit;
}
?>
