export function LandingPage() {
  return (
    <div>
      <nav className="flex mt-4 mx-5  bg-(--navbar-background) text-(--text-navbar) h-auto rounded-[20px]  px-10 items-center">
        <ul className="flex gap-4 ">
          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Quiz</a>

          <a className="bg-(--login-button) rounded-[25px] px-4 py-1" href="#">
            Login
          </a>
        </ul>

        <img
          className="ml-auto  size-15 "
          src="/images/logo2.png"
          alt="Cojek logo"
        />
      </nav>
      {/* Hero section */}
      <div className="hero-section my-[9em] text-center ">
        <h1 className="font-(--hero-font) text-6xl">Cojek</h1>
        <p className="py-5">sip, think, create</p>
      </div>
      {/* cards section */}
      <div className="cards grid grid-cols-2 gap-2 px-6">
        <div className="card bg-(--card-dark)">
          <h3>Topic Based Ideas</h3>
          <p>Type any concept and get project ideas instantly</p>
        </div>
        <div className="card bg-(--card-light)">
          <h3>Difficulty Levels</h3>
          <p>Projects come with beginner, intermediate, and advanced labels </p>
        </div>
        <div className="card bg-(--card-light)">
          <h3>Quick Quizzes</h3>
          <p>Optional mini quizzes to test your understanding</p>
        </div>
        <div className="card bg-(--card-dark)">
          <h3>Progess Tracking</h3>
          <p>Earn streaks, badges, and points as you complete projects.</p>
        </div>
      </div>

      {/* Get started section */}
      <div className="getStarted my-20 text-center">
        <h1 className="text-5xl">Let's create something fun</h1>
        <button className="border-2 rounded-md py-1 px-3 mt-3">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-(--footer-background) grid grid-cols-2 py-2 pb-7 text-(--text-footer)">
        <div className="ml-[2em] flex flex-col justify-center place-items-center">
          <img
            className="size-35 m-auto  h-28"
            src="/images/logo2.png"
            alt="Cojek logo"
          />
          <p className="pb-3 text-center">
            A cozy place to generate ideas, explore projects & keep yor creative
            streak akive
          </p>
          <div className="search-input w-[305px] bg-(--card-light) rounded-[20px] py-1">
            <input
              className="outline-none px-4"
              type="text"
              placeholder="Enter your topic to begin "
            />
            <button className="bg-(--login-button) rounded-[20px] px-3 py-1">
              Generate
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
