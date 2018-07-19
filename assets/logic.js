//these are global variables.

var score = (time*10) + (sheep*10) + (health*5);

var time = 60
    var timerspeed = 300
var sheep = 5
var health = 100
var x = 0
var timer; 

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

//Scene one is here.
$(document).on('click','#itemsCollected', function(){
    $(".introScene").css("background-image", "url(images/sceneSwamp.png)");  // this code needs to be on top for it to work.
    $("#answerTwo").show();
    $("#answerOne").show();
    $('#itemsCollected').hide();
    $("#itemsContainer").hide();
    $('#time').text("00:" + time);
    timer = setInterval(startTimer, 1000 - timerspeed);

// background = '../images/' + questions[x].Image[0];
// $('body').css('background-image', background);

// setTimeout(function () { 

    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);

// ;}, 500);
});


//SET SWAMP SC. This function will begin looping through questions and answer choices for each scene.

$(document).on('click','#answerOne', function(){
    x++
        $('#questions').text(questions[x].question);
        $('#answerOne').text(questions[x].A[0]);
        $('#answerTwo').text(questions[x].B[0]);

       
});

$(document).on('click','#answerTwo', function(){
    x++
        $('#questions').text(questions[x].question);
        $('#answerOne').text(questions[x].A[0]);
        $('#answerTwo').text(questions[x].B[0]);
});

//this function will begin the timer that runs throughout the game 
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
//Scene 2: 
//this will add the amount of time and sheep for the first iteration:
//user will either lose 60 seconds or lose (random sheep and 20 seconds)
//**note time needs to be set higher */

$(document).on('click','#answerOne', function(){
    time = time - 20;
    $('#time').html(time);
    sheep = sheep - 3;
    $('#sheep').html(sheep);
    $(".introScene").css("background-image", "url(images/scenescarywoodwolf.jpg)");
 });

 
 $(document).on('click','#answerTwo', function(){
    time = time - 60;
    $('#time').html(time);
    $("#answerTwo").attr("class", "answerTwoB")
    $(".introScene").css("background-image", "url(images/SceneScaryWoodWolf.jpg)");
 });

 //This is for the third scene for fighting the wolf; the fight scene will
 //will be featured here or a random amount of sheep will be lost.

 //**Fighting scene should go under this: */



 //this will remove the random amount of sheep:
//  $(document).on('click','.answerTwoB', function(){   
//     sheep = sheep - 3;
//     $('#sheep').html(sheep);
//     $("answerTwoB").attr("class", "answerTwoC")
//     $(".introScene").css("background-image", "url(images/scenebridgetroll.jpg)");
//  });

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
    A: ["Run from Troll and lose time."], 
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




