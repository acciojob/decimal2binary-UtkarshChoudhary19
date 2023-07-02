
// JavaScript program to implement the approach
// function to convert decimal to binary
function DecimalToBinary(num)
{
	var str = "";
	while (num)
	{
	
		// adding the result of num & 1 to str
		if (num & 1) // 1
			str += '1';
		else // 0
			str += '0';
			
		// Right Shift by 1
		num >>= 1;
	}
	return str;
}

// function to print reverse of str
function reverse(str)
{
	var res = "";
	for (var i = str.length - 1; i >= 0; i--)
		res += (str[i]);
	document.write(res);
}

// Driver Code
var num = 59;
document.write("Binary of num " + num + " is: ");

// function call
reverse(DecimalToBinary(num));

