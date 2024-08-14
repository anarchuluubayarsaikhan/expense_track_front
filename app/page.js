"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([])

  function addMe () {
    const name = prompt("Enter the name")
    fetch(`http://localhost:4000/categories?name=${name}`)
    .then((res) => {return res.json()})
    .then (() => {reload()})
  };
   function reload () {
    fetch('http://localhost:4000/categories/list')
    .then((res) => {return res.json()})
    .then((data) => {setArticles(data)})
   }

   function edit () {

   }

   function trash () {
      articles.filter (()=>{articles[0]})
   }

  useEffect(() => {
    reload()
   ;}, []);

  return (
    <main>
      {articles.map((article) => (
        <div>
          <div key={article.id}>{article.name}</div>
          <button onClick={edit} key={article.id}>{article.edit}</button>
          <button onClick={trash} key={article.id}>{article.delete}</button>
        </div>
        ))}
        <button onClick={addMe}>Add</button>
    </main>
  )
  ;
}
