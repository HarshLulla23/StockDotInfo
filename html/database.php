<?php
    $url='localhost';
    $username='root';
    $password='';
    $conn=mysqli_connect($url,$username,$password,"register");
    if(!$conn){
        die('Could not Connect My Sql:');
    }
?>