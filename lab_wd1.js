<html>
<head>
<title> clousure</title>
<script>
function addNumber(firstno,secondno)
<script>
function addNumbers(firstno,secondno)
{
	var returnValue="Result is: ";
	function add()
	{
		return returnValue+(firstno + secondno);
	}
	return add();
}
var result=addNumbers(10,20);
document.write(result);
</script>
</head>
<body></body>
</html>
