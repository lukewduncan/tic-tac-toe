$(function() {

    var pieceX = "X";
    var pieceO = "O";

    var switchTurn = 0;
    var playerTurn = 1;

    // Turn logic -- setting who's turn it is -- basing it off count 0 (ATM assignment). Even = pieceX, Odd = pieceO
    $(".cell-default").click(function() {
        switchTurn++;

        // denies a move into a cell if taken
        if ($(this).hasClass("deny")) {
            alert("I spent 8 hours trying to block you from doing this. So you definitely aren't making this move!")
            switchTurn--;
            return;
            
        }
        // keeps track of the number of moves
        $('.click-count').html(function(i, val) {return val*1+1 });
        if (playerTurn === 1) {
            $(this).text(pieceX);
            $(this).addClass("deny");
            playerTurn = 2;
        } else if (playerTurn === 2) {
            $(this).text(pieceO);
            $(this).addClass("deny");
            playerTurn = 1;
        }
        findWinner();
        findTie();
    });



    // Function for showing alert before the start of every game
    function alertStart() {
        if (playerTurn === 1) {
            alert("PLAYER 1, IT'S YOUR TURN FIRST! YOU ARE X");
        } else {
            alert("PLAYER 2, IT'S YOUR TURN FIRST! YOU ARE O");
        }
    };

    // Tie function
    function findTie() {
        if (switchTurn === 9) {
            ($(".history-display").append("<li>" + "It was a tie!" + "</li>"));
            alert('YOU TIED. PLAY AGAIN!');
            refreshGame();
            switchTurn = 0;
        }
    };

    // Refresh Game after win, tie or loss
    function refreshGame() {
        if ($(".cell-default").text() === pieceX || pieceO) {
            $(".cell-default").text(" ");
            $(".cell-default").removeClass("deny");
            switchTurn = 0;
            alertStart();
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
                    return;
                }
            }
            if ($(cellzero).text() === $(cellthree).text()) {
                if ($(cellzero).text() === $(cellsix).text()) {
                    ($(".history-display").append("<li>" + cellzero.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(cellzero).text() + " wins!");
                    refreshGame();
                    return;
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
        var searchCell2 = $(celltwo).text() !== " ";

        if (searchCell2) {
            if ($(celltwo).text() === $(cellfive).text()) {
                if ($(celltwo).text() === $(celleight).text()) {
                    ($(".history-display").append("<li>" + celltwo.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(celltwo).text() + " wins!");
                    refreshGame();
                }
            }
            if ($(celltwo).text() === $(cellfour).text()) {
                if ($(celltwo).text() === $(cellsix).text()) {
                    ($(".history-display").append("<li>" + celltwo.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(celltwo).text() + " wins!");
                    refreshGame();
                }
            }
        }

        // 3
        var searchCell1 = $(cellone).text() !== " ";

        if (searchCell1) {
            if ($(cellone).text() === $(cellfour).text()) {
                if ($(cellone).text() === $(cellseven).text()) {
                    ($(".history-display").append("<li>" + cellone.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(cellone).text() + " wins!");
                    refreshGame();
                }
            }
        }

        // 4
        var searchCell3 = $(cellthree).text() !== " ";

        if (searchCell3) {
            if ($(cellthree).text() === $(cellfour).text()) {
                if ($(cellthree).text() === $(cellfive).text()) {
                    ($(".history-display").append("<li>" + cellthree.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(cellthree).text() + " wins!");
                    refreshGame();
                }
            }
        }

        // 5
        var searchCell6 = $(cellsix).text() !== " ";

        if (searchCell6) {
            if ($(cellsix).text() === $(cellseven).text()) {
                if ($(cellsix).text() === $(celleight).text()) {
                    ($(".history-display").append("<li>" + cellsix.text() + " wins!</li>"));
                    alert("Game Over. Player " + $(cellsix).text() + " wins!");
                    refreshGame();
                }
            }
        }
    }; // end of findWinner function

    refreshGame();

}); // end of on.document load