<?php
require_once 'scssphp/scss.inc.php';

use ScssPhp\ScssPhp\Compiler;

$url_host = 'http://' . $_SERVER['HTTP_HOST'];
$pattern_document_root = addcslashes(realpath($_SERVER['DOCUMENT_ROOT']), '\\');
$pattern_uri = '/' . $pattern_document_root . '(.*)$/';
preg_match_all($pattern_uri, __DIR__, $matches);
$url_path = $url_host . $matches[1][0];
$url_path = str_replace('\\', '/', $url_path);

$scss = new Compiler();
$scss->setImportPaths('scss/');
$style = $scss->compile('@import "59.scss";');
file_put_contents("css/59.css", $style);
?>
<!DOCTYPE html>
<html lang="vi">

<head>
	<title>59</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="<?php echo $url_path ?>/css/59.css" rel="stylesheet" type="text/css" />
	<link href="<?php echo $url_path ?>/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<script src="<?php echo $url_path ?>/js/59.js" ></script>

	
</head>

<body>
	<?php include '../59/59-content.php'; ?>
</body>

</html>