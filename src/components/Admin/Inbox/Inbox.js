import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Introduction from '../../Introduction/Introduction';
import Preview from './Preview/Preview';
import Message from './Message/Message';
import Spinner from '../../UI/Spinner/Spinner';
import { BACKEND_DOMAIN } from '../../../config/constants';

const Inbox = () => {
    const [expandKey, setExpandKey] = useState();
    const [messages, setMessages] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = () => {
        setLoading(true);

        let url = BACKEND_DOMAIN + 'admin/ashkaesthetics/messages';
        let token = localStorage.getItem('token');
        
        axios.get(url, { headers: { Authorization: 'Bearer ' + token } })
          .then(response => {
            setMessages(response.data.messages);
            setLoading(false);
          })
          .catch(error => {
            console.log(error.response);
            setLoading(false);
          })
    }
    
    const expandCollapseHandler = (key) => {
        setExpandKey(key);
    }

    const removeKeyHandler = (key) => {
      setLoading(true);
      
      let url = BACKEND_DOMAIN + 'admin/ashkaesthetics/messages/';
      let token = localStorage.getItem('token');
        
      axios.delete(url + key, { headers: { Authorization: 'Bearer ' + token } })
        .then(response => {
          setExpandKey(null);
          fetchMessages();
        })
        .catch(error => {
          console.log(error.response);
          setLoading(false);
        })
    }

    return (
    	<React.Fragment>
        { 
          loading ? <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spinner /></div> : 
            !expandKey
            ? <React.Fragment>
                <Introduction
                  main = { messages == null ? 'No new messages!' : 'Incoming messages' } />                
                <Preview 
                  messages = { messages } 
                  expand = { expandCollapseHandler } />
              </React.Fragment>
            : <React.Fragment>
                <Introduction
                  main = 'Incoming messages' />
                <Message 
                  message = { messages[expandKey] } 
                  back = { () => expandCollapseHandler(null) } 
                  remove = { () => removeKeyHandler(expandKey) } />
              </React.Fragment>
        }
      </React.Fragment>
    );
}

export default Inbox;
