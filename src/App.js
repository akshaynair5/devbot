import './App.css';
import sendimg from './assets/send.svg'
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [prompt,setPrompt] = useState("") 
  const [response,setRes] = useState("")
  const [userChat,setUc] = useState([])
  const [botChat,setBc] = useState([])
  const onSubmit = async (e) =>{
    e.preventDefault()
    const temp = userChat.concat({chat:prompt})
    setUc(temp)
    await axios.post('http://localhost:3001/',{
      prompt:prompt
    })
      .then(function(response){
        console.log(response)
        setRes(response)
        const temp = userChat.concat({chat:response.data.bot})
        setUc(temp)
      })
  }
  return (
    <div id="App">
      <div id="chat_container">
        {
          userChat.map((chat)=>{
            <div className='chat'>
              <p>{chat}</p>
            </div>
          })
        }
        <form>
          <textarea name="prompt" rows="1" cols="1" onChange={(e)=>setPrompt(e.target.value)}></textarea>
          <button type="submit" onClick={(e)=>onSubmit(e)}><img src={sendimg}></img></button>
        </form>
      </div>
    </div>
  )
}

export default App;
