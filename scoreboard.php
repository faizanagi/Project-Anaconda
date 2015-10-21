<?php
	$conn = mysql_connect("localhost", "root", "");
	$db = mysql_select_db("kkprojectanaconda", $conn);

	$query = "SELECT * FROM scoretable ORDER BY score DESC LIMIT 10 ";
	$result = mysql_query($query);
	//mysql_close($conn);
	
?>
	