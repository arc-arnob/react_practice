// Define a new Component here

const NavBar = () => {
    return (
        <h1>Nav Bar</h1>
    );
};

const MainContent = () => {
    return(
        <div>
            This is the body
        </div>
    )
}


ReactDOM.render(
    <div>
        <NavBar />
        <MainContent />
    </div>
    , document.getElementById("root"));