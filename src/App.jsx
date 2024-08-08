import { useEffect, useState } from 'react'
import News from './components/News'
import './App.css'
import './components/Header.css'

function App(props) {

  let [articles,setarticles] = useState([]);
  let [category,setcategory] = useState("microsoft")
  let [date,setdate] = useState("2024-03-24") // default to show articles within the last
  // useEffect(() => {
  //   fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=104d041e84254a5d9000729235b74d2d`)
  //   .then((response) => response.json())
  //   .then((news)=>{

  //     setarticles(news.articles);
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // },[category])

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&sortBy=popularity&apiKey=01c082e99f8b4578bfaa6c72f72b30be`)
    .then((response)=>response.json())
    .then((news)=>{
      setarticles(news.articles);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[category,date])

  return(
    <div className='app'>
      {/* <Header setcountry={setcountry}/> */}

      <header className='header'>
            <section className='title'>
                <h1>ANY/<span>NEWS</span></h1>
                <p><em>Get the latest news</em></p>
            </section>

              <input type="textbox" placeholder="Seach for News" onChange={(event)=>{
                if(event.target.value !==""){
                  setcategory(event.target.value)
                }
                else{
                  setcategory("japan")
                }
              }}></input>
              <input className='date' type="date" onKeyDown={(event)=>{
                // console.log(event)
                if(event.key=="Enter"){
                  setdate(event.target.value)
                }
                else{
                  console.log(event.key)
                }
                
              }}></input>
        </header>

      <section className='articles'>
        {/* Map through the articles array and create a new component for each article */}
        {
          articles.length !=0 ?
            articles.map((article)=>{
            return(
              <News article={article}/>
            )
            })
          :
          <h3>No News Found!...</h3>
        }
      </section>
    </div>
  )
}

export default App




// API key:- 104d041e84254a5d9000729235b74d2d  dibyajyotidas15009@gmail.com
// API key:- 01c082e99f8b4578bfaa6c72f72b30be da5009dibya@gmail.com 

