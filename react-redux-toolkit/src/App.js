import './App.css';
import { CakeView } from './features/cake/cakeView';
import { IcecreamView } from './features/icecream/icecreamView';
import { UsersView } from './features/user/userView';

function App() {
  return (
    <div className="App">
       <CakeView></CakeView>
       <IcecreamView></IcecreamView>
       <UsersView></UsersView>
    </div>
  );
}

export default App;
