<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $user_id = $input['user_id'] ?? '';
    $team_id = $input['team_id'] ?? null; //for teams
    $title = $input['title'] ?? '';
    $description = $input['description'] ?? '';
    if (!$user_id || !$title || !$description) {
        echo json_encode(['success' => false, 'error' => 'All required fields missing']);
        exit;
    }
    $stmt = $pdo->prepare('INSERT INTO projects (title, description, created_by, team_id, created_at) VALUES (?, ?, ?, ?, NOW())');
    $stmt->execute([$title, $description, $user_id, $team_id]);
    $project_id = $pdo->lastInsertId();

    echo json_encode(['success' => true, 'project_id' => $project_id]);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'POST method only']);
    exit;
}
?>
