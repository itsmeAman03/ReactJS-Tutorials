import './App.css'
import CakeView from './features/cake/CakeView'
import IcecreamView from './features/icecream/IcecreamView'
import UserView from './features/user/UserView'
import RocketView from './features/rocket/RokcetView'



function App() {

  return (
    <div>
      <h1>Home Page</h1>
      <CakeView />
      <IcecreamView />
      <UserView />
      <RocketView />
    </div>
  )
}

export default App
