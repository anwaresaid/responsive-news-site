import React from "react";
import { Spotlight } from "../../components/Spotlight";
import { ArticleCard } from "../../components/articleCard";
import { SideInfo } from "../../components/sideInfoCard";
import articles from "../../data/articles.json";
import quick from "../../data/quick.json";

function HomePage() {
  return (
    <div className="home-container">
      <div className="content">
        <Spotlight />
        <div className="news-container">
          <div className="articles-section">
            {articles.map((article) => (
              <ArticleCard
                img={article.urlToImage}
                title={article.title}
                description={article.description}
              />
            ))}
          </div>
          <div className="quick-info-section">
            {quick.map((summaryArticle) => (
              <SideInfo
                title={summaryArticle.title}
                description={summaryArticle.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
