//Array methods:
// map:
// 1.Given an array of temperatures in Celsius, create a new array with temperatures converted to Fahrenheit.

var celsius=[20,23,40,10,30,33,55,67];
function convert(f)
{
	return (f*9/5)+32
}
var fahrenheit= celsius.map(convert);
console.log("Ans:"+fahrenheit);

// 2.Create a program to capitalize the first letter of each word in an array of strings.

var arr=['hi','hello','jai','nila'];
var res=arr.map(function(v,i)
				{
					var firstLetter = v.charAt(0).toUpperCase();
					var rest = v.slice(1).toLowerCase(); 
					return firstLetter + rest;
				});
		console.log("Ans:"+res);	

// 3.Given an array of strings, create a new array that contains the lengths of each string.

var arr=['hi','hello','jai','nila'];
var res=arr.map(function(v,i)
				{
					var len = v.length;
					return len;
				});
		console.log("Ans:"+res);	

// Filter:
// 1.Filter an array of numbers to find prime number.

var num=[3,7,5,9,2,10,11,14,17];

function checkPrime(value)
{
	for(let i=2;value>i;i++)
	{
		if(value%i==0)
		{
			return false;
		}
	}
	return value >1;
	
}
console.log("Ans:"+num.filter(checkPrime));		

// 2.Given an array of objects representing books, filter the books published after the year 2000.

var books=[{
			name:"book1",
			year:2001
			},
			{
			name:"book2",
			year:2000
			},
			{
			name:"book3",
			year:2011
			},
			{
			name:"book4",
			year:2007
			},
			{
			name:"book5",
			year:1999
			},
			{
			name:"book6",
			year:2022
			}];
	var filterbooks=books.filter(function(value)
								{ 
									if(value.year > 2000)
									{
										return value;
									}
								});
		console.log(filterbooks);
			

// 3.Filter an array of strings to find palindromes.

var str = ['malayalam','divid','hello','maham','jai'];

function findPalindrome(word)
{
	if(word.split('').reverse().join('') === word)
	{
		return word
	}
}

console.log("Palindrome Strings:"+str.filter(findPalindrome));

// Reduce:

// 1.Given an array of words, find the longest word.
var str = ['malayalam','divid','hello','maham','jai'];
function findlongest(word)
{
var longestWord = 0;

  for(var i = 0; i < str.length; i++)
  {
	if(str[i].length > longestWord)	// If strSplit[i].length is greater than the word it is compared with...
	{ 
		longestWord = str[i];	// ...then longestWord takes this new value
	
     }
  }
  return longestWord;
}
  
	console.log("Ans:"+findlongest());
	
// 2.Calculate the average of a list of test scores.

var num=[1,2,3,4,5];
var sum=num.reduce(function(v,currentvalue)
					{
						return v+currentvalue;
					});
	var avg=sum/num.length;
	console.log("Average:"+avg);

// 3.Find the maximum value in an array of numbers.
// var maxVal=[5,10,55,33,73,89,99,3,2];
// var result = maxVal.reduce((a, b) => Math.max(a, b));

// console.log(result);


// find:
// 1.Given an array of objects representing books, find the book with the highest rating.
var books=[{
			name:"book1",
			year:2001,
			rating:3
			},
			{
			name:"book2",
			year:2000,
			rating:4
			},
			{
			name:"book3",
			year:2011,
			rating:2
			},
			{
			name:"book4",
			year:2007,
			rating:4
			},
			{
			name:"book5",
			year:1999,
			rating:4.5
			},
			{
			name:"book6",
			year:2022,
			rating:3.5
			}];
function findRating(book)
{
  if(book.rating >3)
  {
    return book;
  }
}
console.log(books.find(findRating));

// 2.Find the first occurrence of a word containing 'apple' in an array of strings.
var fruits=['mango','banana','apple','apple','jackfruit'];
var findOccurance=fruits.find(function(v,i)
							{
								if(v==='apple')
								{
									return v;
								}
							});
	console.log(findOccurance);
	
// 3.Find the first student with a GPA above 3.5 in an array of student objects.

var student = [
  { name: "nila", gpa: 3 },
  { name: "harsha", gpa: 3.5 },
  { name: "nivin", gpa: 4 },
  { name: "yuvi", gpa: 4.2 },
];

var result = student.find(function(v)
						{ 
							if(v.gpa>3.5)
							{
								return v;
							}
						});

console.log(result); 

// Includes,some&every:
// 1.Check if all users in an array are adults (age 18 or older) using every().
var user=[
			{ name:'jai', age:30},
			{ name:'ram', age:35},
			{ name:'nila', age:10},
			{ name:'harsh', age:8}
		];
 function findAdult(a)
 {
   if(a.age > 18)
   {
		return a;
   }
  
 }
 console.log(user.every(findAdult));

// 2.Determine if any strings in an array contain more than 10 characters using some().

var str = ['malayalam','divid','hello','maham','jai','hihelloworld'];
function findWord(a)
 {
   if(a.length > 10)
   {
		return a;
   }
  
 }
 console.log(str.some(findWord));

// 3.Determine if an array of books includes a book with the title "Harry Potter" using the includes().
var books=["My First Library ","Harry Potter","Hickory Dickory Dock","The Little Red Hen"];
console.log(books.includes("Harry Potter"));