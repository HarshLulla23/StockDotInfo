<?php
    $url='localhost';
    $username='kunal';
    $password='kunal';
    $conn=mysqli_connect($url,$username,$password,"register");
    if(!$conn){
        die('Could not Connect My Sql:' .mysql_error());
    }
?>