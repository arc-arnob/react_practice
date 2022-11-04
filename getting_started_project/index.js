// Define a new Component here

const NavBar = () => {
    return (
        <nav>
            <h1>React Facts</h1>
            <ul>
                <li>
                    Pricing
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    );
};

const MainContent = () => {
    return (
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