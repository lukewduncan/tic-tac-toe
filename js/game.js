$(function() {

    var pieceX = "X";
    var pieceO = "O";
    var cellDefault = $(".cell-default");

    var switchTurn = 0;

    alert("Player 1 - make your move!")

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

        findWinner();
    });

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


        // first 3 solutions to win
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

                }
            }
            if ($(cellzero).text() === $(cellfour).text()) {
                if ($(cellzero).text() === $(celleight).text()) {
                    alert("Game Over. Player " + $(cellzero).text() + " wins!");
                }
            }
        } //end of first row (all possible combinations accounted for from cellzero)
    }; // end of findWinner function

    refreshGame();

    function refreshGame() {
        if ($(".cell-default").text() === pieceX || pieceO) {
            $(".cell-default").text(" ");
        }
    };

});