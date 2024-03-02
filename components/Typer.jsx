
import React, { useState, useEffect } from 'react';

const Typer = ({ text, first, handleType }) => {
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const typeWriter = async () => {
            // setIsTyping(true);
            for (let i = 0; i < text.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 15));
                setTypedText(text.substring(0, i + 1));
                if (handleType) handleType()
            }
            if (first) {
                first(true)
            }
        };

        typeWriter();
    }, [text]);

    return (
        <div className="typewriter">
            <span>
                {typedText}
            </span>
        </div>
    );
};

export default Typer;