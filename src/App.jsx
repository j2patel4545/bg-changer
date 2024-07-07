import { useState } from 'react'


function App() {
 const [color,setcolor] =useState("https://images.pexels.com/photos/957061/milky-way-starry-sky-night-sky-star-957061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
  return (
    <div className='w-full h-screen duration-200'
    style={{ backgroundImage: `url(${color})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>


      <div className='fixed flex   flex-wrap justify-centerc bottom-12 inset-x-0 px-2  gap-5 ml-20 mr-20 justify-center bg-none'>
      <button onClick={()=>{
        setcolor("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      }}
       class="w-[150px] bg-zinc-50 text-zinc-950 font-semibold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
       Green
      </button>

      <button onClick={()=>{
        setcolor("https://images.pexels.com/photos/1453808/pexels-photo-1453808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      }}
       class="w-[150px] bg-zinc-50 text-zinc-950 font-semibold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c21e1e] before:to-[rgb(236,85,85)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
       Red
      </button>

      <button onClick={()=>{
        setcolor("https://images.pexels.com/photos/53135/hydrangea-blossom-bloom-flower-53135.jpeg?auto=compress&cs=tinysrgb&w=600")
      }}
       class="w-[150px] bg-zinc-50 text-zinc-950 font-semibold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#296ab4] before:to-[rgb(79,129,255)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
       Blue
      </button>

      <button onClick={()=>{
        setcolor("https://images.pexels.com/photos/1033751/pexels-photo-1033751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      }}
       class="w-[150px] bg-zinc-50 text-zinc-950 font-semibold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#9f0e9d] before:to-[rgb(201,106,206)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
       Purple
      </button>

      <button onClick={()=>{
        setcolor("https://images.pexels.com/photos/5171042/pexels-photo-5171042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      }}
       class="w-[150px] bg-zinc-50 text-zinc-950 font-semibold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#e28d05] before:to-[rgb(187,150,47)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
       Orange
      </button>

      <button onClick={()=>{
        setcolor("https://images.pexels.com/photos/5989242/pexels-photo-5989242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      }}
       class="w-[150px] bg-zinc-50 text-zinc-950 font-semibold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c3c304] before:to-[rgb(215,232,87)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
       Yellow
      </button>

      <button onClick={()=>{
        setcolor("https://images.pexels.com/photos/3906071/pexels-photo-3906071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      }}
       class="w-[150px] bg-zinc-50 text-zinc-950 font-semibold h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#b32064] before:to-[rgb(249,85,180)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
       Pink
      </button>

      </div>


    </div>
  )
}

export default App
