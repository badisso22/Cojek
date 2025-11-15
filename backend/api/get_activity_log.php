<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$user_id = $_GET['user_id'] ?? '';
$team_id = $_GET['team_id'] ?? '';
if (!$user_id && !$team_id) {
    echo json_encode(['success' => false, 'error' => 'user_id or team_id required']);
    exit;
}
if ($user_id) {
    $stmt = $pdo->prepare('SELECT * FROM activity_log WHERE user_id = ? ORDER BY created_at DESC');
    $stmt->execute([$user_id]);
} else {
    $stmt = $pdo->prepare('SELECT * FROM activity_log WHERE team_id = ? ORDER BY created_at DESC');
    $stmt->execute([$team_id]);
}
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode(['success' => true, 'activities' => $rows]);
?>
