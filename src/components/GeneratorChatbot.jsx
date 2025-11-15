import { ChatMessages } from "./ChatMessages"
import './GeneratorChatbot.css'
export function GeneratorChatbot() {
    return (
        <div >
         
            <div className="chatbot-container py-10 px-15 mx-15 mb-20 flex flex-col border">
               <ChatMessages message/>
             < div className="search-input m-auto flex justify-between  w-[60vw] bg-white rounded-[20px] mt-4 py-1 px-2">
              <input
                className="outline-none px-4 text-(--footer-input) w-full"
                type="text"
                placeholder="Enter a topic "
              />
              <button className="bg-(--login-button) rounded-[20px] px-3 py-1">
                Generate
              </button>
            </div>
            </div>
        </div>
    )
}