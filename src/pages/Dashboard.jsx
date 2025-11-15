import { Link } from "react-router-dom";
export function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        {/* menu bar starts here */}
        <div className="menu">
            {/* logo here */}
          <img src="/images/logo.png" alt="logo image" />

          {/* nav-links */}
          <ul className="menu-links">
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
          <div className="logout flex">
            <span>icon_here</span>
            <p>Logout</p>
          </div>

        </div>
        {/* menu bar ends here */}

        {/* dashboard area*/}
        <div className="dashboard-area">
            {/* search bar at the top */}
            <div className="search">
                {/* input + close button */}
                <div className="input">
                    <input type="text" placeholder="Search" />
                    <span>cross_icon_here</span>
                </div>
                <span>user_icon_here</span>
            </div>

            {/* hero section */}
            <div className="hero-section">
                <h1>Welcome Back, `UserName`</h1>
                <p>Ready to build something today</p>

                <div className="buttons">
                    <button>Generate Project</button>
                    <button>Continue Project</button>
                    <button>Have Fun</button>
                </div>
            </div>

            {/* streak section */}
            <div className="streak-section">
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
                    <div className="card">
                        <h3>Programming for Beginners</h3>
                        <p>Practice the basics</p>
                        <button>Try this</button>
                    </div>

                    <div className="card">
                        <h3>Programming for Beginners</h3>
                        <p>Practice the basics</p>
                        <button>Try this</button>
                    </div>

                    <div className="card">
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
    </>
  );
}
