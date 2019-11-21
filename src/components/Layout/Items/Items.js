import React, {Component} from 'react';
import Item from './Item';

class Items extends Component{
  constructor() {
    super();
      this.state = {
        items: null,
      }
  }

  componentDidMount() {
    console.log("The component has mounted...")
    if(this.state.items === null) {
      console.log('the items is null');
      this.setState({
        items: ["one", "two"]
      })
    }
  }

  render() {
    return(
      <div>
        <h1>Featured items</h1>
        <div className="grid">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    )
  }
}
 
export default Items;
