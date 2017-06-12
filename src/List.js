import React, {Component} from 'react';
import ListItem from './ListItem';
class List extends Component{

render(){
	const itemArr = this.props.itemList;
	const itemLists = itemArr.map((value)=>
		<ListItem key={value.toString()} item={value}/>
	);

	return(
			<div>
				<ul>
				{itemLists}
				</ul>
			</div>

		);
}

}

export default List;