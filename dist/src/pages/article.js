import { React, Page } from 'zola'
import AsyncComponent from 'modules/AsyncComponent'
import ArticleRender  from 'modules/ArticleRender'

export default class Index extends Page {
  render () {
  	const filePath = this.props.params.path
  	const path = `/article/${filePath}.md`
    return (
      <div>
      	<ArticleRender articlePath={path}/>
      </div>
    )
  }
}