import React from 'react';
import "./Divisions.css"
export default function  Divisions(props){
    return(
    <>
    <div class="masterDiv">
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 max-w-[70%]">
            <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                {props.Name}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                Here are your stats for {props.Name}
            </p>
            <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                </div>
                <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Total Hours You Put in</h2>
                <p className="leading-relaxed text-base">
                    Its time to celebrate because you have dedicated a total of {props.Hours} hours !       
               </p>

                </div>
            </div>
            
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                </div>
                <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Your 21 day progress</h2>
                <p className="leading-relaxed text-base">
                    Hurray! you have been consistent for {props.Days} days!
                </p>
            </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                </div>
                <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Duration</h2>
                <p className="leading-relaxed text-base">
                    On an average you have spent {props.Avg} hours during each session! 
                </p>
            </div>
            </div>
            </div>
            
        </div>
        </section>
    </div>
    </>
    )
    
}



{/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
Button
</button> */}