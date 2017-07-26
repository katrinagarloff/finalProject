//Katrina Garloff
//7/26/2017

var clues =  $("#clues").children();

var feetAnalysis = "The Victim: Alexa Snickerdoodle, " +
    "a local high-school student." +
    "Looks like a blunt-forced trauma to the head." +
    "Let's see if the perpetrator was dumb" +
    "enough to leave the murder weapon.";

var diaryAnalysis = "The Victim's Diary: First entry: " +
    "'I showed Steve the old shack today. I told him it was " +
    "a place he and I could be alone together. We're the only " +
    "ones who know where it is.' --Guess we'd better look into " +
    "this Steve guy.";

var shovelAnalysis = "A Shovel: This looks like a possible " +
    "murder weapon. We'd better take it back to the lab for analysis.";

var footprintAnalysis = "Muddy footprints: We've got footprints with " +
    "dirt from the burial site. Measurements look like size 12 sneaker.";

var youWon = "You found all the clues! Now we have to take everything back to the lab for " +
    "analysis. To be continued... ";

var cluesFound = 0;

$(document).ready(function(){

    for (var i = 0; i < clues.length; i++) {
        hoverOverClue(clues[i]);
    }

        clickClue("#feet", feetAnalysis);
        clickClue("#diary", diaryAnalysis);
        clickClue("#shovel", shovelAnalysis);
        clickClue("#footprints", footprintAnalysis);

    clickToKeepLooking();
    getHint();

    $("#playAgain").click(function(){
        location.reload();
    });



});

function clickClue(htmlID, clueAnalysis) {
    $(htmlID).click(function(){

        $(htmlID).css("box-shadow", "inset 0px 0px 20px #c7dbf9");
        $(htmlID).animate({width: "+=150px", height: "+=150px",
            left: "300px", top: "200px"});
        clues.off("mouseenter mouseleave");
        $(htmlID).fadeOut();
        $("#analysisText").text(clueAnalysis);
        $("#analysis").fadeIn("4000");
        $("#lookForMoreClues").fadeIn("4000");

    });

    }


function hoverOverClue(htmlID) {

    $(htmlID).hover(function(){
            $(htmlID).css("box-shadow", "inset 0px 0px 20px #c7dbf9");
        },
        function(){
            $(htmlID).css("box-shadow", "none");
        });

}

function clickToKeepLooking() {
    $("#lookForMoreClues").click(function() {
        cluesFound += 1;
        if (cluesFound !== 4) {
            $("#analysis").fadeOut("4000");
            for (var i = 0; i < clues.length; i++) {
                hoverOverClue(clues[i]);
            }
        }
        else {
            youWonMessage();
        }
    });


}

function youWonMessage(){
        $("#lookForMoreClues").css("display", "none");
        $("#analysisText").text(youWon);
        $("#playAgain").fadeIn();
}

function hintAt(htmlID){
    $(htmlID).css("box-shadow", "inset 0px 0px 20px #ff1c3e");
    $(htmlID).fadeTo("slow", 0.5);
    $(htmlID).fadeTo("slow", 1);
    $(htmlID).fadeTo("slow", 0.5);
    $(htmlID).fadeTo("slow", 1);
}

function getHint() {
    $("#hint").click(function() {
        if ($("#feet").css("display") != "none") {
            hintAt("#feet");
        }
        else if ($("#diary").css("display") != "none") {
            hintAt("#diary");
        }
        else if ($("#shovel").css("display") != "none") {
            hintAt("#shovel");
        }
        else if ($("#footprints").css("display") != "none") {
            hintAt("#footprints");
        }
    });
}