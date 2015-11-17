var WeatherWidget = React.createClass({
  getInitialState: function () {
    return { icon: 'loading', description: 'loading', name: 'loading' };
  },
  componentDidMount: function () {
    this.interval = setInterval(this.getPosition, 10000);
  },
  componentWillUnmount: function () {
    clearInterval(this.interval);
  },
  getPosition: function () {
    var geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(
      this.getWeather
    );
  },
  getWeather: function (pos) {
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;
    var appid = '&appid=305d8ca8772c8832142fb12be2a83848';
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=';
    var uri_string = url + lat + '&lon=' + lon + appid;
    $.getJSON(uri_string, function (data) {
      var weather = data.weather[0];
      this.setState(weather);
      this.setState({ name: data.name });
    }.bind(this));
  },
  render: function () {
    return (
      <div>
        <img src={ 'http://openweathermap.org/img/w/' + this.state.icon + '.png' }/>
        <p>{ this.state.description }</p>
        <p>{ this.state.name }</p>
      </div>
    );
  }
});
