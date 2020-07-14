import React, { useState } from 'react';

import Animation from '../../hoc/Animation/Animation';

import classes from './Gallery.module.css';

const Gallery = ({ data }) => {
    const [picture, setPicture] = useState(null);

    const openModal = (index) => {
        document.body.style.overflow = 'hidden';
        setPicture(index);
    };

    const closeModal = (element) => {
        if(element === document.getElementsByClassName(classes.Modal)[0]) {
            document.body.style.overflow = 'auto';
            setPicture(null);
        }
    };

    const previousPictureHandler = () => {
        if(picture - 1 >= 0)
            setPicture(picture - 1);
        else
            setPicture(data.length - 1);
    };

    const nextPictureHandler = () => {
        if(picture + 1 < data.length)
            setPicture(picture + 1);
        else
            setPicture(0);
    };

    return (
        <div className = { classes.Gallery }>
            { data.map((picture, index) =>
                <div className = { classes.Picture } key = { index }>
                    <Animation style = {{ margin: '0' }}><img className = { classes.Image } src = { picture.image } alt = { picture.alt } /></Animation>
                    <div className = { classes.Expand } onClick = { () => openModal(index) }>Click to expand</div>
                </div>) }

            { picture != null &&
                <div className = { classes.Modal } onClick = { (event) => closeModal(event.target) }>
                    <div className = { classes.Wrapper }>
                        <button className = { classes.Previous } onClick = { previousPictureHandler }><i/></button>
                        <button className = { classes.Close } onClick = { () => closeModal(document.getElementsByClassName(classes.Modal)[0]) }><i className = { classes.Icon }/></button>
                        <img src = { data[picture].image } alt = 'Beauty Salon Zoomed' />
                        <button className = { classes.Next } onClick = { nextPictureHandler }><i/></button>
                    </div>
                </div> }
        </div>
    )
};

export default Gallery;
