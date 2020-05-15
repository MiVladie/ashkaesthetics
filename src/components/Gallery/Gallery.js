import React, { useState } from 'react';

import close from '../../assets/icons/close.png';

import classes from './Gallery.module.css';

const Gallery = ({ data }) => {
    const [expand, setExpand] = useState(null);

    const closeModal = (element) => {
        if(element === document.getElementsByClassName(classes.Modal)[0]) {
            document.body.style.overflow = 'auto';
            setExpand(null);
        }
    };

    const openModal = () => {
        if(expand != null) {
            document.body.style.overflow = 'hidden';

            return (      
                <React.Fragment>
                    <div className = { classes.Modal } onClick = { (event) => closeModal(event.target) }>
                        <div className = { classes.Wrapper }>
                            <img src = { expand } alt = 'Beauty Salon Zoomed' />
                            <div className = { classes.Close } onClick = { () => closeModal(document.getElementsByClassName(classes.Modal)[0]) }>
                                <img src = { close } alt = 'Beauty Salon Close' />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            return null;
        } 
    };

    return (
        <div className = { classes.Gallery }>
            { data.map((picture, index) =>
                <div className = { classes.Picture } key = { index }>
                    <img className = { classes.Image } src = { picture.image } alt = { picture.alt } />
                    <div className = { classes.Expand } onClick = { () => setExpand(picture.image) }>Click to expand</div>
                </div>) }

            { openModal() }
        </div>
    )
};

export default Gallery;
