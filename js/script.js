const showIdea = document.querySelector(".show-idea"); //will create list and show ideas here
let btns = document.querySelectorAll("#btn");
const randomPics = document.querySelector(".random-pics"); //will put random pics here
const selectPicNum = document.querySelector(".num-pics"); //user chooses how many pics to see
//let breedNameDisp = document.querySelector('.breed-name');

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
    // const ideaDiv = document.createElement("div");
    //     ideaDiv.innerHTML = `
    //     <div class="idea">
    //         <p>You could:  ${activity}</p>
    //     </div>
    //     `;

     //   showIdea.append(ideaDiv);
}




// PIC GENERATOR HERE
//user selects a number from selector
//query is run & num of pics returned
//div is populated with num of pics

// const getData = async function(numCats){
//     const catsRequest = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${numCats}&api_key=live_WwThoDpHXktwq1gdKW0d1FpOAnLe9Fv1S1O0nwGc9Gf9VCs8mLIraQ3RRZBwEStD`);
//     const data = await catsRequest.json();
//     console.log(data);
//     displayCats(data);
// }
// getData(0);

// const displayCats = function(data){
//     randomCats.innerHTML = "";
//     for(let cat of data) {
//         // let country = user.location.country;
//         // let name = user.id.name;
//         let imageURL = cat.url;
//         const catDiv = document.createElement("div");
//         catDiv.innerHTML = `

//             <img width=200px height=200px src=${imageURL} alt="cat pic" />
//         `;
//         randomCats.append(catDiv);
//     }
// }

// selectCatNum.addEventListener('change', function(e){
//     const numCats = e.target.value;
//     getData(numCats);
// });

