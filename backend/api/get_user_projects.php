<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$user_id = $_GET['user_id'] ?? '';
if (!$user_id) {
    echo json_encode(['success' => false, 'error' => 'User ID required']);
    exit;
}

$stmt = $pdo->prepare('SELECT * FROM projects WHERE created_by = ? ORDER BY created_at DESC');
$stmt->execute([$user_id]);
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['success' => true, 'projects' => $rows]);
?>
