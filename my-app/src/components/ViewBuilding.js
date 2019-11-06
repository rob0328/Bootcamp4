import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding } = this.props;
		const buildingList = selectedBuilding.map(id => {
			const {code, name, address, coordinates} = data[id-1]
			return(
				<body key={id}>
					<h4 className="fontColor">
						Building Information
					</h4>
					<li className="fontColor">
						<i>Code: </i>
						{code}
					</li>
					<li className="fontColor">
						<i>Name: </i>
						{name}
					</li>
					<li className="fontColor">
						<i>Address: </i>
						{address}
					</li>
				</body>	
			)
		})

		return (
			<div>
				<p>
					{' '}
					<i className="fontColor">Click on a name to view more information</i>
				</p>
				<ul>
                	{buildingList}
            	</ul>
			</div>
		);
	}
}
export default ViewBuilding;
