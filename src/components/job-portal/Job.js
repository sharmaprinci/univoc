import "../job-portal/Job.css";

function Job()
{
    return (
      <div className="bg-white-primary hidden md:flex pb-32 main">
        {/* Left Illustration Section */}
        <div className="landing_left">
          <div className="mt-[13%] ml-[15%]">
            <span className="span-1">
              <span className="span-2">
                <img
                className="img-1"
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
                />
              </span>
              <img
              className="img-2"
                src="/assets/header-working.png"
                decoding="async"
              />
            </span>
          </div>
        </div>
  
        {/* Center Content */}
        <div className="center-content">
          <div className="text-4xl text-center mt-6">
            <h1>
              India’s <span className="font-semibold">Largest</span> Job Portal
            </h1>
          </div>
          <p className="text-xl text-center mt-4">WorkIndia helps you hire staff in 2 days</p>
          <div className="relative h-80 w-full">
            <img
              className="center-img"
              src="/assets/landing_hero.png"
              decoding="async"
            />
          </div>
          <div className="flex justify-around space-x-4 mt-6">
            <div className="w-60">
              <button
                className="job-btn"
                type="button"
              >
                Hire now
              </button>
            </div>
            <div className="w-60">
              <button
                className="job-btn"
                type="button"
              >
                Get a job
              </button>
            </div>
          </div>
        </div>
  
        {/* Right Illustration Section */}
        <div className="landing_right">
          <div className="mb-20 ml-[20%]">
            <span className="span-3">
              <span className="span-4">
                <img
                  className="img-3"
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
                />
              </span>
              <img
                className="img-4"
                src="/assets/header-builder.png"
                decoding="async"
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  export default Job;
  