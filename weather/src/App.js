import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherContext } from "./ViewModel/weatherViewModel";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function App() {
  const weatherItems = useContext(WeatherContext);
  // @Published var weatherItems = [CityWeather]()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200" height="200" />
        {/* List(viewModel.weatherItems) { item in */}
        {
          weatherItems.map((item, index) =>
            <Paper key={index} style={{width: "200px", marginTop: "20px"}}>
              <Typography variant="h5" component="h3">
                {item.name}
              </Typography>
              <Typography component="p">
                {Math.round(item.temp).toString() + "℃"}
              </Typography>
              <img src={"https://www.metaweather.com/static/img/weather/png/64/" + item.icon + ".png"} width="32" height="32"/>
            </Paper>
          )
        }
      </header>
    </div>
  );
}

export default App;
