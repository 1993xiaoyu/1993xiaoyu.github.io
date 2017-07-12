import { React, Page } from 'zola'
import { Router, Route,Link, hashHistory } from 'react-router'
import './index.styl'
import img from './images/1.jpeg';
import articleList from 'data/article'
import pageRoute from './pageRoute'



export default class Index extends Page {
  constructor(props) {
    super(props);
    this.state = {
      itemRoute:pageRoute[0]
    }
  }
  componentWillMount() {
    let {route} = this.props;
    let {path} = route;
    pageRoute.map(v => {
      if(v.path == path){
        this.setState({itemRoute: v});
      }
    });
  }

  render () {

    return (
      <div className="contentBox">
        <div className="headerBox">
        </div>
        <div className="leftbox">
          <div className="vcard box">
            <h2>个人资料</h2>
            <img src={img} className="photo"/>
            <p className="url">主页：<Link to="/index">1993xiaoyu.github.io</Link></p>
            <p className="fn">姓名：小鱼🐟</p>
            <p className="nickname">网名：xiaoYu | 哎呦</p>
            <p className="address">职业：前端开发</p>
            <p className="role">爱好：动漫，阅读，爱吃</p>
          </div>
          <div className="blogclass box">
            <h2>博客分类</h2>
            <ul>
              <li><Link to="/index">乱七八糟</Link></li>
              <li><Link to="/index">HTML</Link></li>
              <li><Link to="/index">CSS</Link></li>
              <li><Link to="/index">JQ</Link></li>
              <li><Link to="/index">React</Link></li>
              <li><Link to="/index">Node</Link></li>
            </ul>
          </div>
        </div>

        <Router history={hashHistory}>
          <Route  path={this.state.itemRoute.path} component={this.state.itemRoute.component}/>
        </Router>

      </div>
    )
  }
}