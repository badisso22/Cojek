<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$team_id = $_GET['team_id'] ?? '';
if (!$team_id) {
    echo json_encode(['success' => false, 'error' => 'team_id required']);
    exit;
}
$stmt = $pdo->prepare('SELECT u.id, u.first_name, u.last_name, u.email, tm.joined_at
                      FROM team_members tm 
                      JOIN users u ON tm.user_id = u.id
                      WHERE tm.team_id = ?');
$stmt->execute([$team_id]);
$members = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['success' => true, 'members' => $members]);
?>
