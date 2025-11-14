<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $id = $input['id'] ?? '';
    $first_name = $input['first_name'] ?? '';
    $last_name = $input['last_name'] ?? '';
    $country = $input['country'] ?? '';
    $role = $input['role'] ?? '';
    $date_of_birth = $input['date_of_birth'] ?? '';

    if (!$id || !is_numeric($id) || !$first_name || !$last_name || !$country || !$role || !$date_of_birth) {
        echo json_encode(['success' => false, 'error' => 'All fields are required.']);
        exit;
    }

    $stmt = $pdo->prepare('UPDATE users SET first_name=?, last_name=?, country=?, role=?, date_of_birth=?, updated_at=NOW() WHERE id=?');
    $success = $stmt->execute([$first_name, $last_name, $country, $role, $date_of_birth, $id]);

    if ($success) {
        echo json_encode(['success' => true, 'message' => 'Profile updated!']);
    } else {
        echo json_encode(['success' => false, 'error' => 'Update failed!']);
    }
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
    exit;
}
?>
