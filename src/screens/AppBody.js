import React, { Component } from 'react';



class AppBody extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
          input1: '',
          input2 : ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        console.log(target); // event.target is saved in target.
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value); //target.value is saved in value.
        const name = target.name; //target.name is saved in name.
        console.log(name);
    
        this.setState({
          [name]: value
        });
      }
      handleSubmit(event) {
        alert('This is input1: ' + this.state.input1);
        alert('This is input2: ' + this.state.input2);
        event.preventDefault();
      }


  render() {
      
    const result = this.state.input1 && this.state.input2 ? parseInt(this.state.input1) + parseInt(this.state.input2) : null;
    return (
                
        <div class="jumbotron">
            <h1 class="display-3">Add 2 Numbers</h1>
                <hr class="my-4"/>

                <fieldset>
                    <form onSubmit={this.handleSubmit}>
                        <label class="control-label" for="readOnlyInput"> </label>
                        <input  value={this.state.input1} onChange={this.handleInputChange} class="form-control" id="input1" name="input1" type="text" placeholder="input here…" />
                        <input value={this.state.input2} onChange={this.handleInputChange} class="form-control" id="input2"  name="input2" type="text" placeholder="input here…" />
                        <input type="submit" value="Submit" />
                        
                    </form>
                    
                </fieldset>

                    <p> This is the result {result} </p>

        </div>
         
         


    );
  }
}

export default AppBody;