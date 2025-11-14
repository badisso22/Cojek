<?php
require_once(__DIR__ . '/../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $login_id = $input['login_id'] ?? '';
    $password = $input['password'] ?? '';

    if (!$login_id || !$password) {
        echo json_encode(['success' => false, 'error' => 'Email/Username and password required.']);
        exit;
    }

    $stmt = $pdo->prepare('SELECT id, first_name, last_name, username, email, password, date_of_birth, country, role FROM users WHERE email = ? OR username = ?');
    $stmt->execute([$login_id, $login_id]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        echo json_encode([
            'success' => true,
            'user' => [
                'id' => $user['id'],
                'first_name' => $user['first_name'],
                'last_name' => $user['last_name'],
                'username' => $user['username'],
                'email' => $user['email'],
                'date_of_birth' => $user['date_of_birth'],
                'country' => $user['country'],
                'role' => $user['role']
            ]
        ]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Invalid login or password.']);
    }
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
    exit;
}
?>
