<?php
require "json_path.php";

if (isset($_GET["id"])) {
    $id = $_GET["id"];
    $result = $db->select("keep", "id", $id)[0];

    if ($result) {
        echo $result;
    } else {
        echo json_encode(array(
                "error" => "Ошибка, запись не найдена"
            )
        );
    }

} else {
    echo json_encode(array(
            "error" => "Ошибка, нет такой записи",
        )
    );
}
