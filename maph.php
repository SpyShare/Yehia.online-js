$homepage = file_get_contents('https://www.yehia.online/');
$doc = new DOMDocument;
$doc->loadHTML($homepage);
$titles = $doc->getElementsByTagName('h3');
echo $titles->item(0)->nodeValue;
