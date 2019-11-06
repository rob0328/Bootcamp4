import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import data from './data/data';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: [],
      listing: [data], 
      code: '',
      name: '',
      address: '',
    };
  }

  removeBuilding(id)
  {
    //console.log({buildings});
    var listing = this.state.listing
  
    const newList = [
      ...listing.slice(0, id),
      ...listing.slice(id+1)
    ]
    console.log(newList)
    
    this.setState({
      listing: newList
    })

    console.log(listing)
  }

  getBuildingCode(value)
  {
    this.setState({
      code: value
    })
  }

  getBuildingName(value)
  {
    this.setState({
      name: value
    })
  }

  getBuildingAddress(value)
  {
    this.setState({
      address: value
    })
  }

  addNewBuilding()
  {

  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    const secList = this.state.selectedBuilding.concat([id])
    this.setState({
      selectedBuilding: secList
    })
  }


  render() {    
    return (
      <div className="bg">
        <div className="row">
          <h1 className="title">UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText} 
          //Way for Search class to pass in update method from App class, to change filterText value
          filterUpdate={this.filterUpdate.bind(this)} 
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                    listing={this.state.listing}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                selectedBuilding={this.state.selectedBuilding}
                data ={this.props.data}/>
              <AddBuilding 
                data={this.props.data}
                code={this.state.code}
                name={this.state.name}
                address={this.state.address}
                getBuildingCode={this.getBuildingCode.bind(this)}
                getBuildingName={this.getBuildingName.bind(this)}
                getBuildingAddress={this.getBuildingAddress.bind(this)}      
                />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
