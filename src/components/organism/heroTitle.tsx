import React from 'react';
import Atropos from 'atropos/react';

const HeroTitle = (): React.ReactElement => {
    return (
        <Atropos className="w-fit mx-auto px-20 mt-36" data-atropos-offset="0">
            <div
                className="pl-4 pr-48 pb-4 pt-64 border-2 border-logo-black border-solid"
                data-atropos-offset="5"
            >
                <h1
                    className="w-32 text-5xl font-medium text-logo-black break-words tracking-widest"
                    data-atropos-offset="15"
                >
                    ALESANDRO
                </h1>
            </div>
            <div
                className="w-fit mx-auto text-logo-black pl-64 pt-1 font-semibold opacity-50"
                data-atropos-offset="5"
            >
                <p>Hover me!</p>
            </div>
        </Atropos>
    );
};

export default HeroTitle;
