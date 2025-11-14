<?php
require_once(__DIR__ . '/../config/db.php');

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $email = $input['email'] ?? '';
    $password = $input['password'] ?? '';

    if (!$email || !$password) {
        echo json_encode(['success' => false, 'error' => 'Email and password required.']);
        exit;
    }

    $stmt = $pdo->prepare('SELECT id, password, name FROM users WHERE email = ?');
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        echo json_encode([
            'success' => true,
            'user' => [ 'id' => $user['id'], 'name' => $user['name'], 'email' => $email ]
        ]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Invalid email or password.']);
    }
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
    exit;
}
?>
