import React from 'react';

import Line from '../UI/Line/Line';

import classes from './Introduction.module.css';

const introduction = ({ id, meta, main, description }) => {
    const splitDescription = () => {
        return description = ("" + description).split('\n').flatMap((value, index, array) =>
            array.length - 1 !== index
                ? [value, <React.Fragment key = { index }><br/><br/></React.Fragment>]
                : value,
            );
    };

    return (
        <div className = { classes.Introduction }>
            <div className = { classes.Wrapper }>
                { meta && <h2 className = { classes.Meta }>{ meta }</h2> }
                <h1 className = { classes.Main }>{ main }</h1>

                <Line color = '#B8925D' />
                
                { description && <p className = { classes.Description }>{ splitDescription() }</p> }
            </div>
        </div>
    )
};

export default introduction;

/*

  <Introduction
    meta = 'Efficitur'
    main = 'Mauris rhoncus'
    description = { ['Fusce odio nunc, aliquam vitae vehicula non, porta vitae est. Sed consectetur, lectus sed consectetur aliquet,\ntortor velit sollicitudin eros, sit amet dictum tortor ex nec diam.'] } />

*/
