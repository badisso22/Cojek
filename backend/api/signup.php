<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $first_name = $input['first_name'] ?? '';
    $last_name = $input['last_name'] ?? '';
    $username = $input['username'] ?? '';
    $email = $input['email'] ?? '';
    $password = $input['password'] ?? '';
    $date_of_birth = $input['date_of_birth'] ?? '';
    $country = $input['country'] ?? '';
    $role = $input['role'] ?? 'student';

    if (!$first_name || !$last_name || !$username || !$email || !$password || !$date_of_birth || !$country || !$role) {
        echo json_encode(['success' => false, 'error' => 'All fields required.']);
        exit;
    }

    $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ? OR username = ?');
    $stmt->execute([$email, $username]);
    if ($stmt->fetch()) {
        echo json_encode(['success' => false, 'error' => 'Email or username already registered.']);
        exit;
    }
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare('INSERT INTO users (first_name, last_name, username, email, password, date_of_birth, country, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([$first_name, $last_name, $username, $email, $hashed_password, $date_of_birth, $country, $role]);

    echo json_encode(['success' => true, 'message' => 'Account created!']);
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
    exit;
}
?>
