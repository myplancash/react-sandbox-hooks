import './App.css'
import UserRefExample1 from '../components/UserRefExample1'
import UserRefExample2 from '../components/UserRefExample2'
import UseMemoExample from '../components/UseMemoExample'
import UseCallbackExample from '../components/UseCallbackExample'
import { CustomHook } from '../components/CustomHook'
import ColorPicker from '../components/ColorPicker/ColorPicker/ColorPicker'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sandbox React Hooks</h1>
        {/* <UserRefExample1 />
        <UserRefExample2 />
        <UseMemoExample />
        <CustomHook />
        <UseCallbackExample /> */}
        <ColorPicker />
      </header >
    </div >
  )
}

export default App
