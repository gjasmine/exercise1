import React, { Component } from 'react';
import List from './List';

class Todos extends Component{

	constructor(props){
		super(props);
		this.state={
			value	:"",
			items 	: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(e){
		this.setState(
				{
					items	:[...this.state.items,this.state.value],
					value	:''
				}
			);
		e.preventDefault();

	}

	handleChange(e){
		this.setState(
			{value:e.target.value}
			);
		}

	

	render(){

		return(
				<div>
					<form onSubmit={this.handleSubmit}>
					<br/>
					My Todos
					<br/><br/>
					<input type="text" value={this.state.value} onChange={this.handleChange} /> 
					<br/><br/>
					<input type="Submit" value="Add Todos"/>
					</form>
					<br/>
					<List itemList={this.state.items}/>
				</div>
			);
	}



}

export default Todos;