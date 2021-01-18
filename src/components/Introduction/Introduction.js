import React from 'react';

import Line from '../UI/Line/Line';
import Animation from '../../hoc/Animation/Animation';

import classes from './Introduction.module.scss';

const introduction = ({ meta, main, description }) => {
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
                { meta && <Animation><h2 className = { classes.Meta }>{ meta }</h2></Animation> }

                <Animation>
                    <h1 className = { classes.Main }>{ main }</h1>
                    <Line color = '#B87332' />
                </Animation>

                { description && <Animation style = {{ width: '100%' }}><p className = { classes.Description }>{ splitDescription() }</p></Animation> }
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
