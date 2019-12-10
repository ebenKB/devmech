import React, {Component} from 'react';
import Item from './Item';
import ProductItems from '../../../seed/products';

import './items.css';

class Items extends Component{
  constructor() {
    super();
      this.state = {
        items: ProductItems,
      }
  }

  componentDidMount() {
    // if(this.state.items === null) {
    //   this.setState({
    //     items: []
    //   })
    // }
  }

  render() {
    return(
      <div>
        <h1>Featured items</h1>
        <div className="grid">
          {
            ProductItems.map((item) => {
              return <Item item={item} key={item.id}/>
            })
          }
        </div>
      </div>
    )
  }
}
 
export default Items;
