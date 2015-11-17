var ClockWidget = React.createClass({
  getInitialState: function () {
    var d = new Date();
    return { hours: d.getHours(), minutes: d.getMinutes(), format: 12 };
  },
  componentDidMount: function () {
    this.timer = setInterval(this.tick, 50);
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  click: function () {
    if ( this.state.format === 12 ) {
      this.setState({ format: 24 });
    } else {
      this.setState({ format: 12 });
    }
  },
  tick: function () {
    var d = new Date();
    this.setState({ hours: d.getHours(), minutes: d.getMinutes() });
  },
  render: function () {
    return (
      <div onClick={ this.click }>
        <span> { this.state.hours % this.state.format }:{ this.state.minutes } </span>
      </div>
    );
  }
});
