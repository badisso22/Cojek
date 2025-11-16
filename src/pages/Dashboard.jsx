import { Link } from "react-router-dom";
import "./Dashboard.css";
export function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-container grid grid-cols-6  m-2">
        {/* menu bar starts here */}
        <div className="menu bg-amber-950 text-[#efe6e5] col-span-1 flex flex-col">
          {/* logo here */}
          <img
            className="size-28 pl-2"
            src="/images/logo2.png"
            alt="logo image"
          />

          {/* nav-links */}
          <ul className="menu-links pl-6 flex flex-col gap-3">
            <Link className="flex" to="">
              <img src="/images/home.png" alt="home icon" />
              <li>Home</li>
            </Link>
            <Link className="flex" to="">
              <img src="/images/save.png" alt="save icon" />
              <li>Saved</li>
            </Link>
            <Link className="flex" to="">
              <img src="/images/search.png" alt="search icon" />
              <li>Explore</li>
            </Link>
            <Link className="flex" to="">
              <img src="/images/profile.png" alt="profile icon" />
              <li>Profile</li>
            </Link>
            <Link className="flex" to="">
              <img src="/images/settings.png" alt="settings icon" />
              <li>Settings</li>
            </Link>
          </ul>

          {/* logout link */}
          <div className="logout flex mt-auto pl-6">
            <img src="/images/switch.png" alt="switch_icon" />
            <p>Logout</p>
          </div>
        </div>
        {/* menu bar ends here */}

        {/* dashboard area*/}
        <div className="dashboard-area col-span-5 grid max-h-[98vh] bg-amber-500">
          {/* search bar at the top */}
          <div className="search flex gap-2 m-auto max-w-[400px] ">
            {/* input + close button */}
            <div className="input bg-white max-w-[280px] rounded-2xl px-4 flex items-center">
              <input
                className="p-0 outline-none"
                type="text"
                placeholder="Search"
              />
              <img src="/images/close.png" alt="home icon" />
            </div>
            <img className="size-10" src="/images/icon.png" alt="icon" />
          </div>

          {/* hero section */}
          <div className="hero-section py-8 flex flex-col gap-5 text-center">
            <h1 className="hero-heading">Welcome Back, `[UserName]`</h1>
            <p className="text-2xl">Ready to build something today</p>

            <div className="buttons flex justify-center gap-2">
              <button>Generate Project</button>
              <button>Continue Project</button>
              <button>Have Fun</button>
            </div>
          </div>

          {/* streak section */}
          <div className="streak-section min-w-[600px] flex justify-self-center bg-pink-600 mx-14 py-5 my-5 rounded-md justify-around ">
            {/* streak display */}
            <div className="streak-display">
              <h2>Your Streak</h2>
              <p>5 dat streak, yay!!</p>
              <progress value="25" max="100"></progress>
              <p>You are doing amazing</p>
            </div>

            {/* project count display */}
            <div className="project-count">
              <h3>Total Projects Completed</h3>
              <p>3</p>
              <progress className="flex-1" value="25" max="100"></progress>
              <div className="user-level flex gap-1">
                <p>Beginner</p>
                <p>Intermediate</p>
                <p>Advanced</p>
              </div>
            </div>
            <div />
          </div>

          {/* streak ends here */}

          {/*project suggestion section */}
          <div className="suggestion py-10 px-6 grid">
            <h2 className="text-center text-2xl font-bold pb-6">Suggested Projects</h2>
            <div className="flex gap-3 m-auto">
              <div className="bg-amber-600 py-3 px-3 text-center rounded-md">
                <h3 className="font-bold py-2">Programming for Beginners</h3>
                <p className="py-2 text-sm">Practice the basics</p>
                <button className="border border-white py-1 px-5 rounded-[16px]">Try this</button>
              </div>

              <div className="bg-amber-600 py-3 px-3 text-center rounded-md">
                <h3 className="font-bold py-2">Programming for Beginners</h3>
                <p className="py-2 text-sm">Practice the basics</p>
                <button className="border border-white py-1 px-5 rounded-[16px]">Try this</button>
              </div>

              <div className="bg-amber-600 py-3 px-3 text-center rounded-md">
                <h3 className="font-bold py-2">Programming for Beginners</h3>
                <p className="py-2 text-sm">Practice the basics</p>
                <button className="border border-white py-1 px-5 rounded-[16px]">Try this</button>
              </div>

            </div>
          </div>

          {/* saved projects section */}
          <div className="saved-projects">
            <h3 className="font-bold text-2xl text-center">Your Saved Projects</h3>
            <div className="project-progress flex justify-around max-w-[800px] m-auto">
              <div className="flex flex-col">
                <h3>Intro to Python</h3>
                <progress value="60" max="100"></progress>
                <button className="text-xs bg-amber-700 w-fit mt-1 rounded-md px-1 py-1">60%</button>
              </div>

              <div className="flex flex-col">
                <h3>Intro to Java</h3>
                <progress value="30" max="100"></progress>
                <button className="text-xs bg-amber-700 w-fit mt-1 rounded-md px-1 py-1">30%</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
