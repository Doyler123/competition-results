<?php

    header('Access-Control-Allow-Origin: *');
    
    // error_reporting(E_ALL);
    // ini_set('display_errors',1);

    if(isset($_FILES['prize-breakdown'])){
        $uploads_dir = $_SERVER['DOCUMENT_ROOT'] . '/images/Luttrellstown/Competitions/2018';
        $name = $_FILES["prize-breakdown"]["name"];
        $filename = $uploads_dir . '/' . $name;
        if (!file_exists($filename)) {
            move_uploaded_file($_FILES["prize-breakdown"]["tmp_name"], $filename);
        }
    }

    
?>