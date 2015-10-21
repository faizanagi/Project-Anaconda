<!DOCTYPE html>
<html>
	<head>
		<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
		<meta name="description" content="Get ready for kodekeras.">
		<meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
		<meta property="og:type"               content="article" />
		<meta property="og:title"              content="When Great Minds Don’t Think Alike" />
		<meta property="og:description"        content="How much does culture influence creative thinking?" />
		<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
		<!-- AddToAny BEGIN -->

		<script type="text/javascript" src="//static.addtoany.com/menu/page.js"></script>
<!-- AddToAny END -->
		<title>This is A Snake Test</title>
		<style type="text/css">
		body{
			background-color: #f2f2f2;
		}
		
		iframe{
			border: 5px solid #dfdfdf;
		}

		</style>
		
	</head>

	<body>
	<div id="fb-root"></div>

	
		<div align="center">
			<iframe src="anaconda.html" width="800" height="550" name="mainFrame">
				<p>browser kamu tidak support game ini :(</p>
			</iframe>
		</div>

		<div align="right">
			
			
			<table>
				<?php include 'scoreboard.php';
					if(mysql_num_rows($result) > 0){
						while($row = mysql_fetch_array($result)){
						   echo "<tr><td>".$row["username"]."</td>"."<td>".$row["score"]."</td></tr>";
						}
					}
				?>
			</table>
		</div>
	</body>
</html>