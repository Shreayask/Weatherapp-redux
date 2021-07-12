export const get_Weather = 'getWeather';
export const set_Bg = 'setBg';

export const getWeather = (weather_data) =>{
    
    return{
        type: "getWeather",
        weather_data
    }
}

export const setBg = (currentweather) =>{
    return{
        type: "setBg",
      currentweather
    }

}