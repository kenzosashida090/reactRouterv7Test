import { Link } from "react-router";
import type { Route } from "./+types/home";
import Scene from "~/components/earth";
import React from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "REACTExplorer" },
    { name: "Look up into our country data", content: "Welcome to REACTExplorer!" },
  ];
}
const  Home: React.FC = () => {
  return(
    <div className=" px-2 py-32 bg-white md:px-0 " >
      <div className="container items-center max-w-6xl mx-auto xl:px-5 shadow-sm">
        <div className="flex flex-wrap items-center sm:mx-3"> 
        <div className="w-full md:w-1/2"  >
        <div className="space-y-6 sm:max-w-md lg:max-w-lg mb-7">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="block xl:inline">Explore Countries with </span>
            <span className="block xl:inline text-emerald-400 ">Real-Time Data </span>
            </h1>
            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl">
                Discover details about every country around the world – from
                capitals to regions!
              </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 ease-out duration-300 transition-all">
          <Link to="/countries" className="flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-700 ease-out duration-300 transition-all text-white font-bold py-2 px-4 rounded">
          Explore Now
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
          </Link>
          <Link to="/countries" className="  flex items-center justify-center bg-gray-400 ease-out duration-300 transition-all hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </Link>
        </div>
      </div>
        <div>
        <div className="hidden md:flex items-center justify-center ml-30 ">
            <Scene/>
        </div>
        <div>
          
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Home;