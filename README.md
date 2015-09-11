# tic-tac-toe

A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

Technologies, languages and frameworks Used
- HTML
- CSS
- jQuery
- Bootstrap
- Google Fonts


Here is a run-down of the problems I set out to solve in my initial notes
- Create a game-board with 9 squares (3x3)
	* bootstrap
	* use divs
	* give each div an individual id & same class --> id for jquery calling an individual cell, class for calling the entire grid
- Create the user operated X & O
	* set variable for each piece
- Process of taking turns
	* create counter at 0 and use modulus to figure out whos turn by computing odd or even
- Finding winner & tie
	* laying out all possible winning moves then using if/else to run through list
	* note: I only did a high-class overview for this problem and this is where my problems began trying to code from brief notes.
- Display history of games played
	* jquery append list to section created


Unsolved problems
- In the findWinner function logic, for some of the if statements for the different win combinations, when running through the program, some combinations has the alert popup several times, even though the code is the same for every win combo. I have added in a return; to end the function on those that were effected but it would nice to figure out why that is happening to only those specific cases- If it denies move, then it counts into my findTie counter so it declares a tie when the whole board isn't filled