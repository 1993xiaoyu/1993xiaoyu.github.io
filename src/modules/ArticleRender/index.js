import { React } from 'zola'
import showdown from 'showdown'
import articleList from '../../data/article'
import './markdown.styl'

export default class extends React.Component{
	constructor(props) {
	  super(props);

	  this.state = {
	  	content:null
	  };
	}
	componentWillMount(){
		const filePath = this.props.articlePath

		articleList.map(v => {
      if(v.path+'.md' == filePath){
      	v.component().then(content => {
      		console.log(content)
      		var subEnd  = content.indexOf("---", 3)
			    var subVal  = content.substring(subEnd)
		      this.setState({content:content})
		    });
      }
    });
	}

	render(){
		const {content} = this.state
		if(content == null){
			return null
		}
		return (
			<div className="markdown" dangerouslySetInnerHTML={{__html: content}}>
			</div>
		)
	}
}