
import MyFunctionUser from './Components/MyFunction';
import MyClass from './Components/MyClass';
import CSS from './App.css';
import MyState from './Components/MyState';
import StatelessCustomer from './Components/StatelessCustomer'
import ModuleBind from './Components/ModuleBind'
import LifeCycle from './Components/LifeCycle'


// <MyFunctionUser name="Nevin" age ="34" />
// <MyClass name="Nevin" age ="34" />
// <MyClass name="Boban" age ="34" />
// <MyClass name="Binu" age ="34" />
// <StatelessCustomer/>   - Function and Class Example

function App() {
  return (
    <div id ="root" >
        <ModuleBind/>
        <LifeCycle/>
    </div>
  ); 
}

export default App;
