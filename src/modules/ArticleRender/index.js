import { React } from 'zola'
import showdown from 'showdown'
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
	  	fetch(filePath).then((data) =>{
	  		data.text().then(text =>{
	  			var subEnd  = text.indexOf("---", 3)
			    var subVal  = text.substring(subEnd)

	  			const converter = new showdown.Converter()
	  			converter.setOption('tables', true)
	  			const content   = converter.makeHtml(subVal);
				  this.setState({content})
	  		})
	  	})
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