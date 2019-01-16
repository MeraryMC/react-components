class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    }
  }

  mouseEnter() {
    this.setState({
      hovering: true
    });
  }

  mouseLeave() {
    this.setState({
      hovering: false
    })
  }

  render() {
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    return (
      <li
        style={style}
        onMouseLeave={this.mouseLeave.bind(this)}
        onMouseEnter={this.mouseEnter.bind(this)}
      >
        {this.props.item}
      </li>
    )
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList items={['kale', 'cucumbers', 'coffee']} />, document.getElementById('app'));