import './App.css';

function App() {
  return (
    <div className="relative flex flex-col mx-auto w-fit h-fit bg-[#282D35] rounded-md mt-8 overflow-hidden">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
      <BgLogo />
    </div>
  );
}

function Logo() {
  return (
    <img src="./logo512.png"  alt="logo" height="28px" width="28px"/>
  )
}

function BgLogo() {
  return (
    <div className='absolute -right-32 top-44'>
      <img src="/images/bg-logo.svg"  alt="bg_logo"/>
    </div>
  )
}

function Header() {
  return (
    <nav className='flex justify-between space-x-20 items-center bg-[#21222A] px-6 py-8 rounded-t-md'>
      <div className="flex space-x-2 items-center">
        <Logo />
        <p className="text-[#61DAFB] font-bold text-2xl">ReactFacts</p>
      </div>
      <p className="flex text-white font-semibold text-base align justify-end min-w-[259px]">React Course - Project 1</p>
    </nav>
  )
}

function Body() {
  return(
    <div className="flex flex-col space-y-16 text-white pl-6 pr-24 py-14">
      <h1 className="text-4xl font-bold">Fun facts about React</h1>
      <Points />
    </div>
  )
}

function Points() {
  const points = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 100K stars on GitHub",
    "Is maintained by Facebook",
    "Powers thousands of enterprise apps, including mobile apps",
  ]
  return (
    <ul classNam="list-disc">
      {
        points.map(ele => {
          return(
            <li className="text-white mb-4 flex items-center text-base font-semibold"><span className='bg-[#61DAFB] h-2 w-2 rounded-full mr-2'></span>{ele}</li>
          )
        })
      }
    </ul> 
  )
}
function Footer() {
  return (
    <p className='text-xs text-white px-6'>
      © 2022 Arnob Chowdhury. All rights reserved
    </p>
  )
}

export default App;
