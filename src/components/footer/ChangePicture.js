import React, { useState } from 'react'
import './ChangePicture.css'
import Image1 from '../../images/IMG_8.jpg'
import Image2 from '../../images/IMG_7.jpg'


const Changes = async() => {
    
  }

const Pictures = [Image1, Image2]


const ChangePicture = () => {
    const [picture, setPicture] = useState(Image1);

    const ChangeHandler = async() => {

        const response = await fetch("http://localhost:8080");
        const Change = await response.json();
        console.log(Change);
        console.log('This should happen');


        if (picture === Image1) {
            setPicture(Image2)
        }
        else {
            setPicture(Image1)
        }
    }

    return (
        <div className='Full'>
            <div data-testid={picture === Image1 ? "I1" : "I2"} className='change-picture'>
                <img src={picture} />
                <button onClick={ChangeHandler} className='change-btn'>Change Picture</button>
            </div>
        </div>
    )
}

export default ChangePicture