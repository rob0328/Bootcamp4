import React from 'react';
import { Dirent } from 'fs';
import RemoveBuilding from './RemoveBuilding'

class BuilingList extends React.Component {
	render() {
		//console.log(this.props)
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate, listing, removeBuilding } = this.props;
		console.log(listing)

		const buildingList = data.filter(directory => {
			return( 
				directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >=0
			);
		} )
		.map(directory => {
			return (
				<tr 
				key={directory.id}
				onClick={ () => selectedUpdate(directory.id)}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
					<button onClick={() => removeBuilding(directory.id)}>Remove</button>
				</tr>
			);
		});

		return <div>
		{buildingList}
		</div>;
	}
}
export default BuilingList;
