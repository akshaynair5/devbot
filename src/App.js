import './App.css';
import sendimg from './assets/send.svg'
import axios from 'axios'
import {useEffect, useState} from 'react'
import botimg from './assets/bot.svg'
import userimg from './assets/user.svg'

function App() {
  const [Prompt,setPrompt] = useState("") 
  const [response,setRes] = useState("")
  const [userChat,setUc] = useState([])
  const [botChat,setBc] = useState([])
  const onSubmit = async (e) =>{
    e.preventDefault()
    const temp = userChat.concat({chat:Prompt})
    setUc(temp)
    await axios.post('http://localhost:3001/',{
      prompt:Prompt
    })
      .then(function(response){
        console.log(response)
        setRes(response)
        const temp1 = botChat.concat({chat:response.data.bot})
        setUc(temp1)
      })
  }
  useEffect(()=>{
    const u = JSON.parse(localStorage.getItem('userchat'))
    if(u){
      setUc(u)
    }
    const b = JSON.parse(localStorage.getItem('botchat'))
    if(b){
      setBc(b)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('userchat',JSON.stringify(userChat))
    localStorage.setItem('botchat',JSON.stringify(botChat))
  },[userChat])
  const Handlekeypress = (e) =>{
    if(e.keyCode===13){
      onSubmit(e)
    }
  }
  return (
    <div id="App">
      <div id="chat_container">
        <div className='chats'>
          <div className='UC'>
            <img src={userimg}/>
            <p>Hey whats your name?</p>
          </div>
          <div className='BC'>
            <img src={botimg}/>
            <p>Hey whats your name?</p>
          </div>
          {
            userChat.map((Chat)=>(
              <div className='UC'>
                <img src={userimg}/>
                <p>{Chat.chat}</p>
              </div>
            ))
          }
        </div>
        <form>
          <textarea name="prompt" rows="1" cols="1" onChange={(e)=>setPrompt(e.target.value)} onKeyUp={(e)=>Handlekeypress(e)}></textarea>
          <button type="submit" onClick={(e)=>onSubmit(e)}><img src={sendimg} ></img></button>
        </form>
      </div>
    </div>
  )
}

export default App;
