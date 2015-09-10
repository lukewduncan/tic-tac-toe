$(function() {

    var pieceX = "X";
    var pieceO = "O";
    var cellDefault = $(".cell-default");

    var switchTurn = 0;

    // Turn logic -- setting who's turn it is -- basing it off count 0 (ATM assignment). Even = pieceX, Odd = pieceO
    $(cellDefault).click(function() {
        switchTurn++;
        if (switchTurn % 2 === 0) {
            $(this).text(pieceX);
        } else {
            // if player move doesn't equal even number, then pieceO turn
            $(this).text(pieceO);
        }

        console.log("switch turn testing");

        findTie();
        findWinner();
    });

    function findTie() {
    	if (switchTurn === 9) {
    		refreshGame();
    	}
    }

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
        var cellnine = $("cell9");

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
                    alert("Game Over. Player " + $(cellzero).text() + " wins!");
                }
            }
            if ($(cellzero).text() === $(cellthree).text()) {
                if ($(cellzero).text() === $(cellsix).text()) {
                    alert("Game Over. Player " + $(cellzero).text() + " wins!");
                    refreshGame();
                }
            }
            if ($(cellzero).text() === $(cellfour).text()) {
                if ($(cellzero).text() === $(celleight).text()) {
                    alert("Game Over. Player " + $(cellzero).text() + " wins!");
                }
            }
        }

        // 2
        var searchCell2 = $(celltwo).text() !==" ";

        if (searchCell2) {
        	if ($(celltwo).text() === $ (cellfive).text()) {
        		if ($(celltwo).text() === $(celleight).text()) {
                    alert("Game Over. Player " + $(celltwo).text() + " wins!");
	            }
        	}
        	if ($(celltwo).text() === $ (cellfour).text()){
        		if ($(celltwo).text() === $(cellsix).text()) {
                    alert("Game Over. Player " + $(celltwo).text() + " wins!");
	            }
        	}
        }

        // 3
        var searchCell1 = $(cellone).text() !==" ";

        if (searchCell1) {
        	if ($(cellone).text() === $ (cellfour).text()) {
        		if ($(cellone).text() === $(cellseven).text()) {
                    alert("Game Over. Player " + $(cellone).text() + " wins!");
	            }
        	}
        }

        // 4
        var searchCell3 = $(cellthree).text() !==" ";

        if (searchCell3) {
        	if ($(cellthree).text() === $ (cellfour).text()) {
        		if ($(cellthree).text() === $(cellfour).text()) {
                    alert("Game Over. Player " + $(cellthree).text() + " wins!");
	            }
        	}
        }

        // 5
        var searchCell6 = $(cellsix).text() !==" ";

        if (searchCell6) {
        	if ($(cellsix).text() === $ (cellseven).text()) {
        		if ($(cellsix).text() === $(celleight).text()) {
                    alert("Game Over. Player " + $(cellsix).text() + " wins!");
	            }
        	}
        }
    }; // end of findWinner function

    refreshGame();

    function refreshGame() {
        if ($(".cell-default").text() === pieceX || pieceO) {
            $(".cell-default").text(" ");
        }
    };

}); // end of on.document load