/**
 * I often struggle to know whether I should wear shorts or pants on a given day. 
 * (this is a complete lie. It's really not that hard to decide.) 
 * Please help me decide by writing me a function called isshortsweather .
   - It should accept a single number argument, which we will call temperature (but you can name it whatever you want, of course).
   - If temperature is greater than or equal to 75, return true.
   - Otherwise, return false.
   - This exercise assumes temperature is in Fahrenheit. I apologize to all my Celsius-using students!

    isShortsweather(80) //true
    isShortsweather(48) //false
    isshortsweather (75) //true
 */

function isShortsWeather(temperature) {
    return (temperature>=75)
}

    console.log(isShortsWeather(80)) //true
    console.log(isShortsWeather(48)) //false
    console.log(isShortsWeather (75)) //true