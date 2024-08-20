"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([])

  function loadList () {
    fetch('http://localhost:4000/categories/list')
    .then((res) => {return res.json()})
    .then((data) => {setArticles(data)});
  }
  useEffect ( () => {
    loadList ()
  }, []) 
  
  function add () {
    const name = prompt("Name")
      fetch(`http://localhost:4000/categories`,{
        method: "POST",
        body:JSON.stringify({name: name}),
        headers: { 
          "Content-type": "application/json; charset=UTF-8"
      } 
      }
      )
      .then(() => loadList())
  }
  function deleteMe(id) {
    fetch(`http://localhost:4000/categories/${id}`, {
      method: "DELETE",
    })
    .then (() => {loadList()})

  }
  function editMe(id) {
    const name = prompt ("Name..")
    fetch(`http://localhost:4000/categories/${id}`, {
      method:"PUT",
      body: JSON.stringify({name: name}),
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
    }
    )
    .then (() => {loadList()})
  }

  
  

  
  return (
    <main>
         {articles.map((article,index) => (
        <div key={article.id} className="flex gap-4">
          {article.name}
          <button className="border border-gray-500 rounded-md p-2 bg-slate-300" onClick={() => {editMe(article.id)}}>Edit</button>
          <button className="border border-gray-500 rounded-md p-2 bg-red-200" onClick={() => {deleteMe(article.id)}}>Delete</button>
        </div>))}
        <button onClick={add}>Add me</button>
    </main>
  )
  ;
}