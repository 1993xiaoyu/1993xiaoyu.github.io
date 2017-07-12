import { React, Page } from 'zola'
import articleList from 'data/article'

export default class Index extends Page {
  render () {
    return (

        <div className="rightbox box">
          <h2>最新博文</h2>
          {
            articleList.map((article,index) =>{
              if(index < 5){
                return (
                  <div key={index}>
                    <h3 className="title"><a href={`#${article.path}`}>{article.title}</a></h3>
                    <ul className="text">
                      <p>{article.example}</p>
                    </ul>
                    <div className="textfoot"> <a href={`#${article.path}`}>阅读全文</a> </div>
                  </div>
                )
              }

            })
          }

        </div>
    )
  }
}