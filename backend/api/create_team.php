<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $team_name = $input['team_name'] ?? '';
    $created_by = $input['created_by'] ?? '';
    if (!$team_name || !$created_by) {
        echo json_encode(['success' => false, 'error' => 'Team name and creator required']);
        exit;
    }
    $stmt = $pdo->prepare('INSERT INTO teams (team_name, created_by, created_at) VALUES (?, ?, NOW())');
    $stmt->execute([$team_name, $created_by]);
    $team_id = $pdo->lastInsertId();
    echo json_encode(['success' => true, 'team_id' => $team_id]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'POST only']);
    exit;
}
?>
