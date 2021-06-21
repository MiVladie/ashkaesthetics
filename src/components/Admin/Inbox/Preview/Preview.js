import React from 'react';

import classes from './Preview.module.scss';

const correctDate = (value) => {
    let [date, time] = value.split(' ');

    let [day, month, year] = date.split('/');

    date = `${year}/${month}/${day}`;

    return date + ' ' + time
}

const preview = ({ messages, expand }) => {    
    if(messages == null)
        return null;

    return (
    	<section className = { classes.Preview }>
            <div className = { classes.Meta }>
                <h3 className = { classes.Description }>Name</h3>
                <h3 className = { classes.Description }>Contact</h3>
                <h3 className = { classes.Description }>Message</h3>
                <h3 className = { classes.Description }>Date</h3>
            </div>

            { Object.keys(messages).reverse().map((message, index) => {
                    let name = messages[message].name;
                    let contact = messages[message].email;
                    let text = messages[message].message.substring(0, 35);
                    let date = correctDate(messages[message].time);

                    return (
                        <div className = { classes.Message } onClick = { () => expand(message) } key = { index }>
                            <div className = { classes.Info }><p className = { classes.Text }>{ name }</p></div>
                            <div className = { classes.Info }><p className = { classes.Text }>{ contact }</p></div>
                            <div className = { classes.Info }><p className = { classes.Text }>{ text }</p></div>
                            <div className = { classes.Info }><p className = { classes.Text }>{ new Date(date).toLocaleString('en-UK', { dateStyle: 'long', timeStyle: 'short' }) }</p></div>
                        </div>
                    );
                })
            }

        <p className = { classes.Total }>Total messages: { Object.keys(messages).length }</p>
    </section>
    );
}

export default preview;
