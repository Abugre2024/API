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
      (article) => article && article.title !== "[Removed]"
    );

    filteredNews.forEach((article) => {
      console.log(article.title);
      const articleDiv = document.createElement("div");
      articleDiv.className = "article";

      const articleH1 = document.createElement("h1");
      articleH1.textContent = article.title ?? "Untitled Article";
      articleDiv.appendChild(articleH1);

      const articleP = document.createElement("p");
      articleP.textContent = article.description ?? "No description available";
      articleDiv.appendChild(articleP);

      const articleImg = document.createElement("img");
      articleImg.setAttribute("src", article.urlToImage ?? "");
      articleImg.setAttribute("alt", article.title ?? "Article Image");
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
