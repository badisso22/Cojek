import { useState } from "react"
import { ChatMessages } from "./ChatMessages"
import { ChatbotInput } from "./ChatbotInput"
import './GeneratorChatbot.css'
export function GeneratorChatbot() {
     const [messages, setMessages] = useState([
          {
              message: "Hello!",
              sender: "user",
              id: "1"
          },
  
          {
              message: "Hello! Follow the prompt below to generate a project",
              sender: "chatbot",
              id: "2"
          }
      ])

    return (
        <div >
         
            <div className="chatbot-container py-10 px-15 mx-15 mb-20 flex flex-col border">
               <ChatMessages messages={messages} />
              <ChatbotInput messages={messages} setMessages={setMessages}/>
            </div>
        </div>
    )
}