<?php

require "JsonDB.class.php";

$db = new JsonDB($_SERVER["DOCUMENT_ROOT"] . "/public/data/json_database/");

$data = array(
    "id" => 1,
    "title" => "Вторая запись",
    "description" => "Описание Второй записи",
    "date" => date("Y-m-d H:i:s"),
);

var_dump($db->insert("keep", $data, true));


//$db->createTable("keep");


//$my_another_new_table = new JsonTable("./string_statuses/demo14.json", true);
//$my_another_new_table->insert(array("newkey2" => "newvalue2"));
