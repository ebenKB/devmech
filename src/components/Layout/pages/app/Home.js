import React, {useContext} from 'react'
import Hero from '../../Hero';
import Items from '../../Items/Items';
import AuthContext from '../../../Auth/authContext';
import { Loader } from 'semantic-ui-react'

const Home = () => {
  const authContext = useContext(AuthContext);
  const [state] = authContext;
  const {loading} = state;
  return (
  <div>
    <Hero />
    <div className="main">
      <div>
        {
          loading &&   
          <Loader 
            content="Loading records ..." 
            className="ui active centered inline loader" 
          />
        }
        <Items />
      </div>
    </div>
  </div>
  )
}

export default Home;
