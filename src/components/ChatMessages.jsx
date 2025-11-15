import {useState} from "react";
import { ChatMessage }  from "./ChatMessage";

export function ChatMessages(){
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

    //render chat messages
    return (
        <>
        {messages.map((msg) => {
        
           return (
             <ChatMessage 
            message={msg.message}
            sender={msg.sender}
            key={msg.id}
            />
           )
                  
    })}
        </>
    )
}