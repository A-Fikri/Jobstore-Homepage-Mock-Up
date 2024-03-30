import React from "react";
import ArticleData from "../../Data/ArticlesData.jsx";
import "./index.css";

export default function Articles() {
  return (
    <>
      <div className="news">
        <p className="news-text">NEWS & ARTICLES</p>
        <p className="view-all">VIEW ALL ❯</p>
      </div>
      <div className="parent">
        <div className="articles-section">
          <div className="article">
            {ArticleData.map((article, index) => (
              <div key={index} className="card">
                <img
                  src={article.image}
                  alt={article.title}
                  className="image"
                />
                <button className="article-category">{article.category}</button>
                <p className="title">{article.title}</p>
                <p className="date">{article.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
