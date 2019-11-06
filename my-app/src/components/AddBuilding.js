import React from 'react';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props)
    }
    
    getBuildingCode()
    {
        const val = this.myValue.value;
        this.props.getBuildingCode(val);    
    }

    getBuildingName()
    {
        const val = this.myValue.value;
        this.props.getBuildingName(val);    
    }

    getBuildingAddress()
    {
        const val = this.myValue.value;
        this.props.getBuildingAddress(val);    
    }

    addNewBuilding()
    {
        const code = this.myValue.code;
        const name = this.myValue.name;
        const address = this.myValue.address;

        this.props.addNewBuilding(code, name, address);
    }
    
    render(){
        return(
            <h3 className="fontColor">
                Add New Building
                <form>
                    <input
                    type="text"
                    ref={(value) => {this.myValue = value}}
                    placeholder= "Type Building Code"
                    onChange={this.getBuildingCode.bind(this)}
                    />
                </form>
                <form>
                    <input
                    type="text"
                    ref={(value) => {this.myValue = value}}
                    placeholder= "Type Building Name"
                    onChange={this.getBuildingName.bind(this)}
                    />
                </form>
                <form>
                    <input
                    type="text"
                    ref={(value) => {this.myValue = value}}
                    placeholder= "Type Building Address"
                    onChange={this.getBuildingAddress.bind(this)}
                    />
                </form>
                <button 
                position = "relative" 
                left= "85%"> 
                 Add
                </button>        
            </h3>
        )
        
    }

}

export default AddBuilding;