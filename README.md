# Tic-Tac-Toe
Technologies, languages and frameworks used:
- HTML
- CSS
- Bootstrap (using CDN)
- jQuery
- Google Fonts

<br>
Here is a run-down of the problems I set out to solve in my initial notes
- Create a game-board with 9 squares (3x3)
	* bootstrap
	* use divs & bootstrap column xs-4 (need to set height on individual cells)
	* give each div an individual id & same class --> id for jquery calling an individual cell, class for calling the entire grid
- Create the user operated X & O
	* set variable for each piece
- Process of taking turns
	* create counter at 0 and use modulus to figure out whos turn by computing odd or even
	* initial notes: set modulus
	* changed to setting to 1 or 2 instead, made more sense and allowed me to switch the starter between games e.g. x goes first, then o begins the next game first.
- Finding winner & tie
	* laying out all possible winning moves then using if/else to run through list
	* note: I only did a high-class overview for this problem and this is where my problems began trying to code from brief notes.
- Display history of games played
	* jquery append list to section created


Unsolved problems/what can be improved
- In the findWinner function logic, for some of the if statements for the different win combinations, when running through the program, some combinations has the alert popup several times, even though the code is the same for every win combo. I have added in a return; to end the function on those that were effected but it would nice to figure out why that is happening to only those specific cases.
- Displaying Player 1 won or Player 2 won instead of O wins! or X wins!
- More DRY code needed

Next Time
* Create high level notes first, then create pseudo code on sublime, then code it out
* Don't confuse high level notes for pseudo code
* Focus on functionality before touching CSS
* Write more DRY code