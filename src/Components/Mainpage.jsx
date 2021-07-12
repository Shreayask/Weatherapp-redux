import React , {Component} from 'react';
 

class Mainpage extends Component{

    render(){

        return(
           
 <div class="container my-6" style={{width:"70%",backgroundColor:"rgb(231, 157, 238)"}} > 
             <h3 style={{color:"white"}}>Get The Current Weather Information</h3>
           <div class="row justify-content-md-center">
    <div class="col col-lg-4">
  
              <div class="card " style={{width:"15rem",height:"25rem"}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK97YHa8oNjuHgslt78xFJ278pfU4nUbcm-w&usqp=CAU"
              style={{height:"17rem",width:"100%"}} class="card-img-top" alt="pic"/>
                  <div class="card-body" >
                  <h5 class="card-title">Humidity</h5>
                  <p class="card-text">Find out Humidity index</p>

                  </div>

              </div>

           </div>
           <div class="col col-lg-4">
  
              <div class="card " style={{width:"15rem",height:"25rem"}}>
              <img src="https://png.pngtree.com/png-vector/20201224/ourmid/pngtree-vector-weather-app-icon-png-image_2600013.jpg"
              style={{height:"17rem",width:"100%"}} class="card-img-top" alt="pic"/>
                  <div class="card-body" >
                  <h5 class="card-title">Weather</h5>
                  <p class="card-text">Find out weather current status of your place</p>

                  </div>

              </div>

           </div>
           <div class="col col-lg-4">
  
              <div class="card " style={{width:"15rem",height:"25rem"}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTyJYfBSfiU_tKNCdKdGF_BZBoKPq-POFjlA&usqp=CAU"
              style={{height:"17rem",width:"100%"}} class="card-img-top" alt="pic"/>
                  <div class="card-body" >
                  <h5 class="card-title">Temperture</h5>
                  <p class="card-text"> Find out temperature and pressure</p>

                  </div>

              </div>

           </div>
    </div>
    
  </div>

        )
    }

 }
 export default Mainpage;


