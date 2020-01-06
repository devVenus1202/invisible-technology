const locations = ['New York', 'San Paulo', 'Tokyo', '02-747']

const isPostalCode = (postalCode) => {
  const postalCodePattern = /^[0-9]{5}(?:-[0-9]{4})?$/
  return postalCodePattern.test(postalCode)
}

const getTimeFromLocation = location => {
  return '00:00'
}

const getWeatherFromLocaton = location => {
  return 'Fine'
}

const timeAndWeatherArray = locations.reduce((result, location)=>{
  const timeAndWeather = {
    location,
    time: getTimeFromLocation(location),
    weather: getWeatherFromLocaton(location),
    isPostalCode: isPostalCode(location)
  }
  result.push(timeAndWeather)
  return result;
},[])

console.log(timeAndWeatherArray)
