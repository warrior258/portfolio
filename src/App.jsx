import { useEffect, useState } from "react"


const App = () => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {

    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    } else{
      document.documentElement.classList.remove("dark");
    }

  },[theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };




  return (
    <div>
      <div className='max-w-7xl mx-auto mt-24'>

        {/* <div className="text-right">
          <button onClick={handleThemeSwitch} className='bg-orange-300 rounded-md p-1'>
            <img src={theme === "dark" ? `/assets/moon.svg` : `/assets/sun.svg`} alt="" />
          </button>
        </div> */}

        <div className="fixed top-0 left-[50%] translate-x-[-50%] translate-y-0  md:w-56 w-48 md:h-10 h-9 z-10 rounded-b-lg bg-gray-400 backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-400 border-opacity-5 flex flex-row justify-around items-center dark:bg-[#242424] dark:bg-opacity-90">
          <a href="https://www.linkedin.com/in/vaibhav-bedi-17aa5520a" target={'_blank'}>
            <img src="assets/linkdin.svg" alt="" className="w-[22px] cursor-pointer duration-200 active:scale-90"/>
          </a>

          <a href="https://github.com/warrior258" target={'_blank'}>
            <img src="assets/github.svg" alt="" className="w-[22px] cursor-pointer duration-200 active:scale-90"/>
          </a>

          <a href="https://twitter.com/valbhav07" target={'_blank'}>
            <img src="assets/twitter.svg" alt="" className="w-[22px] cursor-pointer duration-200 active:scale-90"/>
          </a>

          {/* Dark-Night Mode Button */}
          
          <button onClick={handleThemeSwitch} className=''>
            <img src={theme === "dark" ? `assets/moon.svg` : `assets/sun.svg`} alt="" className="w-[22px] duration-300 active:scale-90 active:rotate-45" />
          </button>
          
        </div>
        
        <div className='text-gray-200 dark:text-[#242424] flex md:flex-row flex-col justify-center items-center md:gap-20 gap-10'>
          <img src={theme === "dark" ? `assets/heroDark.svg` : `assets/hero.svg`} alt="" className='md:w-4/12 sm:w-6/12 w-8/12' />
          <div className='md:w-4/12 sm:w-8/12 w-10/12'>
            <p className='text-justify leading-7 md:text-lg'>Hello, I'm <strong className="text-orange-300">Vaibhav Bedi</strong>. I'm a Developer and Designer. I provide freelance services for Web Development, Facebook ads and desgin content need.</p>
            {/* <p>Join me below!</p> */}
            <a href="/assets/VaibhavBedi.pdf" download>
              <button className='mt-5 bg-gray-200 dark:bg-[#242424] dark:text-gray-200 text-[#242424] px-4 py-1 rounded-md shadow font-medium tracking-wide hover:bg-gray-300 duration-200 active:scale-90'>Resume</button>
            </a>
          </div>
        </div>
        
        <div className='text-gray-200 dark:text-[#242424] px-8'>
          <h1 className='text-3xl font-bold text-center mt-16 md:mb-8'>Projects</h1>
          <div className='md:flex md:justify-around md:items-center flex-wrap'>
            <div className='border-2 border-gray-400 dark:border-[#242424] rounded-md overflow-hidden md:w-3/12 md:my-5 my-10 cursor-pointer hover:scale-105 duration-200'>
              <div className="relative">
                <img src="assets/crypto.png" alt="" className='w-full' />
                <div className="group-hover:bg-gray-400 group-hover:bg-opacity-10 absolute top-0 w-full h-full hover:backdrop-filter hover:backdrop-blur-sm opacity-0 hover:opacity-100 duration-200">
                  <a href="https://github.com/warrior258/cryptostats" target={'_blank'}>
                    <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-orange-300 text-[#242424] active:scale-90 duration-200 px-2 rounded-sm">View</button>
                  </a>
                </div>
              </div>
              <div>
                <h2 className='text-lg font-bold px-3 pt-2'>CryptoStats</h2>
                <div className='text-xs font-bold tracking-wider flex gap-3 p-3 flex-wrap'>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>HTML</p>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>CSS</p>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>ReactJS</p>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>Firebase</p>
                </div>
              </div>
            </div>
            <div className='border-2 border-gray-400 dark:border-[#242424] rounded-md overflow-hidden md:w-3/12 md:my-5 my-10 hover:scale-105 duration-200 cursor-pointer'>
            <div className="relative">
                <img src="assets/book.png" alt="" className='w-full' />
                <div className="group-hover:bg-gray-400 group-hover:bg-opacity-10 absolute top-0 w-full h-full hover:backdrop-filter hover:backdrop-blur-sm opacity-0 hover:opacity-100 duration-200">
                  <a href="#">
                    <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-orange-300 bg-[#242424] active:scale-90 duration-200 px-2 rounded-sm">View</button>
                  </a>
                </div>
              </div>
              {/* <img src="/assets/book.png" alt="" className='w-full' /> */}
              <div>
                <h2 className='text-lg font-bold px-3 pt-2'>Book Donation</h2>
                <div className='text-xs font-bold tracking-wider flex gap-3 p-3 flex-wrap'>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>HTML</p>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>CSS</p>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>JS</p>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>ASP.NET</p>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>SQL</p>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>C#</p>
                </div>
              </div>
            </div>
            <div className='border-2 border-gray-400 dark:border-[#242424] rounded-md overflow-hidden md:w-3/12 md:my-5 my-10 hover:scale-105 duration-200 cursor-pointer'>
            <div className="relative">
                <img src="assets/courx.png" alt="" className='w-full' />
                <div className="group-hover:bg-gray-400 group-hover:bg-opacity-10 absolute top-0 w-full h-full hover:backdrop-filter hover:backdrop-blur-sm opacity-0 hover:opacity-100 duration-200">
                  <a href="https://github.com/warrior258/courx" target={'_blank'}>
                    <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-orange-300 text-[#242424] active:scale-90 duration-200 px-2 rounded-sm">View</button>
                  </a>
                </div>
              </div>
              
              <div>
                <h2 className='text-lg font-bold px-3 pt-2 text-'>Course Site</h2>
                <div className='text-xs font-bold tracking-wider flex gap-3 p-3 flex-wrap'>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>HTML</p>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>CSS</p>
                  <p className='border-2 px-2 rounded-sm bg-gray-200 text-[#242424] dark:bg-[#242424] dark:text-gray-200 dark:border-[#242424]'>JS</p>
                </div>
              </div> 
            </div>
          </div>
        </div>
  
        <div>
          <div className='flex flex-col items-center mb-10'>
            <h1 className='text-3xl font-bold mt-16 md:mb-8 mb-8 text-gray-200 dark:text-[#242424]'>Contact Me</h1>
            <form action={`https://getform.io/f/${import.meta.env.VITE_FORM}`} method="POST" className='flex flex-col gap-3'>
              <div className=''>
                <input type="text" name="name" placeholder='Your Name' className='outline-none bg-[#242424] border-2 border-gray-400 p-2 rounded-md text-gray-200 w-full caret-orange-300 focus:border-orange-300 dark:bg-gray-50 dark:text-[#242424]' required/>
              </div>
              <div className=''>
                <input type="email" name="email" placeholder='Your Email' className='outline-none bg-[#242424] border-2 border-gray-400 p-2 rounded-md text-gray-200 w-full caret-orange-300 focus:border-orange-300 dark:bg-gray-50 dark:text-[#242424]' required/>
              </div>
              <div className=''>
                <textarea name="message" id="" cols="30" rows="10" placeholder='Type your message...' className='outline-none bg-[#242424] border-2 border-gray-400 p-2 rounded-md text-gray-200 w-full caret-orange-300 focus:border-orange-300 dark:bg-gray-50 dark:text-[#242424]' required/>
                
              </div>
  
              <div className="text-center">
              <button className='bg-gray-200 text-[#242424] px-4 py-1 rounded-md shadow font-medium tracking-wide hover:bg-gray-300 duration-200 active:scale-90 dark:bg-[#242424] dark:text-gray-200'>Send Message</button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center p-2">
          <p className="text-zinc-600 text-sm dark:text-zinc-500">&#169; {new Date().getFullYear()} Vaibhav Bedi. All rights reserved.</p>
        </div>
      </div>      
      
    </div>
  )
}

export default App
