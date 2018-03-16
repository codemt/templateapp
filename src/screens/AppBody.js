import React, { Component } from 'react';



class AppBody extends Component {


        getdetails(){

                alert('helloworld');
                console.log('clicked');

        }


  render() {
    return (
                
        <div class="card">
               
            <div class="card">


                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />

                
                <div class="card-body">
                    
                    <h4 class="card-title"> Get Details of City</h4>
                    
                    <p class="card-text"> </p>
                    <button class="btn btn-primary" onClick={()=>this.getdetails()} >Click to Get Details</button>
                </div>

            </div>

         </div>
         
         


    );
  }
}

export default AppBody;
