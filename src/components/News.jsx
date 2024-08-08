import './news.css'

function News(props){
    return(
        <div className="news">
            <div className='news-img'>
                {
                    props.article.urlToImage!==null?
                    <img  src={props.article.urlToImage}></img>:
                    <img src="https://imgs.search.brave.com/Yqu-Eyqz5b_U9UhiQWvSbi5KtakO1qZ502Z2Gq_zqHs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/MzAyMjA2L3Bob3Rv/L2Vycm9yLTQwNC53/ZWJwP2I9MSZzPTE3/MDY2N2Emdz0wJms9/MjAmYz1ycF9QcGhm/VExhRHU5THFQTFZp/bTY0QV9hSnR6VkdG/eWIzb0FSdU5Qdnlj/PQ"></img>
                }
                
            </div>
            <div className='description'>
                <h1>{props.article.title}</h1>
                <p>{props.article.description?.substring(0,100).concat("...")}<a className='link' href={props.article.url} target="_blank">Read More</a></p>
                <div className='source'>
                    <span>{props.article.author}</span>
                    <span>{props.article.source.name}</span>
                </div>

                
            </div>
        </div>
    )
}

export default News