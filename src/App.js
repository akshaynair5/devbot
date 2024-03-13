import './App.css';
import sendimg from './assets/send.svg'
import axios from 'axios'
import {useEffect, useState} from 'react'
import botimg from './assets/bot.svg'
import userimg from './assets/user.svg'

function App() {
  const [Prompt,setPrompt] = useState("") 
  const [response,setRes] = useState("")
  const [chat,setChat] = useState([])
  const onSubmit = async (e) =>{
    e.preventDefault()
    await axios.post('http://localhost:3001/',{
      prompt:Prompt
    })
      .then(function(response){
        console.log(response)
        setRes(response)
        const temp1 = chat.concat({userChat:Prompt,botChat:response.data.bot})
        setChat(temp1)
        localStorage.setItem('Chat',JSON.stringify(chat))
      })
  }
  useEffect(()=>{
    const u = JSON.parse(localStorage.getItem('Chat'))
    if(u){
      setChat(u)
    }
  },[])
  const Handlekeypress = (e) =>{
    if(e.keyCode===13){
      e.preventDefault()
      onSubmit(e)
    }
  }
  const Clear = () =>{
    localStorage.clear()
  }
  return (
    <div id="App">
      <div id="chat_container">
        <div className='chats'>
          {
            chat.map((Chat)=>(
                  <div>
                    <div className='UC'>
                      <img src={userimg}/>
                      <p>{Chat.userChat}</p>
                    </div>
                    
                    <div className='BC'>
                      <img src={botimg}/>
                      <p>{Chat.botChat}</p>
                    </div>
                  </div>
            ))
          }
        </div>
        <form>
          <textarea name="prompt" rows="1" cols="1" onChange={(e)=>setPrompt(e.target.value)} onKeyUp={(e)=>Handlekeypress(e)} placeholder="Ask DevBot anything.. "></textarea>
          <button type="submit" onClick={(e)=>onSubmit(e)}><img src={sendimg} ></img></button>
          <input type="button" className='btn' value="clear chat" onClick={()=>Clear()}></input>
        </form>
      </div>
    </div>
  )
}

export default App;
{/* <div className='UC'>
                <img src={userimg}/>
              </div> */}