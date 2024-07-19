import React, { useState, useEffect, useRef } from 'react';
import './ChatBot.css';
import { FaRegMessage } from "react-icons/fa6";
const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [showChatbox, setShowChatbox] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const textareaRef = useRef(null);
    const chatboxMessageWrapperRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.addEventListener('input', handleTextareaInput);
        }
        return () => {
            if (textareaRef.current) {
                textareaRef.current.removeEventListener('input', handleTextareaInput);
            }
        };
    }, []);

    const handleTextareaInput = () => {
        const line = textareaRef.current.value.split('\n').length;
        textareaRef.current.rows = line < 6 ? line : 6;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid(message)) {
            writeMessage(message);
            setTimeout(autoReply, 1000);
        }
    };

    const isValid = (value) => {
        let text = value.replace(/\n/g, '').replace(/\s/g, '');
        return text.length > 0;
    };

    const writeMessage = (message) => {
        const today = new Date();
        setMessages([...messages, {
            type: 'sent',
            text: message.trim().replace(/\n/g, '<br>\n'),
            time: `${addZero(today.getHours())}:${addZero(today.getMinutes())}`
        }]);
        setMessage('');
        if (textareaRef.current) {
            textareaRef.current.rows = 1;
        }
        scrollBottom();
    };

    const autoReply = () => {
        const today = new Date();
        setMessages([...messages, {
            type: 'received',
            text: 'Thank you for your awesome support!',
            time: `${addZero(today.getHours())}:${addZero(today.getMinutes())}`
        }]);
        scrollBottom();
    };

    const addZero = (num) => {
        return num < 10 ? '0' + num : num;
    };

    const scrollBottom = () => {
        if (chatboxMessageWrapperRef.current) {
            chatboxMessageWrapperRef.current.scrollTo(0, chatboxMessageWrapperRef.current.scrollHeight);
        }
    };

    return (
        <div className="chatbox-wrapper z">
            <div className="chatbox-toggle" onClick={() => setShowChatbox(!showChatbox)}>
            <FaRegMessage />
            </div>
            <div className={`chatbox-message-wrapper ${showChatbox ? 'show' : ''}`}>
                <div className="chatbox-message-header">
                    <div className="chatbox-message-profile">
                        <img src="https://www.shutterstock.com/image-photo/car-purchase-rental-positive-young-600nw-2153842705.jpg" alt="" className="chatbox-message-image" />
                        <div>
                            <h4 className="chatbox-message-name">VehicleQuest</h4>
                            <p className="chatbox-message-status">online</p>
                        </div>
                    </div>
                    <div className="chatbox-message-dropdown">
                        <i className='bx bx-dots-vertical-rounded chatbox-message-dropdown-toggle' onClick={() => setDropdownOpen(!dropdownOpen)}></i>
                        <ul className={`chatbox-message-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">Report</a></li>
                        </ul>
                    </div>
                </div>
                <div className="chatbox-message-content" ref={chatboxMessageWrapperRef}>
                    {messages.length === 0 && <h4 className="chatbox-message-no-message">Do you need help?</h4>}
                    {messages.map((msg, index) => (
                        <div key={index} className={`chatbox-message-item ${msg.type}`}>
                            <span className="chatbox-message-item-text" dangerouslySetInnerHTML={{ __html: msg.text }}></span>
                            <span className="chatbox-message-item-time">{msg.time}</span>
                        </div>
                    ))}
                </div>
                <div className="chatbox-message-bottom">
                    <form className="chatbox-message-form" onSubmit={handleSubmit}>
                        <textarea
                            rows="1"
                            placeholder="Type message..."
                            className="chatbox-message-input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            ref={textareaRef}
                        ></textarea>
                        <button type="submit" className="chatbox-message-submit"><i className='bx bx-send'></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
