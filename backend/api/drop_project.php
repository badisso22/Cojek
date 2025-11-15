<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $project_id = $input['project_id'] ?? '';
    $user_id = $input['user_id'] ?? '';
    if (!$project_id || !$user_id) {
        echo json_encode(['success' => false, 'error' => 'Project and user IDs required']);
        exit;
    }
    $stmt = $pdo->prepare('UPDATE projects SET status = "dropped", updated_at = NOW() WHERE id = ? AND created_by = ?');
    $success = $stmt->execute([$project_id, $user_id]);
    echo json_encode(['success' => $success]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'POST only']);
    exit;
}
?>
