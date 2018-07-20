
//HIDES CHARACTERS ON PAGE LOAD 

$(document).ready(function(){
    $("#shepicon").hide();
    $("#sheepicon").hide();
    $("#wolf").hide();
    $("#attack").hide();
});


//these are global variables.

var score = (time*10) + (sheep*10) + (health*5);

var time = 150
var timerspeed = 0
var sheep = 5
var health = 100
var x = 0
var timer; 

function startTimer(){
    time--;
    $('#time').text("00:" + time);

    if (time > 60) {
        minutes = Math.floor(time / 60);
        seconds = time - minutes * 60;
        formattime= minutes + ":" + seconds;

        $('#time').text(formattime);
    }

    if (time < 10) {
    $('#time').text("00:0" + time);     
    }

    if (time === 0) {
            clearInterval(timer)
            // $('#gamefrost').html('<img id = "gameover" src="Assets/Images/gameover.jpg">')
            // $('#topbar').html('<img id = "replay" src = "Assets/Images/replay.png">')

    }
}

//this will append time, sheeo, health to their respective divs.

$('#time').html(time);
$('#sheep').html(sheep);
$('#health').html(health);

 //this will hide the answers div as it does not need to appear in this scene.
 $("#answerTwo").hide();
 $("#answerOne").hide();

//opener: shows three tools for selection; ask which item to be selected in quetion div;
//on click of a tool item will move into items div 

$("#food").on("click", function () {
    var health = 100
    var food = $("#food")
    $("#itemsHolder").append(food);
    $('#health').html("Remaining health: " + health);
})

$("#staff").on("click", function(){
    var staff = $("#staff")
    $("#itemsHolder").append(staff);   
 })

 $("#flute").on("click", function(){
    var flute = $("#flute");
    var sheep = 5;
    $("#itemsHolder").append(flute);
    $('#sheep').html("This is how many sheep you have: " + sheep);
 })



//SWAMP SCENE IS SET ON CLICK OF ITEMSCOLLECTED

$(document).on('click','#itemsCollected', function(){
    // $(".introScene").css("background-image", "url(images/sceneSwamp.png)");  // this code needs to be on top for it to work.
    background = questions[x].Image[0];
    $(".introScene").css("background-image", "url(" + questions[x].Image[0] + ")");
    $("#answerTwo").show();
    $("#answerOne").show();
    $('#itemsCollected').hide();
    $("#itemsContainer").hide();
    timer = setInterval(startTimer, 1000 - timerspeed);

// setTimeout(function () { 

    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);

// ;}, 500);
});


//SWAMP:

$(document).on('click','.answerOne', function(){
    time = time - 20;
    $('#time').html(time);
    sheep = sheep - 3;
    $('#sheep').html(sheep);
    $(".introScene").css("background-image", "url(images/scenescarywoodwolf.jpg)");
    $("#answerOne").attr("class", "answerOneB")
    $("#answerTwo").attr("class", "answerTwoB")

    x++
    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);

 });

 
 $(document).on('click','.answerTwo', function(){
    time = time - 60;
    $('#time').html(time);
    $("#answerOne").attr("class", "answerOneB")
    $("#answerTwo").attr("class", "answerTwoB")
    $(".introScene").css("background-image", "url(images/SceneScaryWoodWolf.jpg)");

    x++
    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);
 });

 //This is for the third scene for fighting the wolf; the fight scene will
 //will be featured here or a random amount of sheep will be lost.

 //**Fighting scene should go under this: */

 //this will remove the random amount of sheep:


//WOLF:

 $(document).on('click','.answerOneB', function(){
    $("#wolf").show();
    $("#shepicon").show();
    $("#attack").show();


            $(document).on('click','#attack', function(attack) {
                
                var player = parseInt($('#health').text());
                var wolf = parseInt($('#wolf #wolflife').text());
                var staffdamage = $('#itemsHolder #staff').val();  //I gave the staff button a value of 30
                var playerdamage = Math.floor((Math.random()*30)+30);	
                var enemydamage = Math.floor((Math.random()*30)+15);	
                var newplayerlife = player - enemydamage;
                var newenemylife = wolf - playerdamage;
            
                $('#wolf #wolflife').text(newenemylife);
                $('#health').text(newplayerlife);
            
                    if (newplayerlife <= 0) {
                        player = 0;
                        $('#health').text(player);
                        // document.location.href = "gameover.html";
                    }
                    if (newenemylife <= 0)  {
                        wolf = 0;
                        $('#wolf #wolflife').text(wolf)
                        $("#questions").html('<img id="wolfwin" src="images/wolfwin.png">');
                    }
                
            });
    
    
 });

 $(document).on('click','#wolfwin', function(){
    x++
    $("#wolf").hide();
    $("#shepicon").hide();
    $("#attack").hide();
    $(".introScene").css("background-image", "url(images/scenebridgetroll.jpg)");
    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);
 });


 $(document).on('click','.answerTwoB', function(){   
    sheep = sheep - 3;
    $('#sheep').html(sheep);
    $(".answerTwoB").attr("class", "answerTwoC")
    $(".answerOneB").attr("class", "answerOneC")
    $(".introScene").css("background-image", "url(images/scenebridgetroll.jpg)");

    x++
    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);
 });

 //Fourth Scene: 
 //if user selects to move on to the next screen they
 //either run from trolls or answer the trolls question
        //**This is option A which is dependant on the code from the wolf fight */

 


//This is option B which leads to the quiz:
 //they will see the troll bridge here they will answer a question
 //the background remains the same here. if user answers correctly
 // they gain health else they lose health.

 









var questions = [

    //SWAMP QUESTION
    {
    question: "The quickest way back appears to be directly through a swampy mess! Do you choose to wade through the swamp or safely hike around. The swamp is 3x faster but also 3x more dangerous. So choose wiseley!",
    Image: ["images/sceneSwamp.png"],
    A: ["If you choose to wade through the swamp then you only loose 20 seconds and	anywhere from 0-3 sheep."], 
    B: ["If you choose to go around then you loose no sheep but 60 seconds off of the clock."] },

    //WOLF QUESTION
    {
    question: "A wolf attacks, you can choose to fight back or run.",
    Image: ["images/sceneScaryWoodWolf.png"],
    A: ["If you fight back then (generates random damage) to both you and wolf"], 
    B: ["If you choose run then you loose a random of 0-3 sheep from your herd."] },

    //BRIDGE TROLL 1
    {
    question: "A bridge troll appears and blocks your way. The troll is extremely strong and dangerous. Do you choose to answer his question or fight the troll.",

    Image: ["scenebridgetroll.jpg"],
    A: ["Run from Troll and lose time."], 

    B: ["Answer troll's question"]
     },

     //BRIDGE TROLL 2 QUESTION:
    {
    question: "What # is the first element of an array?!?!",
    Image: ["images/sceneBridgeTroll.jpg"],
    A: ["0"], 
    B: ["1"]
    },

    //ELVES QUESTION:
    {
    question: "Dozens of magic elves appear from the woods. The elves have recently lost their Treehouse Cookie Factory in a tragic fire and are in dire need for resources. They offer to trade you as many sheep as you would like to give. For each sheep the will turn the clock back 30 seconds or give you back a X amount of life.",
    Image: ["images/sceneWoodsElves.jpg"],
    A: ["If you choose to trade sheep then you get 30 seconds for each sheep that you give up."], 
    B: ["If you choose to not give them any sheep then you continue on to the next step."]
    }
]




