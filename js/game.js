$(function() {

    var pieceX = "X";
    var pieceO = "O";

    var score0 = 0;

    var switchTurn = 0;

    // Turn logic -- setting who's turn it is -- basing it off count 0 (ATM assignment). Even = pieceX, Odd = pieceO
    $(".cell-default").click(function() {
        switchTurn++;
	        if (switchTurn % 2 === 0) {
	        	$(this).text(pieceX);
	        } else {
	        	$(this).text(pieceO);
	        }
        findTie();
        findWinner();

    });


    // Stop click on used cell
    // function stopClick () {
    // 	if ($(".cell-default").text() === pieceX || pieceO) {
    // 		alert("you can't do this");
    // 		return;
    // }

    // Tie function
    function findTie() {
    	if (switchTurn === 9) {
    		($(".history-display").html("<li>" + "It was a tie!" + "</li>"));
        	alert('You tied. Play again!');
    		refreshGame();
    		switchTurn = 0;
    	}
    };

    // Refresh Game after win, tie or loss
    function refreshGame() {
        if ($(".cell-default").text() === pieceX || pieceO) {
            $(".cell-default").text(" ");
            switchTurn = 0;
        }
    };

    // find the winnner -- function for searching winner for pieceX or pieceO
    function findWinner() {

        var cellzero = $("#cell0");
        var cellone = $("#cell1");
        var celltwo = $("#cell2");
        var cellthree = $("#cell3");
        var cellfour = $("#cell4");
        var cellfive = $("#cell5");
        var cellsix = $("#cell6");
        var cellseven = $("#cell7")
        var celleight = $("#cell8");

        // combos
        // 1 - [0,1,2] [0,4,8] [0,3,6]
        // 2 - [2,4,6] [2,5,8]
        // 3 - [1,4,7]
        // 4 - [3,4,5]
        // 5 - [6,7,8]

        // 1
        // var for if cellzero has text
        var searchCell0 = $(cellzero).text() !== " ";

        if (searchCell0) {
            if ($(cellzero).text() === $(cellone).text()) {
                if ($(cellzero).text() === $(celltwo).text()) {
                	($(".history-display").append("<li>" + cellzero.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(cellzero).text() + " wins!");
                    refreshGame();
                }
            }
            if ($(cellzero).text() === $(cellthree).text()) {
                if ($(cellzero).text() === $(cellsix).text()) {
                	($(".history-display").append("<li>" + cellzero.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(cellzero).text() + " wins!");
                    refreshGame();
                }
            }
            if ($(cellzero).text() === $(cellfour).text()) {
                if ($(cellzero).text() === $(celleight).text()) {
                	($(".history-display").append("<li>" + cellzero.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(cellzero).text() + " wins!");
                    refreshGame();
                }
            }
        }

        // 2
        var searchCell2 = $(celltwo).text() !==" ";

        if (searchCell2) {
        	if ($(celltwo).text() === $ (cellfive).text()) {
        		if ($(celltwo).text() === $(celleight).text()) {
        			($(".history-display").append("<li>" + cellzero.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(celltwo).text() + " wins!");
                    refreshGame();
	            }
        	}
        	if ($(celltwo).text() === $ (cellfour).text()){
        		if ($(celltwo).text() === $(cellsix).text()) {
        			($(".history-display").append("<li>" + cellzero.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(celltwo).text() + " wins!");
                    refreshGame();
	            }
        	}
        }

        // 3
        var searchCell1 = $(cellone).text() !==" ";

        if (searchCell1) {
        	if ($(cellone).text() === $ (cellfour).text()) {
        		if ($(cellone).text() === $(cellseven).text()) {
        			($(".history-display").append("<li>" + cellzero.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(cellone).text() + " wins!");
                    refreshGame();
	            }
        	}
        }

        // 4
        var searchCell3 = $(cellthree).text() !==" ";

        if (searchCell3) {
        	if ($(cellthree).text() === $ (cellfour).text()) {
        		if ($(cellthree).text() === $(cellfive).text()) {
        			($(".history-display").append("<li>" + cellzero.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(cellthree).text() + " wins!");
                    refreshGame();
	            }
        	}
        }

        // 5
        var searchCell6 = $(cellsix).text() !==" ";

        if (searchCell6) {
        	if ($(cellsix).text() === $ (cellseven).text()) {
        		if ($(cellsix).text() === $(celleight).text()) {
        			($(".history-display").append("<li>" + cellzero.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(cellsix).text() + " wins!");
                    refreshGame();
	            }
        	}
        }
    }; // end of findWinner function

    refreshGame();

}); // end of on.document load