import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="left-content">
          <div className="w3s-image-wrapper">
            <a className="logo-link" href="#">
              <img className="w3s-logo" src={require('./images/channels4_profile.jpg')} />
            </a>
          </div>
          <nav className="nav-menu">
            <a href="#" className="nav-link ml">
              Tutorials
              <img className="down-arrow" src={require('./images/back-svgrepo-com.png')} alt="" />
            </a>
            <a href="#" className="nav-link ml">
              Exercises
              <img className="down-arrow" src={require('./images/back-svgrepo-com.png')} alt="" />
            </a>
            <a href="#" className="nav-link ml">
              Certificates
              <img className="down-arrow" src={require('./images/back-svgrepo-com.png')} alt="" />
            </a>
            <a href="#" className="nav-link ml">
              Services
              <img className="down-arrow" src={require('./images/back-svgrepo-com.png')} alt="" />
            </a>
          </nav>
          <div className="search-input-wrapper">
            <input className="search-input" type="search" placeholder="Search..." />
            <div className="search-icon-wrapper">
              <img className="search-icon" src={require('./images/search-svgrepo-com.png')} alt="" />
            </div>
          </div>
          <div className="l-d-mode-wrapper">
            <img className="l-d-mode" src={require('./images/dark-theme-svgrepo-com.png')} alt="" />
          </div>
        </div>
        <div className="right-content">
          <div className="plus-item-wrapper">
            <a className="plus-item item" href="#">
              <img className="plus-item-logo logo-item" src={require('./images/stars-svgrepo-com.png')} alt="" />
              Plus
            </a>
          </div>
          <div className="spaces-item-wrapper ml2">
            <a className="spaces-item item" href="#">
              <img className="spaces-item-logo logo-item" src={require('./images/code-svgrepo-com.png')} alt="" />
              Spaces
            </a>
          </div>
          <div className="certified-item-wrapper ml2">
            <a className="certified-item item" href="#">
              <img className="certificate-logo logo-item" src={require('./images/shop-cart-svgrepo-com.png')} alt="" />
              Get Certified
            </a>
          </div>
          <div className="sign-log-link-wrapper">
            <div className="sign">
              <a className="sign-link ml3" href="#">Sign Up</a>
            </div>
            <div className="log">
              <a className="log-link" href="#">Log in</a>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div class="scrollmenu">
          <a href="#">HTML</a>
          <a href="#">CSS</a>
          <a href="#">JAVASCRIPT</a>
          <a href="#">SQL</a>
          <a href="#">PYTHON</a>
          <a href="#">JAVA</a>
          <a href="#">PHP</a>  
          <a href="#">HOW TO</a>
          <a href="#">W3.CSS</a>
          <a href="#">C</a>
          <a href="#">C++</a>
          <a href="#">C#</a>
          <a href="#">BOOTSTRAP</a>
          <a href="#">REACT</a>
          <a href="#">MYSQL</a> 
          <a href="#">JQUARY</a>
          <a href="#">EXCEL</a>
          <a href="#">XML</a>
          <a href="#">DJANGO</a>
          <a href="#">NUMPY</a>
          <a href="#">PANDAS</a>
          <a href="#">NODEJS</a>  
          <a href="#">R</a>
          <a href="#">TYPESCRIPT</a>
          <a href="#">ANGULAR</a>
          <a href="#">GIT</a>
          <a href="#">POSTGRESQL</a>
          <a href="#">MONGODB</a>
          <a href="#">ASP</a>
          <a href="#">AI</a>
          <a href="#">GO</a>
          <a href="#">KOTLIN</a>  
          <a href="#">SASS</a>
          <a href="#">VUE</a>
          <a href="#">DSA</a>
          <a href="#">GEN AI</a>
          <a href="#">SCIPY</a>
          <a href="#">AWS</a>
          <a href="#">CYBERSECURITY</a>
          <a href="#">DATA SCIENCE</a>
        </div>
        <div className="first-content">
          <h1 className="first-title">Learn to Code</h1>
          <h3 className="introduction">With the world's largest web developer site.</h3>
          <div className="input-div-wrapper">
            <input className="tutorials-search" type="search" placeholder="Search our tutorials, e.g. HTML" />
            <div className="tutorials-search-icon-wrapper">
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff" className="tutorial-search-icon"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
          </div>
          <a className="roadmap-link" href="#">Not Sure Where To Begin?</a>
        </div>
        <div className="shape-wrapper">
          <img src={require('./images/wave.png')} className="shape" alt="" />
        </div>
      </main>
      <div className="continue-main-one">
        <section className="left-content">
          <h1 className="left-content-title avg-style-title">HTML</h1>
          <p className="left-content-introduction avg-style-introduction">The language for building web pages</p>
          <a className="html-learn-link avg-style-link" href="#">Learn HTML</a>
          <br />
          <a className="html-video-link avg-style-link" href="#">Video Tutorial</a>
          <br />
          <a className="html-reference-link avg-style-link" href="#">HTML References</a>
          <br />
          <a className="html-get-certified avg-style-link" href="#">Get Certified</a>
        </section>
        <section className="right-content">
          <div className="code-board-wrapper avg-style-codeBoard">
            <h3 className="html-board-title">HTML Example:</h3>
            <div className="general-code-boarder avg-style-general-codeBoard"> 
              <div className="code-space-wrapper">
                <span className="doctype-html-code-wrapper">
                  <span className="doctype-html-code brw-cl">!DOCTYPE</span>
                  <span className="html-code"> html</span>
                </span>
                <br />
                <span className="html-open-tag-code-wrapper brw-cl bs">
                  html
                </span>
                <br />
                <span className="heade-open-tag-code-wrapper brw-cl bs">
                  heade
                </span>
                <br />
                <span className="title-open-tag-code-wrapper brw-cl bs">
                  title
                </span>
                HTML Tutorial
                <span className="title-close-tag-code-wrapper brw-cl bs">
                  /title
                </span>
                <br />
                <span className="head-close-tag-code-wrapper brw-cl bs">
                  /head
                </span>
                <br />
                <span className="body-open-tag-code-wrapper brw-cl bs">
                  body
                </span>
                <br />
                <br />
                <span className="h1-open-tag-code-wrapper brw-cl bs">
                  h1
                </span>
                <span className="h1-tag-code-content">
                  This is a heading
                </span>
                <span className="h1-close-tag-code-wrapper brw-cl bs">
                  /h1
                </span>
                <br />
                <span className="p-tag-code-wrapper brw-cl bs">
                  p
                </span>
                <span className="p-tag-code-content">
                  This is a paragraph.
                </span>
                <span className="p-close-tag-code-wrapper brw-cl bs">
                  /p
                </span>
                <br />
                <br />
                <span className="body-close-tag-code-wrapper brw-cl bs">
                  /body
                </span>
                <br />
                <span className="html-close-tag-code-wrapper brw-cl bs">
                  /html
                </span>
              </div> 
            </div>
            <a className="try-it-link" href="#">Try it Yourself</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
