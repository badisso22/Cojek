import { useState } from "react";

export function ChatbotInput({messages, setMessages}){

    const [inputText, setInputText] = useState("")

    function saveInputText(event){
        setInputText(event.target.value);
    }

    function sendMessage(){
        const existingMessages = [
            ...messages,
            {
                message:  inputText,
                sender: "user",
                id: crypto.randomUUID(),
            }
        ]

        setMessages(existingMessages)

        setInputText("")

        setMessages([
              ...existingMessages,
            {
                message:  inputText,
                sender: "chatbot",
                id: crypto.randomUUID(),
            }
        ])
    }

    //Enter key can send message if input area is not empty
    function keyInputs(event){
        let activeKey = event.key;
        if(activeKey === 'Enter'){
            //if inputbar is not empty as well
            if(inputText !== ""){
                sendMessage()
            }
        }
        else if(activeKey === 'Escape'){
            //reset or clear input bar
            setInputText("")
    }
}

    return (
        <>
        < div className="search-input m-auto flex justify-between  w-[60vw] bg-white rounded-[20px] mt-4 py-1 px-2">
              <input
                className="outline-none px-4 text-(--footer-input) w-full"
                type="text"
                placeholder="Enter a topic"
                value={inputText}
                onChange={saveInputText}
                onKeyDown={keyInputs}
              />
              <button className="bg-(--login-button) rounded-[20px] px-3 py-1"
              onClick={sendMessage}
              disabled={inputText === "" ? true : false}
              >
                Generate
              </button>
            </div>
        </>
    )
}