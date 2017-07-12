/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import articleList  from 'data/article'
import ArticleRender from 'modules/ArticleRender'

export default class Index extends Page {

  constructor(props) {
    super(props);
    this.state = {
      article:{}
    }
  }
  componentWillMount() {
    let {params} = this.props;
    let {path} = params;

    articleList.map(v => {
      if(v.fileName == path){
        this.setState({article: v});
      }
    });
  }
  render () {
  	const filePath = this.props.params.path
  	const path = `/article/${filePath}.md`
    return (
        <div className="rightbox box">
          <h2>{this.state.article.title}</h2>
          <ArticleRender articlePath={path}/>
        </div>
    )
  }
}