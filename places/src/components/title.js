import React from 'react'

export default class Title extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.title}</h1>
				<p> {this.props.title} Descubre lugares de manera simple</p>
			</div>
		);
	}

} 

