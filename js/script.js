const showIdea = document.querySelector(".show-idea"); //will create list and show ideas here
let btns = document.querySelectorAll("#btn");
const randomJokes = document.querySelector(".random-jokes"); //will put random jokes here
const selectJokeNum = document.querySelector(".num-jokes"); //user chooses how many jokes to see

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
//user selects a number from selector
//query is run & num of jokes returned
//div is populated with num of jokes


const getJokes = async function(numJokes){
    const jokeRequest = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&lang=en&amount=${numJokes}`);
    const data = await jokeRequest.json();
    console.log(data);
    displayJokes(data);
}
// getJokes(0);

const displayJokes = function(data){
    randomJokes.innerHTML = "";

    for(let joke of data){
        const thisJoke = data.joke;
        console.log(thisJoke);

        let jokeDiv = document.createElement("div");
        jokeDiv.innerHTML = `
        <div>
            <p>${thisJoke}</p>

        </div>
        `;
        randomJokes.append(jokeDiv);
    }



    // dataArr.forEach((joke) => {
    //     let tellJoke = joke.jokes.joke;
    //     console.log(tellJoke);
    //     let jokeDiv = document.createElement("div");
    //     jokeDiv.innerHTML = `
    //     <div>
    //         <p>${tellJoke}</p>

    //     </div>
    //     `;
    // randomJokes.append(jokeDiv);

    // });
        
}

selectJokeNum.addEventListener('change', function(e){
    const numJokes = e.target.value;
    getJokes(numJokes);
});

