$(document).ready(function(){
    console.log("Script loaded for landingpage.html");

    // Function to toggle a card
    function toggleCard(buttonId, cardId) {
        $(buttonId).click(function(){
            console.log(buttonId + " clicked");
            $(cardId).toggle();
            if ($(cardId).is(':visible')) {
                $(buttonId).text('Hide');
            } else {
                $(buttonId).text('Show');
            }
        });
    }

    // Toggle for the first card
    toggleCard('#toggleButton1', '#firstCard');

    // Toggle for the second card
    toggleCard('#toggleButton2', '#secondCard');
});