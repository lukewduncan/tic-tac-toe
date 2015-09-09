$(function(){

	var pieceX = "X";
	var pieceO = "O";

	// took concept from the ATM assignment
	var switchTurn = 0;


    // setting who's turn it is -- basing it off count 0. Even = pieceX, Odd = pieceO
      $(".cell-design").click(function() { 
	            if (switchTurn % 2 === 0){
	              		$(this).text(pieceX);
	            } else {
	            	// if player move doesn't equal even number, then pieceO turn
	              $(this).text(pieceO);
	            }
	        switchTurn++; 
	        findWinner();
      });

    // find the winnner -- function for searching winner for pieceX and pieceO
    function findWinner() {
    	//checks to see if x has won the game

    	var cellzero = $("#cell0");
    	var cellone = $("#cell1");
    	var celltwo = $("#cell2");
    	var cellthree = $("#cell3");
    	var cellfour = $("#cell4");
    	var cellfive = $("#cell5");
    	var cellsix = $("#cell6");
    	var cellseven = $("#cell7")
    	var celleight = $("#cell8");
    	var cellnine = $("cell9");

    	var searchCell0 = $("#cell0").text() !== " ";

    	if (searchCell0) {
	    	if ($(cellzero).text() === $(cellone).text()) {
				if ($(cellzero).text() === $(celltwo).text()) {
					alert("Game Over. Player " + $(cellzero).text() + " wins!")
				}
			}
			if ($(cellzero).text() === $(cellthree).text()) {
				if ($(cellzero).text() === $(cellsix).text()) {
					alert("Game Over. Player " + $(cellzero).text() + " wins!")
				}
			}
			if ($(cellzero).text() === $(cellfour).text()) {
				if ($(cellzero).text() === $(celleight).text()) {
					alert("Game Over. Player " + $("cellzero").text() + " wins!")
				}
			}
		} //end of first row (all possible combinations accounted for from cellzero)

	}; // end of findWinner function

}); 


