// DECLARING VARIABLES

const businessbtn = document.getElementById("business");
const sportsbtn = document.getElementById("sports");
const technologybtn = document.getElementById("technology");
const entertainmentbtn = document.getElementById("entertainment");
const breakingbtn = document.getElementById("breaking");
const searchbtn = document.getElementById("search");

const newsquery = document.getElementById("newsquery");
const newstype = document.getElementById("newstype");
const newscontent = document.getElementById("newscontent");

// DEFINING ALL THE FUNCTIONS 
var newsArray = [];
// DEFINING ALL THE API'S
const API_KEY = "be3fbc6905cb407f88d6b04e57e390b9";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const BREAKING_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=be3fbc6905cb407f88d6b04e57e390b9";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=be3fbc6905cb407f88d6b04e57e390b9";
const SPORTS_NEWS ="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=be3fbc6905cb407f88d6b04e57e390b9";
const ENTERTAINMENT_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=be3fbc6905cb407f88d6b04e57e390b9";
const TECHNOLOGY_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=be3fbc6905cb407f88d6b04e57e390b9";
const SEARCH_NEWS="https://newsapi.org/v2/everything?q=";

// user reloading to make news pop up

window.onload = function() {
    //newstype.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};

// function is there to fetch data from the server
breakingbtn.addEventListener("click",function(){
    //newstype.innerHTML="<h4>Breaking News!</h4>";
    fetchbreakingnews();
});

businessbtn.addEventListener("click",function(){
    //newstype.innerHTML="<h4>Business News</h4>";
    fetchbusinessnews();
});

sportsbtn.addEventListener("click",function(){
    //newstype.innerHTML="<h4>Sports News</h4>";
    fetchsportsnews();
});

technologybtn.addEventListener("click",function(){
    //newstype.innerHTML="<h4>Technology News</h4>";
    fetchtechnologynews();
});

entertainmentbtn.addEventListener("click",function(){
    //newstype.innerHTML="<h4>Entertainment News</h4>";
    fetchentertainmentnews();
});

searchbtn.addEventListener("click",function(){
    //newstype.innerHTML="<h4>Search : "+newsquery.value+"</h4>";
    fetchquerynews();
});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsArray = [];
    if(response.status >=200 && response.status <300)
    {
        // check for the json and calling the response json method to get the json array
        const myJson = await response.json();
        // pass the json val to array
        newsArray = myJson.articles;
    }
    else
    {
        // handle errors
        console.log(response.status, response.statusText);
        newscontent.innerHTML = "<h5>No data found.</h5>";
        return ;
    }
    displaynews();
}

const fetchbreakingnews = async () => {
    const response = await fetch(BREAKING_NEWS)
    newsArray = [];
    if(response.status >=200 && response.status <300)
    {
        // check for the json and calling the response json method to get the json array
        const myJson = await response.json();
        // pass the json val to array
        newsArray = myJson.articles;
    }
    else
    {
        // handle errors
        console.log(response.status, response.statusText);
        newscontent.innerHTML = "<h5>No data found.</h5>";
        return ;
    }
    displaynews();
}

const fetchbusinessnews = async () => {
    const response = await fetch(BUSINESS_NEWS)
    newsArray = [];
    if(response.status >=200 && response.status <300)
    {
        // check for the json and calling the response json method to get the json array
        const myJson = await response.json();
        // pass the json val to array
        newsArray = myJson.articles;
    }
    else
    {
        // handle errors
        console.log(response.status, response.statusText);
        newscontent.innerHTML = "<h5>No data found.</h5>";
        return ;
    }
    displaynews();
}

const fetchsportsnews = async () => {
    const response = await fetch(SPORTS_NEWS)
    newsArray = [];
    if(response.status >=200 && response.status <300)
    {
        // check for the json and calling the response json method to get the json array
        const myJson = await response.json();
        // pass the json val to array
        newsArray = myJson.articles;
    }
    else
    {
        // handle errors
        console.log(response.status, response.statusText);
        newscontent.innerHTML = "<h5>No data found.</h5>";
        return ;
    }
    displaynews();
}

const fetchtechnologynews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS)
    newsArray = [];
    if(response.status >=200 && response.status <300)
    {
        // check for the json and calling the response json method to get the json array
        const myJson = await response.json();
        // pass the json val to array
        newsArray = myJson.articles;
    }
    else
    {
        // handle errors
        console.log(response.status, response.statusText);
        newscontent.innerHTML = "<h5>No data found.</h5>";
        return ;
    }
    displaynews();
}

const fetchentertainmentnews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS)
    newsArray = [];
    if(response.status >=200 && response.status <300)
    {
        // check for the json and calling the response json method to get the json array
        const myJson = await response.json();
        console.log(myJson);
        // pass the json val to array
        newsArray = myJson.articles;
    }
    else
    {
        // handle errors
        console.log(response.status, response.statusText);
        newscontent.innerHTML = "<h5>No data found.</h5>";
        return ;
    }
    displaynews();
}

const fetchquerynews = async () => {

    if(newsquery.value == null)
    {
        return ;
    }
    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsquery.value)+"&apiKey="+API_KEY);
    newsArray = [];
    if(response.status >=200 && response.status <300)
    {
        // check for the json and calling the response json method to get the json array
        const myJson = await response.json();
        // pass the json val to array
        newsArray = myJson.articles;
    }
    else
    {
        // handle errors
        console.log(response.status, response.statusText);
        newscontent.innerHTML = "<h5>No data found.</h5>";
        return ;
    }
    displaynews();
}

function displaynews()
{
    newscontent.innerHTML = "";

    /*
    if(newsArray.length == 0)
    {
        newscontent.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    */

    newsArray.forEach(news =>
    {
        var date = news.publishedAt.split("T");
        // creating the div element and storing it in col
        var col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var imag = document.createElement('img');
        imag.setAttribute("height","matchparent");
        imag.setAttribute("width","100%");
        imag.src=news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innnerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innnerHTML = date[0];

        var descrip = document.createElement('p');
        descrip.className = "text-muted";
        descrip.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read More..";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(descrip);
        cardBody.appendChild(link);

        card.appendChild(imag);
        card.appendChild(cardBody);
        
        col.appendChild(card);

        newscontent.appendChild(col);
    });
}
