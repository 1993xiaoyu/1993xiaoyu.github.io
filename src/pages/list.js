const articleList = MY_ARTICLE_DATA
import { React, Page } from 'zola'

export default class Index extends Page {
  render () {
    return (
      <div>
      	<ul>
          {
            articleList.map((article,index)=>{
              return (
                <li key={index}>
                  <a href={`#/article${article.path}`}>
                    {article.title}
                  </a>
                </li>
              )
            })
          }
      	</ul>
      </div>
    )
  }
}