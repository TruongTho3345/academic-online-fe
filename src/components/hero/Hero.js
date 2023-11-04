import React, { useState } from 'react'
import "./HeroStyles.css"
import {AiOutlinePlusCircle, AiOutlineSearch} from 'react-icons/ai'
import Video from '../../assets/bg-video.mp4'
import FacultyLogo from '../../assets/faculty.svg'

const Hero = () => {
    const [selectedOption, setSelectedOption] = useState('Search by Name'); // Initialize the selected option
    const [additionalForms, setAdditionalForms] = useState([0]);
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
      setAdditionalForms([0]); // Reset the additional forms when the option changes
    };
  
    const handleAddForm = () => {
        if (additionalForms.length < 4) { //Compare less than 4 faculty
            setAdditionalForms((forms) => [...forms, forms.length]);
        }
    };
  
    return (
        <div className="hero">
            <div class="hero__video-container">
                <video autoPlay loop muted id='video'>
                    <source src={Video} type='video/mp4' />
                </video>
            </div>

            <div className="hero__content">
                    <h1 className="hero__title">Academic Online</h1>
                    <form className="hero__form">
                        <div className="hero__form-left">
                            <div>
                                <button><AiOutlineSearch className='icon'/></button>
                            </div>
                            <div>
                                <input type="text" placeholder='Search' />
                            </div>
                        </div>

                        <div className="hero__form-right">
                            <select className="hero__form-select" 
                                value={selectedOption}
                                onChange={handleSelectChange}>
                                
                                <option value="search">Search by Name</option>
                                <option value="rank">Rank by Concepts</option>
                                <option value="compare">Compare by Concepts</option>
                            </select>
                        </div>
                    </form>

                    {selectedOption === 'compare' && (
                        <div className="hero__additional-form">
                            {additionalForms.map((index) => (
                                <form key={index} className="form hero__additional-form">
                                    <div className="form__container">
                                        <img src={FacultyLogo} alt="Faculty logo"/>
                                        <input type="text" placeholder="Faculty name" />
                                    </div>
                                </form>
                            ))}
                            <button onClick={handleAddForm}>
                                <AiOutlinePlusCircle className="icon" />
                            </button>
                        </div>
                    )}

                    <div className="hero__fields">
                        <h2 className="hero__fields-title">Field:</h2>
                        <select className="hero__fields-select">
                            <option value="comp">Computer Science</option>
                            <option value="elec">Electrical Engineering</option>
                            <option value="econ">Economics</option>
                            <option value="soci">Sociology</option>
                            <option value="phys">Physics</option>
                            <option value="math">Mathematics</option>
                            <option value="chem">Chemistry</option>
                        </select>
                    </div>

                </div>
        </div>
    )
}

export default Hero