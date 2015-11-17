var JokesWidget = React.createClass({
  componentDidMount: function () {
    this.getJoke();
  },
  getInitialState: function () {
    return { joke: 'loading' };
  },
  getJoke: function () {
    $.getJSON('http://api.icndb.com/jokes/random', function(response) {
      console.log(response.value.joke);
      this.setState({ joke: response.value.joke });
    }.bind(this));
  },
  render: function () {
    return (
      <div style={{display: 'table', margin: 'auto'}}>
        <p>{ this.state.joke }</p>
      </div>
    );
  }

});
