import { set_Bg, get_Weather } from "../Actions";

export const  SetWeather =  (state = {obj:{},weather:[],sys:{},tem_parameter:{},wind:{}} ,action) =>{

    switch(action.type){

        case get_Weather: return state = {
        obj:{
         visibilty:action.weather_data.visibility,
        
         location: action.weather_data.name,
         timezones:action.weather_data.timezone,
         cty: action.weather_data.name,
         
       },
       wind:action.weather_data.wind,
       tem_parameter:action.weather_data.main,
       sys: action.weather_data.sys,
         weather : action.weather_data.weather
         

        };
         default   : return state;                      
                             
                                 }}

export const Setbackground = ( state={bgimg: ""},action) =>{
      switch(action.type){
         case set_Bg :   
            if (action.currentweather ==="Clouds") 
            {
                
                  return state={bgimg:"https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            }
            else if(action.currentweather==="Clear")
            {
             
              return state={ bgimg:"https://wallpaperaccess.com/full/175915.jpg"}
            
            }
            else if( action.currentweather ==="Rain")
            {
             
               return state=  {bgimg:"https://i.pinimg.com/originals/18/60/75/186075bcc9258e646ee74f84b411839e.jpg"
            }
             
            }
            else if(action.currentweather==="Snow"){
             
               return state={  bgimg:"https://wallpaperaccess.com/full/444738.jpg"}
             
            }
            else if(action.currentweather ==="Mist"){
             
                return state={bgimg:"https://cdn.images.express.co.uk/img/dynamic/153/590x/secondary/UK-weather-1362975.jpg?r=1534891019826"
            }

            }
            else if(action.currentweather==="Thunderstrom"){
          
               return state ={bgimg:"https://c4.wallpaperflare.com/wallpaper/5/528/863/lightning-thunder-sky-lightning-strikes-wallpaper-preview.jpg"
               }

             
            }
            else if(action.currentweather==="Haze"){
            return state={
                 bgimg:"https://ak.picdn.net/shutterstock/videos/11521886/thumb/1.jpg"}
             }
            else{
            
               return state={bgimg:"https://cdn.images.express.co.uk/img/dynamic/153/590x/secondary/UK-weather-1362975.jpg?r=1534891019826"
            }

            }
       

        default   : return state; 
       
                                    
                                   
                          
      }

}                    
                      
   

   
