//opener: shows three tools for selection; ask which item to be selected in quetion div;
//on click of a tool item will move into items div 

$("#food").on("click", function(){
   var food = $("#food")
   $("#items").append(food);
   console.log('you clicked!')
})

$("#staff").on("click", function(){
    var staff = $("#staff")
    $("#items").append(staff);
    console.log('you clicked!')
 })

 $("#flute").on("click", function(){
    var flute = $("#flute")
    $("#items").append(flute);
    console.log('you clicked!')
 })


 //This is referencing all of the scenes after the intro and items.
 //related to index.
 
//  var time = 50
// var sheep = 5
// var health = 100

// var x=1



// var score = (time*10) + (sheep*10) + (health*5);

// $('#time').html(time);
// $('#sheep').html(sheep);
// $('#health').html(health);

// console.log(question[1].A);

// $('#questions').text(question);
// $('#option1').text(question[x].A[0]);
// $('#option2').text(question[x].B[0]);







// var question = [
//     {
//     question: "The quickest way back appears to be directly through a swampy mess! Do you choose to wade through the swamp or safely hike around. The swamp is 3x faster but also 3x more dangerous. So choose wisely….",
//     Image: ["sceneswamp.png"],
//     A: ["If you choose to wade through the swamp then you only loose 20 seconds and	anywhere from 0-3 sheep."], 
//     B: ["If you choose to go around then you loose no sheep but 60 seconds off of the clock."] },

//     {
//     question: "A wolf attacks, you can choose to fight back or run.",
//     Image: ["sceneScarywoodwolf.jpg"],
//     A: ["If you fight back then (generates random damage) to both you and wolf"], 
//     B: ["If you choose run then you loose a random of 0-3 sheep from your herd."] },

//     {
//     question: "A bridge troll appears and blocks your way. The troll is extremely strong and dangerous. Do you choose to answer his question or fight the troll.",
//     Image: ["scenebridgetroll.jpg"],
//     A: ["If you choose to fight troll then you loose random life and cause random damage (more if you have the STAFF). The troll most likely kills the Shepherd, game over."], 
//     B: ["Answer troll's question"]
//      },

//     {
//     question: "Dozens of magic elves appear from the woods. The elves have recently lost their Treehouse Cookie Factory in a tragic fire and are in dire need for resources. They offer to trade you as many sheep as you would like to give. For each sheep the will turn the clock back 30 seconds or give you back a X amount of life.",
//     Image: ["sceneWoodselves.png"],
//     A: ["If you choose to trade sheep then you get 30 seconds for each sheep that you give up."], 
//     B: ["If you choose to not give them any sheep then you continue on to the next step."]
//     }
// ]