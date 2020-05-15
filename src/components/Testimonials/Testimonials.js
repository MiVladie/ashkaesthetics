import React, { useState, useEffect } from 'react';

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
                <p className = { classes.Review }>“ { data[current].review } “</p>
                <p className = { classes.Author }>{ data[current].author }</p>
            </div>

            <div className = { classes.Selection }>
                { data.map((_, index) => 
                    <button
                        className = { [classes.Select, current === index ? classes.Active : ''].join(' ') }
                        onClick = { () => setCurrent(index) }
                        key = { index } />) }
            </div>
        </div>
    );
};

export default Testimonials;
