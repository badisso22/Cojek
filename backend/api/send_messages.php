<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $sender_id = $input['sender_id'] ?? '';
    $team_id = $input['team_id'] ?? '';
    $content = $input['content'] ?? '';
    if (!$sender_id || !$team_id || !$content) {
        echo json_encode(['success' => false, 'error' => 'All fields required']);
        exit;
    }
    $stmt = $pdo->prepare('INSERT INTO messages (sender_id, team_id, content, sent_at) VALUES (?, ?, ?, NOW())');
    $stmt->execute([$sender_id, $team_id, $content]);
    echo json_encode(['success' => true]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'POST only']);
    exit;
}
?>
