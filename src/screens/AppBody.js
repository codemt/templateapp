import React, { Component } from 'react';



class AppBody extends Component {


        getdetails(){

                alert('helloworld');
                console.log('clicked');

        }


  render() {
    return (
                
        <div class="jumbotron">
            <h1 class="display-3"> My calculator</h1>
                <hr class="my-4"/>

                <fieldset>
                    <label class="control-label" for="readOnlyInput"></label>
                    <input class="form-control" id="input1" type="text" placeholder="Readonly input here…" />
                    <input class="form-control" id="input1" type="text" placeholder="Readonly input here…" />
                    <label class="control-label" for="readOnlyInput"></label>
                </fieldset>


        </div>
         
         


    );
  }
}

export default AppBody;
