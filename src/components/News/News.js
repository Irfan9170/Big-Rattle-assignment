import React from 'react'

function News(props) {
  const date = new Date(props.date).toISOString().slice(0, 10)
  
    return (
      <>
     
             <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-white p-6 rounded-lg">
                <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src={props.image} alt="Image Size 720x400" />
                <a  href={props.url}><h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{props.title}</h3>
                </a> <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{date}</h2>
                <p class="leading-relaxed text-base">{props.description}</p>
              </div>
            </div> 
</>
    )
}

export default News
