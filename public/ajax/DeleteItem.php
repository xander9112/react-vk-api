<?php
require "json_path.php";

if (isset($_POST["id"])) {
    $id = $_POST["id"];
    $result = $db->delete("keep", "id", $id);

    if ($result) {
        echo json_encode(array(
                "success" => "Запись успешно удалена"
            )
        );
    } else {
        echo json_encode(array(
                "error" => "Ошибка при удалении записи"
            )
        );
    }

} else {
    echo json_encode(array(
            "error" => "Ошибка, нет такой записи",
        )
    );
}
