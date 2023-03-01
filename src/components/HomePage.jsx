import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
const { t } = useTranslation();

  const [location, setLocation] = useState(null); 
  const [temperature, setTemperature] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`http://api.weatherapi.com/v1/current.json?key=682aa6ab1b0949ba9de160616232202&q=Zurich`)
      .then(response => response.json())
      .then(
        (data) => {setLocation(data.location.name); 
          setTemperature(data.current.temp_c);
          setWeatherCondition(data.current.condition.text); 
          setWeatherIcon(data.current.condition.icon);
          setError(null);
        }
      )
      .catch(error => {
        setError(error);
      })
    }, 1000)

    return () => clearInterval(interval);
  }, []);

  const checkTemperature = (temperature) => {
    if(temperature > 0) {
      return true;
    }
    return false;
  }

  return (
    <div>
      {(error === null) ?
        <div>
          <p>It is &nbsp;
            {checkTemperature(temperature) && <span>+</span>}
            {temperature}C in {location} now.
          </p>
          <p>
            {t('weather', {temperature: temperature, location: location})}
          </p>
          <img src={weatherIcon} alt={weatherCondition} title={weatherCondition}/>
        </div> : 
        <div><p>{t('error')} :&#10098;</p></div>
      }
    </div>
  )
}

export default HomePage