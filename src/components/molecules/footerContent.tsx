import React from 'react';
import { TbBrandLinkedin, TbBrandNotion } from 'react-icons/tb';
import { IconContext } from 'react-icons';

const FooterContent = (): React.ReactElement => {
    return (
        <div className="text-white absolute left-40 bottom-72 leading-loose">
            <h2 className="text-2xl font-bold tracking-wider leading-relaxed">
                Are you up for a coffee talk?
                <br />
                Let's connect!
            </h2>
            <p className="mt-3">
                <a
                    href="mailto:tensanf@gmail.com"
                    className="w-fit tracking-widest"
                >
                    tensanf@gmail.com
                </a>
            </p>
            <p>
                <a
                    href="https://wa.me/6282154244142"
                    className="w-fit tracking-widest"
                >
                    (+62) 821-5424-4124
                </a>
            </p>
            <IconContext.Provider value={{ size: '3rem' }}>
                <div className="grid grid-cols-2 gap-3 w-fit ml-[-0.3rem] mt-8">
                    <a
                        href="https://www.linkedin.com/in/alesandro-michael-ferdinand/"
                        className="w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TbBrandLinkedin />
                    </a>
                    <a
                        href="https://alesandromferdinand.notion.site/Alesandro-s-Portfolio-74b44b5ae731415faa0b51a6b3025560"
                        className="w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TbBrandNotion />
                    </a>
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default FooterContent;
