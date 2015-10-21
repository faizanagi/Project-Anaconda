<?php
	$conn = mysql_connect("localhost", "root", "");
	$db = mysql_select_db("kkprojectanaconda", $conn);

	$email = ($_POST['email']);
	$username = ($_POST['username']);
	$score = ($_POST['scoreData']);
	$datetime = date('Y-m-d H:i:s');

	$query = "INSERT INTO scoretable(username, email, score, datetime) VALUES ('$username', '$email', '$score', '$datetime')";

	if(mysql_query($query)){
		echo "success";
	}

	else{
		echo "failed";
	}

	//mysql_close($conn);
?>
		