<?php
    $url='localhost:3307';
    $username='root';
    $password='';
    $conn=mysqli_connect($url,$username,$password,"register");
    if(!$conn){
        die('Could not Connect My Sql:');
    }
?>