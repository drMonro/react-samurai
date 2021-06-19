import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="http://cdn.onlinewebfonts.com/svg/img_176857.png" alt="" width="50px" height="50px"/>
            </header>
            <nav className="navigation">
                <ul className="navigation-list">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
            <section className="content">
                <div className="content-bgc-img">
                    <img src="https://million-wallpapers.ru/wallpapers/4/14/17345193607846010880/ozero-potajnoe.jpg" alt=""/>
                </div>
                <div>
                    ava + descr
                </div>
                <div>
                    <p>My posts</p>
                    <form>
                        <p><input type="text-area"/></p>;
                        <button type="submit">Send</button>
                    </form>
                    <ul>
                        <li>Hey!</li>
                        <li>What's up</li>
                        <li>Peace!</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default App;
