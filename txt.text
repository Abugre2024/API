async function fetchAndDisplayNews() {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=galamsey&apiKey=4e0515ea1a5c48ce814135321223403f&pageSize=20"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.articles) {
      console.error("No news articles found in the response.");
      return;
    }

    const filteredNews = data.articles.filter(
      (article) => article.title !== "[Removed]"
    );

    filteredNews.forEach((article) => {
      console.log(article.title);
      const articleDiv = document.createElement("div");
      articleDiv.className = "article";

      const articleH1 = document.createElement("h1");
      articleH1.textContent = article.title;
      articleDiv.appendChild(articleH1);

      const articleP = document.createElement("p");
      articleP.textContent = article.description;
      articleDiv.appendChild(articleP);

      const articleImg = document.createElement("img");
      articleImg.setAttribute("src", article.urlToImage);
      articleImg.setAttribute("alt", article.title);
      articleImg.classList.add("article-img");
      articleDiv.appendChild(articleImg);

      document.querySelector("#articles").appendChild(articleDiv);
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    document.getElementById("articles").textContent = "Failed to load news articles.";
  }
}

// Call the function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", fetchAndDisplayNews);






fetch(
  "https://newsapi.org/v2/everything?q=galamsey&apiKey=4e0515ea1a5c48ce814135321223403f&pageSize=20"
)
  .then(function (response) {
    // console.log(response.body);
    return response.json();
  })
  .then(function (data) {
    // console.table(data.articles);
    let filteredNews;
    for (const article of data.articles) {
      filteredNews = data.articles.filter(
        (article) => article.title !== "[Removed]"
      );
      // console.table(article);
    }
    filteredNews.forEach((article) => {
      console.log(article.title);

        console.log(article);
      const articleDiv = document.createElement("div");

      const articleH1 = document.createElement("h1");
      articleH1.textContent = article.title;
      articleDiv.appendChild(articleH1);

      const articleP = document.createElement("p");
      articleP.textContent = article.description;
      articleDiv.appendChild(articleP);

      const articleImg = document.createElement("img");
      articleImg.setAttribute("src", article.urlToImage);
      articleImg.setAttribute("alt", article.title);
      articleImg.classList.add("article-img");
      articleDiv.appendChild(articleImg);

      document.querySelector("#articles").appendChild(articleDiv);
    });
  });

// Function to format the date
function formatDate() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  document.getElementById("currentDate").innerText = today.toLocaleDateString(
    "en-US",
    options
  );
}

// OpenWeatherMap API key (Replace with your actual API key)
const apiKey = "321dc00bc481b17b597349dcc75e20f7";
const city = "Accra"; // Replace with your city
const units = "metric"; // 'metric' for Celsius, 'imperial' for Fahrenheit

const fetchWeather = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
    );

    const result = await response.json();

    const temp = await result.main.temp;
    console.log("Weather resposne-->", temp);
    const weatherDescription = result.weather[0].description; // Get weather description
    const icon = `https://openweathermap.org/img/wn/${result.weather[0].icon}.png`; // Get weather icon

    // / Display the weather information

    document.getElementById("weather-icon").setAttribute("href", icon);
    document.getElementById("weather-text").innerText = weatherDescription;

    // document.getElementById("weatherInfo").innerHTML = `
    // <div>
    //             <img src="${icon}" alt="Weather icon" style="vertical-align:middle;"/> ${temp}°C - ${
    //   weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)
    // }`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weatherInfo").innerText = "Unable to load weather";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  formatDate();
  fetchWeather();
});

function addComment() {
  const commentText = document.getElementById("commentInput").value;

  if (commentText) {
    // Create a new div for the comment
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.innerText = commentText;

    // Append the new comment to the comment section
    document.getElementById("commentSection").appendChild(commentDiv);

    // Clear the comment input field
    document.getElementById("commentInput").value = "";
  } else {
    alert("Please enter a comment!");
  }
}
const commentButton = document.getElementById("comment-button");
commentButton.addEventListener("click", () => {
  console.log("button clicked");
  addComment();
});
