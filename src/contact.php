<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получение данных формы
    $name = $_POST['firstname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $comment = $_POST['subject'];

    // Подключение к API SendGrid
    $url = 'https://api.sendgrid.com/v3/mail/send';
    $api_key = 'YOUR_SENDGRID_API_KEY';

    // Создание заголовков для API-запроса
    $headers = array(
        'Authorization: Bearer ' . $api_key,
        'Content-Type: application/json'
    );

    // Создание данных письма
    $data = array(
        'personalizations' => array(
            array(
                'to' => array(
                    array(
                        'email' => 'technotrashinfo@gmail.com'  // Ваш адрес электронной почты
                    )
                ),
                'subject' => 'Новое сообщение с формы контакта'
            )
        ),
        'from' => array(
            'email' => $email,
            'name' => $name
        ),
        'content' => array(
            array(
                'type' => 'text/plain',
                'value' => "Имя: $name\nТелефон: $phone\nE-mail: $email\nКомментарий: $comment"
            )
        )
    );

    // Отправка запроса к API SendGrid
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // Опционально: перенаправление пользователя на другую страницу после отправки формы
    // header('Location: thank-you.html');
}
?>