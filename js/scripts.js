$(function () {
  $("#btn").click (function (event) {
    var suits = ["clubs", "spades", "diamonds", "hearts"];
    var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

    console.log(ranks);
    suits.forEach(function(suit){
      ranks.forEach(function (rank) {

        $("#list").append("<li>" +rank+" of "+suit+"</li>");
        console.log(rank);
      })
    });
  event.preventDefault();
  });

});
