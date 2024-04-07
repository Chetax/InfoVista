import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import { Button, Typography } from '@mui/material';

function Homepage() {
    const navigate = useNavigate();

    // Define a function to handle button click
    const handleButtonClick = () => {
        navigate('/signup'); // Navigate to '/signup' route when button is clicked
    };

    return (
        <>
            <div className='container p-1'>
                <nav className="navbar navbar-expand-xl">
                    <div className="container-fluid">
                        <img src={logo} style={{ height: "50px" }} className='streamyardimg' />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation sm:display-none">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-2">
                                    <a className="nav-link active" aria-current="page" href="/signin" style={{ fontSize: "18px" }}>Login</a>
                                </li>
                                <li className="nav-item mx-2">
                                          <button type="button" onClick={handleButtonClick} className="btn btn-primary" id="getStartedbtn" style={{ fontSize: "18px" }}>Get Started</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Middle Text the esaist way/.... --> */}
  <div class="container mt-5  pt:2 text-center 	">
    <Typography class="d-none d-lg-block" style={{fontSize:"45px",fontWeight:"bold" }}>Stay Informed with Infovista:<br/>Your Go-To News Destination for Latest Updates!</Typography>
    <Typography class="d-none d-lg-none d-md-block" style={{fontSize:"35px",fontWeight:"bold" }}>Stay Informed with Infovista:Your Go-To News Destination for Latest Updates!</Typography>
    <Typography class="d-none d-md-none d-sm-block" style={{fontSize:"32px",fontWeight:"bold" }}>Stay Informed with Infovista:Your Go-To News Destination for Latest Updates!</Typography>
    <Typography class="d-sm-none d-block" style={{fontSize:"32px",fontWeight:"bold" }}>Stay Informed with Infovista:Your Go-To News Destination for Latest Updates!
    </Typography>
  </div>
  <div class="container mt-5 text-center 	">
    <p class=" fw-semibold  d-none d-lg-block " style={{ fontSize:"20px"}}>Experience real-time, worldwide news on Infovista   our React-powered platform ensures lightning-fast updates. <br/>Engage with user-generated content, interact through likes, comments, and profiles.</p>
    <p class=" fw-semibold d-none d-lg-none d-md-block" style={{ fontSize:"20px"}}>Experience real-time, worldwide news on Infovista  our React-powered platform ensures lightning-fast updates. <br/>Engage with user-generated content, interact through likes, comments, and profiles.</p>
    <p class=" fw-semibold d-none d-md-none d-sm-block" style={{ fontSize:"20px"}}>Experience real-time, worldwide news on Infovista our React-powered platform ensures lightning-fast updates. <br/>Engage with user-generated content, interact through likes, comments, and profiles.</p>
    <p class=" fw-semibold  d-sm-none d-block" style={{ fontSize:"20px"}}>Experience real-time, worldwide news on Infovista our React-powered platform ensures lightning-fast updates. Engage with user-generated content, interact through likes, comments, and profiles.</p>
  </div>
  <div class="container text-center mt-5 ">
  <button className='btn btn-primary' style={{height:"50px",fontSize:"18px"}}>Get started - it's free!</button>
    </div>
        </>
    );
}

export default Homepage;
