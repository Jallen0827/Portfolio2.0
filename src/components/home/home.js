import React, {useState} from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Tesla from '../../assets/Tesla.jpg'
import Zoey from '../../assets/Zoey.jpg'
import KarJus from '../../assets/KarJus.jpg'
import CSSCreature from '../../assets/CSS_Creature.JPG'
import StaticWeb from '../../assets/StaticWebsite.JPG'
import APIChallenge from '../../assets/API_Challenge.JPG'
import EmployeePortal from '../../assets/EmployeePortal.JPG'
import BadgeBrigade from '../../assets/BadgeBrigade.JPG'
import SwimVideos from '../../assets/SwimVideos.JPG'
import html from '../../assets/html.png'
import css from '../../assets/CSS.png'
import JS from '../../assets/JS.png'
import Node from '../../assets/Node.png'
import ReactLogo from '../../assets/react.png'
import Angular from '../../assets/angular.png'
import './home.css'



const Main = () => {
    
    const [mantra, setMantra] = useState(true);

    let mantraFade = () =>{
        let currentScrollPos = window.pageYOffset
        // console.log(window.innerHeight)
        // console.log(currentScrollPos)
        if (currentScrollPos < window.innerHeight/3){
            setMantra(true)
        }else{
            setMantra(false)
        }
        // console.log(mantra)
    }
    
    window.addEventListener("scroll", mantraFade);

    return (
        <div className='wrapper'>
        <div className='main'>
            <div className={mantra ? 'mantra': 'mantra-hide'}>
                <h1>JUNIOR</h1>
                <h1>SOFTWARE</h1>
                <h1>ENGINEER</h1>
            </div>
        </div>
        <div className='techPort'>
            <div className='backgroundImg'></div>
            <div className="techPort-text">
                <h1>The difference between genius and stupidity is; genius has its limits.</h1>
            </div>
        </div>
        <div className='aboutMeImg'>
            <img src={Tesla} alt='Tesla Img'/>
            <img src={Zoey} alt='Zoey Img'/>
        </div>
        <div className='aboutMe'>
            <div className='aboutMeText'>
                <h3>About Me</h3>
                <hr/>
                <p>Hi my name is Justin Allen. I am a JavaScript Developer welcoming all opportunities to advance my knowledge in JS development.</p> 
                <p>Prior to becoming a JS developer, I worked 5 years in Semi-conductor manufacturing where I helped develop a new memory node called 3D XPoint (See <a href="https://searchstorage.techtarget.com/definition/3D-XPoint" target='#_blank'>Link</a> for more details). These chips are now being used to create some of the worlds fastest SSDs. All Intel Optane products are using these chips. </p>
                <p>I have a B.S. in Mechanical Engineering and minor in Mathematics from Boise State University. I will also be graduating from Eleven Fifty Academy’s JavaScript Immersive Bootcamp in October 2019. 
                </p>
            </div>
            <img src={KarJus} alt='Kara and Justin Img'/>
        </div>
        <div className='techWrapper'>
            <div className='border'></div>
            <div className='techTitle'>
                <h2>TECHNICAL PORTFOLIO</h2>
                <h3>Samples of my work as a developer</h3>
            </div>
            <div className='techProjects1'>
                <img src={CSSCreature} alt='CSS Creature'/>
                <img src={StaticWeb} alt='Static Website'/>
                <img src={APIChallenge} alt='API Challenge '/>
            </div>
            <div className='techProjects2'>
                <img src={EmployeePortal} alt='Employee Portal'/>
                <img src={BadgeBrigade} alt='Badge Brigade'/>
                <img src={SwimVideos} alt='Swim Videos'/>
            </div>
        </div>
        <div className='skillWrapper'>
            <div>
                <h1>I am skilled </h1>
                <h1>in the following:</h1>
            </div>
            <div className='skillLogos'>
                <div>
                    <img src={html} alt='html logo'/>
                    <img src={css} alt='html logo'/>
                    <img src={JS} alt='html logo'/>
                </div>
                <div>
                    <img src={Node} alt='html logo'/>
                    <img src={ReactLogo} alt='html logo'/>
                    <img src={Angular} alt='html logo'/>
                </div>
            </div>
        </div>
        <div className='contact'>
            <div className='info'>
                <h4>CONTACT INFO:</h4>
                <p>Justin Allen</p>
                <p><i className="fas fa-map-pin"></i> Indianapolis, IN</p>
                <p><i className="fas fa-phone"></i>   (208)284-6758</p>
                <p><i className="fas fa-envelope"></i>  JustinAllen0827@gmail.com</p>
            </div>
            <div className='contactMe'>
                 <h4 className='contactMeText'>Contact Me:</h4>
                
                <form className='contactForm' acceptCharset="utf-8" action="https://formspree.io/JustinAllen0827@gmail.com" method="post">
                    <div className='form-group'>                        
                    <TextField className='contactInput' id="filled-basic" label="Your Name" variant="filled" />
                    <br/>
                    <br/>
                    <TextField className='contactInput' id="filled-basic" label="Your Email" variant="filled" />
                    <br/>
                    <br/>
                    <TextField
                    id="filled-basic"
                    className='contactInput'
                    multiline
                    rows="4"
                    label="Your Message"
                    variant="filled"
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" type='submit'>Submit</Button>
                    </div>
                </form>
            </div>
            <div className='connect'>
                    <h4>Connect:</h4>
                    
                    
                    <a href="https://www.linkedin.com/in/justin-allen-b9038354/" rel="noopener noreferrer" target='_blank'><p><i className="fab fa-linkedin"></i></p></a> 
                    <a href="https://github.com/Jallen0827" rel="noopener noreferrer" target="_blank"><p><i className="fab fa-github"></i></p></a>                    
                    
            </div>
        </div>
        <br/>
        <hr/>
    </div>
        
    )
}

export default Main
