import {Navbar} from '../components/Navbar'
import './ProjectGenPage.css'

export function ProjectGenPage() {
    return (
        <div>
            {/* navbar */}
            <Navbar/>

        <div className="intro-container flex px-15 justify-between py-17 relative">
            <div className="intro">
                <h1 className="intro-heading font-['Rubik-bubbles']" > Find projects ideas to boost your learning</h1>
                <p className="font-['Raleway-regular'] text-2xl">Sip your coffee while we generate clear, interesting project concepts for you.</p>
            </div>
<img className='absolute right-0 top-[50%] -translate-y-1/2 transform size-98 opacity-[0.1]' src="/images/mug.png" alt="mug-image" />
        </div>

        {/* chat bot component */}
        <div className="h-[300px] border-2 mx-15 mb-4">

        </div>

        {/* cards */}
        <div className="cards grid grid-cols-4 gap-4 px-15 pb-5">
           <div className='card relative'>
                     <img className='size-15 absolute left-1/2 -translate-x-1/2 bottom-2/5 -translate-y-1/2 transform' src="/images/beans.png" alt="coffee-bean-png" />
                    <p>Pick a topic</p>
                </div>
                 <div className='card relative'>
                     <img className='size-15 absolute left-1/2 -translate-x-1/2 bottom-2/5 -translate-y-1/2 transform' src="/images/beans.png" alt="coffee-bean-png" />
                    <p>Get idea</p>
                </div>
                 <div className='card relative'>
                     <img className='size-15 absolute left-1/2 -translate-x-1/2 bottom-2/5 -translate-y-1/2 transform' src="/images/beans.png" alt="coffee-bean-png" />
                    <p>Complete project</p>
                </div>
                 <div className='card relative'>
                     <img className='size-15 absolute left-1/2 -translate-x-1/2 bottom-2/5 -translate-y-1/2 transform' src="/images/beans.png" alt="coffee-bean-png" />
                    <p>Track your streak</p>
                </div>
        </div>

        </div>
    )
}