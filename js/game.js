$(function(){

	

	var pieceX = "X";
	var pieceO = "O";

	var switchTurn = 0;


    // setting who's turn it is -- basing it off count 0. Even = pieceX, Odd = pieceO
      $(".cell-design").click(function() { 
            if (switchTurn % 2 === 0){
              $(this).text(pieceX);
              findWinner(); 
            } else {
            	// if player move doesn't equal even number, then pieceO move
              $(this).text(pieceO);
              findWinner();
            }
          switchTurn++; 
      });

    // find the winnner -- function for searching winner for pieceX and pieceO
    function findWinner() {
    	//checks to see if x has won the game

    	var searchCell0 = $("#cell0").text() !== " ";

    	if (searchCell0) {
	    	if ($("#cell0").text() == $("#cell1").text()) {
				if ($("#cell0").text() == $("#cell2").text()) {
					alert("Game Over. Player " + $("#cell0").text() + " wins!")
				}
			}
			if ($("#cell0").text() == $("#cell3").text()) {
				if ($("#cell0").text() == $("#cell6").text()) {
					alert("Game Over. Player " + $("#cell0").text() + " wins!")
				}
			}
			if ($("#cell0").text() == $("#cell4").text()) {
				if ($("#cell0").text() == $("#cell8").text()) {
					alert("Game Over. Player " + $("#cell0").text() + " wins!")
				}
			}
		}

	};

}); 


