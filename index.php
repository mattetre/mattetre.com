<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Matt Etre</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

		<link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.1-respond-1.1.0.min.js"></script>
        
        <script src="js/vendor/jquery-1.8.1.min.js"></script>
		<script src="js/vendor/underscore.js"></script>
		<script src="js/vendor/backbone.js"></script>

		<link rel="icon" href="mattetre.com/favicon.ico" type="image/x-icon" />

    </head>
    
    <body>
        <header class="clearfix">
            <div class="title">mattetre.com</div>
            <nav>
                <ul>
                    <li><a href="#!page/projects.html" class="nav-item">projects</a></li>
                    <li><a href="#!page/blog.html" class="nav-item">blog</a></li>
                    <li><a href="#!page/about.html" class="nav-item">about</a></li>
                    <li><a href="#!page/contact.html" class="nav-item">contact</a></li>
                </ul>
            </nav>
        </header>

        <div>
            <div class="main clearfix">
            	
				<div id="dynamic-content" class="content">
					<?php
						/* This is used to setup static page references for search engine crawling */
						
						// get the _escaped_fragment_ parameter
						$escapedfragment = $_GET['_escaped_fragment_'];
						// if the escaped fragment is set then load up static page in PHP
						if (isset($escapedfragment)) {
							include($escapedfragment);
						} else {
							// Otherwise use javascript to load and interact with page
							echo("<script src='js/app/contentview.js'></script>");
							echo("<script src='js/app/app.js'></script>");
						}
					?>
				</div>

                <aside>
                	<div class="content">
	                    <h3>recent activity</h3>
	                    <p>Working on updating this site...</p>
	                    <br>
	                    <span>todo:</span>
	                    <ul class="todo">
	                    	<li>Make web page responsive and viewable on mobile devices</li>
	                    	<li>Create a simple blogging system</li>
	                    </ul>
                    </div>
                </aside>

            </div> <!-- #main -->
        </div> <!-- #main-container -->

        <div class="footer-container">
            <footer class="wrapper clearfix">
                <span>Copyright Matthew Etre 2012</span>
            </footer>
        </div>

    </body>
</html>



