//IFFE
function myList(list)
{
	
	var entireList = [];
	
	for(var element = 0; element < list.length;  element++)
	{
		//nested function	
		(function(acElement)
		{
			//nested function in a nested function
			entireList[element] = function()
			{
				return list[acElement];
			};
						
		})(element);//"element" is the value for "acElement"		
		
	}
	
	return entireList;
}



/*
	NOTE: Global vaiables should be avoided and serves here only for demonstartion purposes
*/
//Source: https://www.goodreads.com/quotes
var Quotes = 
[
	'"Be yourself; everyone else is already taken." <br>― Oscar Wilde',
	'"Two things are infinite: the universe and human stupidity; and I am not sure about the universe." <br>― Albert Einstein',
	'"Be the change that you wish to see in the world." <br>― Mahatma Gandhi',
	'"Always forgive your enemies; nothing annoys them so much." <br>― Oscar Wilde',
	'"The fool doth think he is wise, but the wise man knows himself to be a fool." <br>― William Shakespeare, As You Like It',
	'"It is not a lack of love, but a lack of friendship that makes unhappy marriages." <br>― Friedrich Nietzsche',
	'"I like nonsense, it wakes up the brain cells.<br>Fantasy is a necessary ingredient in living." <br>― Dr. Seuss',
	'"If you judge people, you have no time to love them." <br>― Mother Teresa',
	'"Everything you can imagine is real." <br>― Pablo Picasso',
	'"All you need is love. <br>But a little chocolate now and then does not hurt." <br>― Charles M. Schulz',
	'"I am not afraid of death; <br>I just do not want to be there when it happens." <br>― Woody Allen',
	'"If you want your children to be intelligent, read them fairy tales.<br>If you want them to be more intelligent, read them more fairy tales." <br>― Albert Einstein',
	'"One good thing about music, when it hits you, you feel no pain." <br>― Bob Marley',
	'"Life is not about finding yourself.<br>Life is about creating yourself." <br>― George Bernard Shaw',
	'"If you can make a woman laugh, you can make her do anything." <br>― Marilyn Monroe',
	'"If there is a book that you want to read, but it has not been written yet, then you must write it." <br>― Toni Morrison',
	'"Anyone who has never made a mistake has never tried anything new." <br>― Albert Einstein',
	'"But better to get hurt by the truth than comforted with a lie." <br>― Khaled Hosseini',
	'"Do you hate people?” <br><br> “I do not hate them...I just feel better when they are not around." <br>― Charles Bukowski, Barfly',
	'“There is nothing like deep breaths after laughing that hard.<br>Nothing in the world like a sore stomach for the right reasons.” <br>― Stephen Chbosky, The Perks of Being a Wallflower'

];



function getQuote()
{
	
	var result = document.getElementById('element');
	
	//Generating index
	var randomIndex = Math.floor(Math.random() * Quotes.length);
	
	//set List
	var setList =  myList(Quotes);
	
	//Selecting a list element
	var selElement = setList[randomIndex];
	
	//Getting the selected quote
	result.innerHTML = selElement();
	
}





