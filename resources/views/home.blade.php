<!DOCTYPE html>
<html  lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    	<!-- set the encoding of your site -->
	<meta charset="utf-8">
	<!-- set the viewport width and initial-scale on mobile devices -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- set the apple mobile web app capable -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<!-- set the HandheldFriendly -->
	<meta name="HandheldFriendly" content="True">
	<!-- set the apple mobile web app status bar style -->
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<!-- set the description -->
	<meta name="description" content="App Landing Page">
	<!-- set the Keyword -->
	<meta name="keywords" content="app, app landing, clean, landing, landing page, marketing, marketing landing, product, product landing, responsive, seo, startup landing ">
	<meta name="author" content="App Landing Page">
	<title>App Landing Page</title>
	<!-- include the site stylesheet -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i%7COswald:400,700" rel="stylesheet">
	<!-- include the site stylesheet -->
	<link rel="stylesheet" href="{{asset('css/bootstrap.css')}}">
	<!-- include the site stylesheet -->
	<link rel="stylesheet" href="{{asset('css/plugins.css')}}">
	<!-- include the site stylesheet -->
	<link rel="stylesheet" href="{{asset('css/font-awesome.min.css')}}">
	<!-- include the site stylesheet -->
	<link rel="stylesheet" href="{{asset('style.css')}}">
	<!-- include the site stylesheet -->
	<link rel="stylesheet" href="{{asset('css/colors.css')}}">
	<!-- include the site stylesheet -->
	<link rel="stylesheet" href="{{asset('css/responsive.css')}}">
	<!-- include the site stylesheet -->
	<style class="color_css"></style>
</head>
<body>
    <div id="app"></div>
    <script src="{{asset('js/app.js')}}"></script>
    <!-- Wrapper of the page end -->
	<!-- include jQuery -->
	<script src="{{asset('js/jquery.js')}}"></script>
	<!-- include jQuery -->
	<script src="{{asset('js/plugins.js')}}"></script>
	<!-- include jQuery -->
	<script src="{{asset('js/jquery.main.js')}}"></script>
	<!-- include jQuery -->
	<script src="{{asset('js/particles.js')}}"></script>
	<div id="style-changer" data-src="style-changer.html"></div>
</body>
</html>
