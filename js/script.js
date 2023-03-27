const showIdea = document.querySelector(".show-idea"); //will create list and show ideas here
let btns = document.querySelectorAll("#btn");
const randomJokes = document.querySelector(".random-joke"); //will put random joke here
const selectJokeNum = document.querySelector(".joke-btn"); //user clicks button to get joke
// IDEA GENERATOR HERE
// user clicks on activity button - html in <p> is cleared
//query is run on activity type
//idea is listed below the buttons - create <p> element, populate it with query result

//FUNCTION TO GET DATA FROM API

btns.forEach(function(i){
    i.addEventListener('click', function(e){
        const ideaType = e.target.value;
        console.log(ideaType);
        getIdea(ideaType);
    });
});

const getIdea = async function(ideaType){
    const ideaRequest = await fetch(`http://www.boredapi.com/api/activity?type=${ideaType}`);
    const res = await ideaRequest.json();
    displayIdea(res);
}
//getIdea();

//FUNCTION TO SHOW IDEA BELOW BUTTONS
//grab the response from the query
//remove any idea previously displayed
//display new idea in new div that is created
const displayIdea = function(res){
    showIdea.innerHTML = "";
    let activity = res.activity
    console.log(activity);

    //showIdea.classList.remove("visuallyhidden");
    showIdea.innerHTML = `
        <div>
            <h3 >You could: </h3>
            <p class='idea'>${activity}</p>
        </div>
        `;
}




// JOKE GENERATOR HERE
//user clicks button to show a joke
//query is run & joke returned
//div is populated with joke


const getJokes = async function(){
    const jokeRequest = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&lang=en`);
    const data = await jokeRequest.json();
    console.log(data);
    console.log(data.joke);
    displayJokes(data);
}
// getJokes(0);

const displayJokes = function(data){
    randomJokes.innerHTML = "";

    let jokeDiv = document.createElement("div");
    jokeDiv.innerHTML = `
     <p class='idea'>${data.joke}</p>
    `;
    randomJokes.append(jokeDiv);
}
        

selectJokeNum.addEventListener('click', function(){
    getJokes();
});

