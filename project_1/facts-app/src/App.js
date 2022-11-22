import './App.css';

function App() {
  return (
    <div className="flex flex-col">
      {/* Logo */}
      <Logo />
      {/* Header */}
      <Header />
      {/* Points */}
      <Points />
      {/* Footer */}
      <Footer />
     
    </div>
  );
}

function Logo() {
  return (
    <img src="./logo512.png"  alt="logo" height="80px" width="80px"/>
  )
}

function Header() {
  return (
    <h1 className='text-3xl font-bold'>
      Reasons I'm exicted to learn React
    </h1>
  )
}

function Points() {
  const points = [
    "It's a popular library",
    "More likely to get a job as a Developer"
  ]
  return (
    <ol>
      {
        points.map(ele => {
          return(
            <li>{ele}</li>
          )
        })
      }
    </ol> 
  )
}
function Footer() {
  return (
    <p className='text-xs'>
      © 2022 Arnob Chowdhury. All rights reserved
    </p>
  )
}

export default App;
