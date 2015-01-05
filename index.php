<?php
	require_once("inc/require.php");
?>
<!DOCTYPE html>
<html lang="en-US" class="no-js">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="initial-scale=1.0 maximum-scale=1.0 user-scalable=no">
		<meta name="description" content="Hello! My name is Aleksander Fras. I am front and back-end developer. I am developing Wordpress plugins and themes, but that's not all.">
		<meta name="msapplication-TileColor" content="#174520">
		<meta name="msapplication-TileImage" content="/mstile-144.png">
		<title>Aleksander Fras - Web developer</title>
		<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    	<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    	<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    	<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"> 
		<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
		<style id="af-style">
		<?php
			readfile("less/style.min.css");
		?>
		</style>
		<script>
		var htmlElement = document.getElementsByTagName("html")[0];
		htmlElement.className = htmlElement.className.replace("no-js", "js");
		//small hack for html5 section element... inluding whole html5shiv script is unnecessary
		document.createElement("section");
		</script>
	</head>
	<body class="home">
		<section class="container">
			<div class="line logo-line">
				<img id="logo" src="<?php echo AFLOGO; ?>" alt="AF Logo">
			</div>
			<div class="line social-icons-line">
				<a id="github-link" href="//goo.gl/Q9eU5n"  target="_blank" title="github" class="social-icon-container social-github"><div class="fa fa-github-alt fa-4x"></div></a>
				<a id="twitter-link" href="//goo.gl/N7a6uk" target="_blank" title="twitter" class="social-icon-container social-twitter"><div class="fa fa-twitter fa-4x"></div></a>
				<a id="info-link" href="//about.aleksanderfras.com" target="_blank" title="about" class="social-icon-container social-info"><div class="fa fa-info fa-4x"></div></a>
				<a id="blog-link" href="//blog.aleksanderfras.com" target="_blank"  title="blog" class="social-icon-container social-wordpress"><div class="fa fa-wordpress fa-4x"></div></a>
			</div>
		</section>
		<script>
		<?php
		readfile("build/all.min.js");
		?>
		</script>
	</body>
</html>
