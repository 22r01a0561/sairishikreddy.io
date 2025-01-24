import React from "react";

const ContactBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-bg-dark to-transparent"/>
        </div>
    );
};

export default ContactBackground;
