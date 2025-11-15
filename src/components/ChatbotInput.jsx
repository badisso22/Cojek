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

    return (
        <>
        < div className="search-input m-auto flex justify-between  w-[60vw] bg-white rounded-[20px] mt-4 py-1 px-2">
              <input
                className="outline-none px-4 text-(--footer-input) w-full"
                type="text"
                placeholder="Enter a topic"
                value={inputText}
                onChange={saveInputText}
              />
              <button className="bg-(--login-button) rounded-[20px] px-3 py-1"
              onClick={sendMessage}
              >
                Generate
              </button>
            </div>
        </>
    )
}