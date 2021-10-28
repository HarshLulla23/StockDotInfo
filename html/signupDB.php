<?php
extract($_POST);
include("database.php");
$sql=mysqli_query($conn,"SELECT * FROM register where Email='$email'");
if(mysqli_num_rows($sql)>0)
{
        echo '<script type="text/javascript">'; 
        echo 'alert("Email Already Existed");'; 
        echo 'window.location.href = "register.php";';
        echo '</script>';
	
}
else if(isset($_POST['save']))
{
    $file = rand(1000,100000)."-".$_FILES['file']['name'];
    $file_loc = $_FILES['file']['tmp_name'];
    $folder="../upload/";
    $new_file_name = strtolower($file);
    $final_file=str_replace(' ','-',$new_file_name);
    if(move_uploaded_file($file_loc,$folder.$final_file))
    {
       $var= "SELECT * FROM register where Password='$pass'";
       $pass1=md5($pass);
       echo '<script type="text/javascript"> alert("Email Already Existed"); </script>';
        $query="INSERT INTO register(First_Name, Email, Password, File ) VALUES ('$username', '$email', '$pass1', '$final_file')";
        $sql=mysqli_query($conn,$query)or die("Could Not Perform the Query");
        header ("Location: Login.html?status=success");
    }
    else 
    {
		echo "Error.Please try again";
	}
}

?>