var diff;
var income;
var cash;
var job = null;

console.log("Hello World");

var gameData = {
  careerList: {
    medical: {
      careerName: "Medical",
      jobList: {
        nurse: {
          jobTitle: "Nurse",
          income: 100
        },
        doctor: {
          jobTitle: "Nurse",
          income: 300
        }
      }
    },
    technology: {
      careerName: "Technology",
      jobList: {
        frontenddev: {
          jobTitle: "Front End Developer",
          income: 50
        },
        serverop: {
          jobTitle: "Server Operator",
          income: 60
        }
      }
    }
  }
}

function logMsg(m) { //Easier way to log messages
  $('#log').val( m + "\n" + $('#log').val());
}

function findJob() {
  var jobNum = gameData.careerList.length;
}

function updateCash() { //Updates the player's cash total
  if(cash + income <= 0){ //Checks the remaining amount of money
    var remaining = cash + income;
    var c = confirm("Caution! this will leave you with " + remaining + "$\nDo you wish to continue?");
    if(c == true){
      cash += income;
      $('.cash').text(String(cash));
      logMsg("Ran out of cash!");
    } else {
      alert('Canceled ending turn!');
    }
  } else{
    cash += income;
    $('.cash').text(String(cash));
  }
}

function updateCashText(){
  $('.cash').text(String(cash));
}

function addCash(amt){
  cash += amt;
  updateCashText();
}

function notImple() { //For stuff I haven't done yet
  logMsg("Sorry, this isn't working yet!");
}

$(document).ready(function() { //Primary Loop
  document.getElementById('log').readOnly = true;
  $('.startHidden').hide();

  $("#startGame").click(function(event) {
    diff = $('.startDiff').val().split(' ')[0];
    console.log(diff);
    $('.startDiff').remove();
    $('.diffSel').remove();
    $('.startHidden').show();
    $('#log').val("");

    if(diff == "Well"){
      income = 0;
      cash = 1000;
    } else if (diff == "Jobless"){
      income = -10;
      cash = 100;
    } else {
      income = 0;
      cash = 0;
    }
    
    $('.cash').text(String(cash));
    $('.income').text(String(income));
  });

  $('#nextTurn').click(function(event) {
    updateCash();
  });

  $('#findJob').click(function() {
    //addCash(10);
    notImple();
  })

  $('#goShopping').click(function(event) {
    notImple();
  });
});