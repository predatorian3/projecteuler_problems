/*
 * 
*/

var total = 0;

for(i = 0; i < 1000; i = i + 1)
{
	if(i % 3 == 0 || i % 5 == 0)
	{
		total += i;
	}
}

console.log(total);
