<?php
require "json_path.php";

$result = $db->selectAll("keep");

if ($result) {
    echo json_encode($result);
} else {
    echo json_encode(array(
            "error" => "Ошибка, таблица пустая",
        )
    );
}

