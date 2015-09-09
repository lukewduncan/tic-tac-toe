$(function(){

	

	var pieceX = "X";
	var pieceO = "O";

	var whosTurn = 0;


    // setting who's turn it is -- basing it off count 0. Even = pieceX, Odd = pieceO
      $(".cell-design").click(function() { 
            if (whosTurn % 2 === 0){
              $(this).text(pieceX);
              findWinner(); 
            } else {
            	// if player move doesn't equal even number, then pieceO move
              $(this).text(pieceO);
              findWinner();
            }
          whosTurn++; 
      });

    // find the winnner -- function for searching winner for pieceX and pieceO
    // comment -- originally was thinking of creating 2 functions, one to find if pieceX won, other to find out if pieceO won. Using the .text without declaring piece, works instead.
    function findWinner() {
    	//checks to see if x has won the game

    	if ($("#cell0").text() == $("#cell1").text()) {
			if ($("#cell0").text() == $("#cell2").text()) {
				alert("Game Over. Player " + $("#cell0").text() + " wins!")
			}
		}


	};

}); 


