// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
number
//15 is a number becuase there are not any quotation marks.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
string
//"Hello" is a string because the letters fall inside of quotation marks.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
array
//This is an array because it is a group of related data types within square brackets.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
number
//NaN (not a number) is a number that you get as a response to a math equation that is not possible to complete.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
hamburgers
//The two strings are concatenated togehter to form one string.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
NaN
//Cannot use subtraction on strings, so the strings are treated as numbers, resulting in NaN.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
jonny5
//These two pieces of data are concatenated togehter to form a single piece of data.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
NaN
//Numbers and strings cannot be multiplied together, so they are treated as numbers since multiplication is being used, giivng the output Not a Number.

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
var numbers = [ 3, 4, 6, 10]
//Pop takes the last number (8) off the end of the array, push adds 10 to the end, unshift(3) adds 3 to the beginning of the array.

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
[ 'dot', 'dash', 'pause', 'dash', 'dot' ]
//.join joins all of the strings together w/o spaces b/t them and also adds the string 'dash' between each word. .split adds a space between each word.

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
Mick", "Ringo", "Ronnie", "Ringo", "Paul", "John", "George"
//.push adds the beatles array to the bands variable. .unshift adds the stones variable to the beginning of the bands array. .pop removes the last musician. .shift removes the first musician. [1][3] replaces the first and third musicians' names with'Ringo'.
