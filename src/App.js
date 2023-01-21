import './App.css';
import sendimg from './assets/send.svg'

function App() {
  return (
    <div id="App">
      <div id="chat_container">

        
        <form>
          <textarea name="prompt" rows="1" cols="1" ></textarea>
          <button type="submit"><img src={sendimg}></img></button>
        </form>
      </div>
    </div>
  );
}

export default App;
