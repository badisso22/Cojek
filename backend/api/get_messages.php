<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$team_id = $_GET['team_id'] ?? '';
if (!$team_id) {
    echo json_encode(['success' => false, 'error' => 'team_id required']);
    exit;
}

$stmt = $pdo->prepare('SELECT m.*, u.first_name, u.last_name 
                       FROM messages m 
                       JOIN users u ON m.sender_id = u.id
                       WHERE m.team_id = ? ORDER BY m.sent_at ASC');
$stmt->execute([$team_id]);
$messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['success' => true, 'messages' => $messages]);
?>
