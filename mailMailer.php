<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer-6.6.5/src/Exception.php';
require 'PHPMailer-6.6.5/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer-6.6.5/language/');
$mail->IsHTML(true);

//от кого письмо
$mail->setFrom('info@fls.guru', 'Konstantin');
//Кому
$mail->addAddress('kostja-kot@mail.ru');
//тема письма
$mail->Subject = "Тестовое письмо";

//checkbox
$hand = "Правая";
if ($_POST['hand'] == "left") {
  $hand = "Левая";
}

//Тело письма
$body = '<h1>Это тестовое письмо</h1>';

if (trim(!empty($_POST['name']))) {
  $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
  $body .= '<p><strong>E-mail:</strong> ' . $_POST['e-mail'] . '</p>';
}
if (trim(!empty($_POST['hand']))) {
  $body .= '<p><strong>Рука:</strong> ' . $hand . '</p>';
}
if (trim(!empty($_POST['age']))) {
  $body .= '<p><strong>Рука:</strong> ' . $hand['age'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
  $body .= '<p><strong>Рука:</strong> ' . $hand['message'] . '</p>';
}

//прикрепить фаил
if (!empty($_FILES['image']['tmp_name'])) {
  //путь загрузки файла
  $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
  //грузим файл
  if (copy($_FILES['image']['tmp_name'], $filePath)) {
    $fileAttach = $filePath;
    $body .= '<p><strong>Фото в приложении</strong>';
    $mail->addAttachment($fileAttach);
  }
}

    $mail->Body = $body;

    //Отправляем
    if(!$mail->send()){
      $message = 'Ошибка';
    } else{
      $massage = 'Данные отправлены!';
    }

      $response = ['message' => $message];

      header('Content-Type : application/json');
      echo json_encode($response);
