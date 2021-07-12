import React , {Component} from 'react';
import '../App.css'
import axios from 'axios';
import Mainpage from './Mainpage';
import { getWeather, setBg } from '../Actions';

import {connect } from 'react-redux';


class Getweather extends Component{
    state={

        input:{
            cityname:""
     }
        
    
        
     
    }

    handlechange(e) {
        let {name,value}=e.target
        let{input}=this.state
        input["cityname"]=value
        this.setState({
            input
          
        })
        }

        //api call
        fetchdata(e){
           
                const apikey="1234408f0e49000fdb1d4d0b086fb0c5"
               let {input}=this.state
               axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.cityname}&appid=${apikey}`)
               .then( (response) =>{
                // handle success 
                
                console.log("responses",response);
                if (response.status.toString() === "200") {
                  let recieveddata = response.data;
                  this.props.getWeather(recieveddata);//passing weather data to action
                
                  //calling action to set background
                 (recieveddata.weather ? (
                     recieveddata.weather.map((items)=>{
                        this.props.setBg(items.main)

                     })


                 ):( this.props.setBg(""))) 
                }
                  
               })
                .catch(function (error) {
                    // handle error
                    console.log(error);
              
                    })
                    }

        
render(){
         
    let {SetWeather, Setbackground} = this.props  ;   

    return(

       <div  >
           
          {SetWeather.weather.length ?(<div class="container-fluid" 
          style={{backgroundImage:`url(${Setbackground.bgimg})`,backgroundPosition:"center",
          backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
          <h1 class="header" style={{color:"White"}}>Current Weather</h1><br></br>
           <div class="container" style={{width:"50%"}}> 
           <div class="row justify-content-md-center">
    <div class="col col-lg-12">
    <div class="input-group mb-5" style={{maxWidth:"100%"}}>
               <input  type="text" class="form-control" placeholder="Search city"  name="cityname" onChange={(e)=>this.handlechange(e)}/>
               <button class="btn btn-info " type="button " onClick={(e)=>this.fetchdata(e)} >Search</button>

           </div>
    </div>
    
  </div>

           </div>
           
              <div class="container my-5" style={{width:"90%"}} >
              <h5 style={{color:"rgb(175, 33, 132)"}}>{SetWeather.obj.cty}, {SetWeather.sys.country}</h5>
                   {this.props.SetWeather.weather.map((items,indexs)=>{
                return(
                <div> 
                    <h4 style={{color:"rgb(219, 253, 108)"}}>{items.main} ({items.description})</h4><br></br>
                    <br></br>
                    <br></br>
                    <br></br>     
                  </div>)


              })}
              
              <div class="row justify-content-md-center " >
                   <div class="col col-lg-3">
                   <div class="card my-4 bg-transparent border-0 " style={{width:"15rem",height:"15rem"}} >
                       
              
                  <div class="card-body "  >
                  
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYts_1jXyZ2GFSOec83p0omCKL04kWdqRPogRtHLbHm3gTABAw73omHwuwjbV_dlkilE&usqp=CAU"
              style={{height:"5rem",width:"60%",justifySelf:"center"}} class="rounded-circle" alt="pic"/>
                  
                  <h5 class="card-title">Temperature</h5>
                  <p class="card-text">{Math.ceil(SetWeather.tem_parameter.temp - 273.15)} degree Celsius</p>
                  </div>

              </div>

           </div>
           <div class="col col-lg-3">
                   <div class="card my-4 bg-transparent border-0 " style={{width:"15rem",height:"15rem"}}>
            
                  <div class="card-body" >
                        <img src="data:image/png;base64,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"
              style={{height:"5rem",width:"60%"}}  class="rounded-circle" alt="pic"/>
                  <h5 class="card-title">Wind</h5>
                  <p class="card-text">Wind Speed:{SetWeather.wind.speed} m/sec  Direction : {SetWeather.wind.deg} deg</p>
                 
                  </div>

              </div>

           </div>
           <div class="col col-lg-3">
           <div class="card my-4 bg-transparent border-0 " style={{width:"15rem",height:"15rem"}}>
            
            <div class="card-body" >
                  <img src="https://image.flaticon.com/icons/png/512/777/777610.png"
        style={{height:"5rem",width:"60%"}}  class="rounded-circle" alt="pic"/>
            <h5 class="card-title">Humidity</h5>
                  <p class="card-text">Humidity index : {SetWeather.tem_parameter.humidity}%</p>
           
           
            </div>

        </div>

       </div>
           <div class="col col-lg-3">
                   <div class="card my-4 bg-transparent border-0" style={{width:"15rem",height:"15rem"}}>
            
                  <div class="card-body" >
                  <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/atmospheric-pressure-2-571430.png"
              style={{height:"5rem",width:"60%"}} class="card-img-top" class="rounded-circle" alt="pic"/>
                  <h5 class="card-title" >Pressure </h5>
                  <p class="card-text" >Atmostpheric pressure:{SetWeather.tem_parameter.pressure} hPa</p>

                  </div>

              </div>

           </div>
                   
                   </div>
                      
                  </div>
                  </div>      
         )
         
         :(<div class="container-fluid ">
              <h1 class="header" style={{color:"rgb(173, 232, 255)"}}>Current Weather</h1><br></br>
         <div class="container" style={{width:"50%"}}> 
         <div class="row justify-content-md-center">
  <div class="col col-lg-12">
  <div class="input-group mb-4" style={{maxWidth:"100%"}}>
             <input  type="text" class="form-control" placeholder="Search city"  name="cityname" onChange={(e)=>this.handlechange(e)}/>
             <button class="btn  btn-light " type="button " onClick={(e)=>this.fetchdata(e)} >Search</button>

         </div>
  </div>
  </div>
           
         </div>
         <br></br>
         
         <Mainpage />
  
</div>
)}

       </div>
       
    )
}

}
 

const mapStateToProps = (state) =>{
  return{ 
     SetWeather: state.SetWeather,
     Setbackground: state.Setbackground
};
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setBg : (items)=> dispatch(setBg(items)), 
        getWeather: (recieveddata)=> dispatch(getWeather(recieveddata))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Getweather);



