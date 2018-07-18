
var questions = [

    //SWAMP QUESTION
    {
    question: "The quickest way back appears to be directly through a swampy mess! Do you choose to wade through the swamp or safely hike around. The swamp is 3x faster but also 3x more dangerous. So choose wiseley!",
    Image: ["sceneswamp.png"],
    A: ["If you choose to wade through the swamp then you only loose 20 seconds and	anywhere from 0-3 sheep."], 
    B: ["If you choose to go around then you loose no sheep but 60 seconds off of the clock."] },

    //WOLF QUESTION
    {
    question: "A wolf attacks, you can choose to fight back or run.",
    Image: ["sceneScarywoodwolf.jpg"],
    A: ["If you fight back then (generates random damage) to both you and wolf"], 
    B: ["If you choose run then you loose a random of 0-3 sheep from your herd."] },

    //BRIDGE TROLL 1
    {
    question: "A bridge troll appears and blocks your way. The troll is extremely strong and dangerous. Do you choose to answer his question or fight the troll.",
    Image: ["scenebridgetroll.jpg"],
    A: ["If you choose to fight troll then you loose random life and cause random damage (more if you have the STAFF). The troll most likely kills the Shepherd, game over."], 
    B: ["Answer troll's question"]
     },

     //BRIDGE TROLL 2 QUESTION:
    {
    question: "What # is the first element of an array?!?!",
    Image: ["scenebridgetroll.jpg"],
    A: ["0"], 
    B: ["1"]
    },

    //ELVES QUESTION:
    {
    question: "Dozens of magic elves appear from the woods. The elves have recently lost their Treehouse Cookie Factory in a tragic fire and are in dire need for resources. They offer to trade you as many sheep as you would like to give. For each sheep the will turn the clock back 30 seconds or give you back a X amount of life.",
    Image: ["sceneWoodselves.png"],
    A: ["If you choose to trade sheep then you get 30 seconds for each sheep that you give up."], 
    B: ["If you choose to not give them any sheep then you continue on to the next step."]
    }
]


var score = (time*10) + (sheep*10) + (health*5);

var time = 60
    var timerspeed = 300
var sheep = 5
var health = 100


var x = 0
var timer; 

$('#time').html(time);
$('#sheep').html(sheep);
$('#health').html(health);


//SET SWAMP SCENE and ANSWERS

$(document).on('click','#startgame', function(){
    
        $('#startgame').hide();
        $('#time').text("00:" + time);
        timer = setInterval(startTimer, 1000 - timerspeed);

    // background = '../images/' + questions[x].Image[0];
    // $('body').css('background-image', background);

    setTimeout(function () { 

        $('#questions').text(questions[x].question);
        $('#option1').text(questions[x].A[0]);
        $('#option2').text(questions[x].B[0]);

    ;}, 500);
});


//SET SWAMP SC

$(document).on('click','#option1', function(){
    x++
        $('#questions').text(questions[x].question);
        $('#option1').text(questions[x].A[0]);
            $('#option')
        $('#option2').text(questions[x].B[0]);
});

$(document).on('click','#option2', function(){
    x++
        $('#questions').text(questions[x].question);
        $('#option1').text(questions[x].A[0]);
        $('#option2').text(questions[x].B[0]);
});





function startTimer(){
    time--;
    $('#time').text("00:" + time);

    // if (time > 60) {
    //     $('#time').text("1:" + time/60);
    // }

    if (time < 10) {
    $('#time').text("00:0" + time);     
    }

    if (time === 0) {
            clearInterval(timer)
            // $('#gamefrost').html('<img id = "gameover" src="Assets/Images/gameover.jpg">')
            // $('#topbar').html('<img id = "replay" src = "Assets/Images/replay.png">')

    }
}


//FIREBASE LOGIC 

var config = {
    apiKey: "AIzaSyDU155hlBn7exNHZkQRg5ObAn1ABXaq4qo",
    authDomain: "shepardjourney.firebaseapp.com",
    databaseURL: "https://shepardjourney.firebaseio.com",
    projectId: "shepardjourney",
    storageBucket: "",
    messagingSenderId: "469264439844"
  };

        firebase.initializeApp(config);

        var database = firebase.database();

        var playername = "";
        var playerscore = "";

    $("#pickname").on("click", function(event) {
        event.preventDefault();

        playername = $("#inputname").val().trim();

        database.ref().push({
            playername: playername,

        });

    });

    database.ref().on("child_added", function(snapshot) {
      // storing the snapshot.val() in a variable for convenience
      var sv = snapshot.val();

      // Console.loging the last user's data
      console.log(sv.playername);

    });