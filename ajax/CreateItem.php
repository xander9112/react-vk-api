<?php
require "json_path.php";

//dump($_POST);


$data = $_POST /*|| array(
        "id" => 1,
        "title" => "Вторая запись",
        "description" => "Описание Второй записи",
        "date" => date("Y-m-d H:i:s"),
    )*/
;

$lastId = 0;
//dump($data);
if ($db->selectAll('keep')) {
    $last = array_pop($db->selectAll('keep'));
    $lastId = (int)$last['id'];
    $lastId += 1;
}

$data['id'] = $lastId;
$data['date'] = date("Y-m-d H:i:s");
//dump($data);
//die();

if ($db->insert("keep", $data, true)) {
    echo json_encode(array(
        "success" => "Запись успешно добавлена"
    ));
} else {
    echo json_encode(array(
        "error" => "Ошибка при добавлении записи"
    ));
}
