import React, { PropsWithChildren } from 'react';

const Footer = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
        <div className="block">
            <div className="h-screen w-screen mt-56 bg-gradient-to-t from-logo-black to-transparent"></div>
            <div className="h-screen bg-logo-black relative">{children}</div>
        </div>
    );
};

export default Footer;
