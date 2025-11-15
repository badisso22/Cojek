import { Link } from "react-router-dom";
import "./Dashboard.css";
export function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-container grid grid-cols-4  m-2">
        {/* menu bar starts here */}
        <div className="menu bg-amber-950 col-span-1 flex flex-col">
          {/* logo here */}
          <img
            className="size-28 pl-2"
            src="/images/logo2.png"
            alt="logo image"
          />

          {/* nav-links */}
          <ul className="menu-links pl-6">
            <Link to="">
              <span>icon_here</span>
              <li>Home</li>
            </Link>
            <Link to="">
              <span>icon_here</span>
              <li>Saved</li>
            </Link>
            <Link to="">
              <span>icon_here</span>
              <li>Explore</li>
            </Link>
            <Link to="">
              <span>icon_here</span>
              <li>Profile</li>
            </Link>
            <Link to="">
              <span>icon_here</span>
              <li>Settings</li>
            </Link>
          </ul>

          {/* logout link */}
          <div className="logout flex mt-auto pl-6">
            <span>icon_here</span>
            <p>Logout</p>
          </div>
        </div>
        {/* menu bar ends here */}

        {/* dashboard area*/}
        <div className="dashboard-area col-span-3 grid bg-amber-500">
          {/* search bar at the top */}
          <div className="search flex gap-2 m-auto max-w-[400px] ">
            {/* input + close button */}
            <div className="input bg-white max-w-[280px] rounded-2xl px-4 flex items-center">
              <input
                className="p-0 outline-none"
                type="text"
                placeholder="Search"
              />
              <p>x</p>
            </div>
            <span className="border rounded-full p-2">icon</span>
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
          <div className="streak-section bg-red-300 ">
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
              <progress value="25" max="100"></progress>
              <div className="user-level">
                <p>Beginner</p>
                <p>Intermediate</p>
                <p>Advanced</p>
              </div>
            </div>

            {/*project suggestion section */}
            <div className="suggestion">
              <div className="">
                <h3>Programming for Beginners</h3>
                <p>Practice the basics</p>
                <button>Try this</button>
              </div>

              <div className="">
                <h3>Programming for Beginners</h3>
                <p>Practice the basics</p>
                <button>Try this</button>
              </div>

              <div className="">
                <h3>Programming for Beginners</h3>
                <p>Practice the basics</p>
                <button>Try this</button>
              </div>
            </div>

            {/* saved projects section */}
            <div className="saved-projects">
              <h2>Your Saved Projects</h2>
              <div className="project-progress">
                <div>
                  <h3>Intro to Python</h3>
                  <progress value="60" max="100"></progress>
                  <button>60%</button>
                </div>

                <div>
                  <h3>Intro to Java</h3>
                  <progress value="30" max="100"></progress>
                  <button>30%</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
