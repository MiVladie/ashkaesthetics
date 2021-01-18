import React, { useState } from 'react';

import Animation from '../../../hoc/Animation/Animation';

import classes from './Catalog.module.scss';

const Catalog = ({ data, maxVisible, expandText, collapseText, linkTo, linkText }) => {
    const [expand, setExpand] = useState(false);

    const timeConverter = (time) => {
        let result = '';
        
        if(Math.trunc(time / 60) > 0) 
            result += Math.floor(time / 60) + ' hour';

        if(Math.trunc(time / 60) > 1)
            result += 's';

        if(result !== '')
            result += ' ';

        if(time % 60 !== 0)
            result += time % 60 + ' min';

        return result;
    };

    const itemsList = () => {
        let list = data.map(item =>
            <li className = { classes.Item } key = { item.name }>
                <Animation>
                    <div className = { classes.Line }>
                        <p className = { classes.Name }>{ item.name }</p>
                        <p className = { classes.Price }>{ item.oldPrice && <span className = { classes.Discounted }>£{ item.oldPrice }</span> } £{ item.price }</p>
                    </div>
        
                    { item.time && <p className = { classes.Description }>{ timeConverter(item.time) }</p> }
                    { item.oldPrice && !item.time && <p className = { classes.Description }>save up to { 100 - (100 / item.oldPrice * item.price).toFixed(0) }%</p> }
                </Animation>
            </li>)
    
        if(expand) list.length = data.length;
        else list.length = maxVisible;

        return list;
    };
 
    return (
        <div className = { classes.Catalog }>
            <ul className = { classes.List }>
                { itemsList() }
            </ul>
             
            <Animation>
                <div className = { classes.Options }>
                    { maxVisible && maxVisible < data.length && <button
                        className = { classes.Button }
                        onClick = { () => setExpand(!expand) }>
                        { expand ? collapseText : expandText }
                    </button> }
                    
                    { linkTo && 
                        <a
                            className = { classes.Link }
                            href = { linkTo }
                            target = '_blank'
                            rel = 'noopener noreferrer'>
                            { linkText }
                        </a> }
                </div>
            </Animation> 
        </div>
    )
};

export default Catalog;
