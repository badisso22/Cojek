<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $team_id = $input['team_id'] ?? '';
    $user_id = $input['user_id'] ?? '';
    if (!$team_id || !$user_id) {
        echo json_encode(['success' => false, 'error' => 'team_id and user_id required']);
        exit;
    }
    $stmt = $pdo->prepare('DELETE FROM teams WHERE id = ? AND created_by = ?');
    $success = $stmt->execute([$team_id, $user_id]);
    echo json_encode(['success' => $success]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'POST only']);
    exit;
}
?>
