<?php
$jscripts = array(
	"paths" => array(
		"jquery" => str_replace( array( "\\", "/"), "/", MODULESDIR . "jquery/dist/cdn/jquery-1.11.1.min" ),
		"velocity" => str_replace( array( "\\", "/"), "/", MODULESDIR . "velocity-animate/velocity.min" )
		//,"afnimation" => str_replace( array( "\\", "/"), "/", JSDIR . "afnimation" )
	),
	"shim" => array(
		"velocity" => array(
			"deps" => array(
				"jquery"
			)
		)/*,
		"afnimation" => array(
			"deps" => array(
				"jquery",
				"velocity"
			)
		)*/
	)
);
?>