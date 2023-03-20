import React from 'react';
import { Container } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './logo.svg';
import jetpackbg from './pictures/jetpackmf.jpg'
import './App.css';

function App() {
    // initialize AOS library
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="App">
            <Parallax bgImage={jetpackbg} strength={500}>
                <Container>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 data-aos="fade-up" data-aos-duration="1000">
                            Super Crazy Baby
                        </h1>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
                        >
                            Learn React
                        </a>
                    </header>
                </Container>
            </Parallax>
        </div>
    );
}

export default App;