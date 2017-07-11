
import { React, Page } from 'zola'
import '../common/index.styl'

export default class Index extends Page {
  render () {
    const filePath = this.props.params.path
    const path = `/article/${filePath}.md`
    return (
        <div className="contentBox">
          <div className="headerBox"></div>
          <div className="leftbox">
            <div className="vcard box">
              <h2>个人资料</h2>
              <img src="/images/180.jpg" className="photo"/>
              <p className="fn">姓名：小鱼🐟</p>
              <p className="nickname">网名：xiaoYu | 哎呦</p>
              <p className="url"><a href="/index">主页：https://1993xiaoyu.github.io</a></p>
              <p className="address">职业：前端开发</p>
              <p className="role">爱好：动漫，阅读，爱吃</p>
            </div>
            <div className="blogclass box">
              <h2>博客分类</h2>
              <ul>
                <li><a href="/">乱七八糟</a></li>
                <li><a href="/">HTML</a></li>
                <li><a href="/">CSS</a></li>
                <li><a href="/">JQ</a></li>
                <li><a href="/">React</a></li>
                <li><a href="/">Node</a></li>
              </ul>
            </div>
          </div>
          <div className="rightbox box">
            <h2>{this.state.article.title}</h2>
            <ArticleRender articlePath={path}/>

          </div>
        </div>
    )
  }
}