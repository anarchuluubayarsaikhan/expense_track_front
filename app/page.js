"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/articles")
    .then((res) => res.json())
    .then((data) => {setArticles(data)});}, []);
  return (
    <main>
      {articles.map((article) => (
        <div key={article.id}>{article.title}</div>))}
    </main>
  )
  ;
}
