import React, { useState, useEffect } from 'react';

import Animation from '../../hoc/Animation/Animation';

import classes from './Testimonials.module.css';

const Testimonials = ({ data }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
			if(current + 1 < data.length)
                setCurrent(current + 1)
			else
                setCurrent(0)
        }, 10000);

        return () => clearInterval(interval);
    });
    
    return (
        <div className = { classes.Testimonials }>  
            <div className = { classes.Testimonial }>
                <Animation style = {{ width: '100%' }}><p className = { classes.Review }>“ { data[current].review } “</p></Animation>
                <Animation style = {{ width: '100%' }}><p className = { classes.Author }>{ data[current].author }</p></Animation>
            </div>

            <Animation>
                <div className = { classes.Selection }>
                    { data.map((_, index) => 
                        <button
                            className = { [classes.Select, current === index ? classes.Active : ''].join(' ') }
                            onClick = { () => setCurrent(index) }
                            key = { index } />) }
                </div>
            </Animation>
        </div>
    );
};

export default Testimonials;
