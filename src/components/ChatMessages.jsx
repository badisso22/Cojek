
import { ChatMessage }  from "./ChatMessage";

export function ChatMessages({messages}){
   

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