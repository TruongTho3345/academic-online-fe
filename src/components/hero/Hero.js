import React from 'react'
import "./HeroStyles.css"
import {AiOutlineSearch} from 'react-icons/ai'
import Video from '../../assets/bg-video.mp4'

const Hero = () => {
  return (
    <div className="hero">
        <div class="video-container">
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
        </div>

        <div className="content">
                <h1>Academic Online</h1>
                <form className="form">
                    <div className="form-left">
                        <div>
                            <button><AiOutlineSearch className='icon'/></button>
                        </div>
                        <div>
                            <input type="text" placeholder='Search' />
                        </div>
                    </div>

                    <div className="form-right">
                        <select className="form-select">
                            <option value="1">Search by Name</option>
                            <option value="1">Rank by Concepts</option>
                            <option value="1">Compare by Concepts</option>
                        </select>
                    </div>
                </form>

                <div className="fields">
                    <h2>Field:</h2>
                    <select className="fields-select">
                        <option value="1">Computer Science</option>
                        <option value="1">Electrical Engineering</option>
                        <option value="1">Economics</option>
                        <option value="1">Sociology</option>
                        <option value="1">Physics</option>
                        <option value="1">Mathematics</option>
                        <option value="1">Chemistry</option>
                    </select>
                </div>

            </div>
    </div>
  )
}

export default Hero