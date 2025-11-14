<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$user_id = $_GET['id'] ?? '';

if (!$user_id || !is_numeric($user_id)) {
    echo json_encode(['success' => false, 'error' => 'Valid user ID required.']);
    exit;
}

$stmt = $pdo->prepare('SELECT id, first_name, last_name, username, email, date_of_birth, country, role, created_at, updated_at FROM users WHERE id = ?');
$stmt->execute([$user_id]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo json_encode(['success' => true, 'user' => $user]);
} else {
    echo json_encode(['success' => false, 'error' => 'User not found']);
}
?>
