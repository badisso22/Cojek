<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $notification_id = $input['notification_id'] ?? '';
    if (!$notification_id) {
        echo json_encode(['success' => false, 'error' => 'notification_id required']);
        exit;
    }
    $stmt = $pdo->prepare('UPDATE notifications SET is_read = 1, updated_at = NOW() WHERE id = ?');
    $success = $stmt->execute([$notification_id]);
    echo json_encode(['success' => $success]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'POST only']);
    exit;
}
?>
