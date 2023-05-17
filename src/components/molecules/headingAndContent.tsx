import React from 'react';
import { useParallax } from 'react-scroll-parallax';

export interface HeadingAndContentProps {
    title?: string;
    content?: string;
    parallaxOptions?: { [key: string]: string | number | number[] | boolean };
}

const HeadingAndContent = ({
    title,
    content,
    parallaxOptions,
}: HeadingAndContentProps): React.ReactElement => {
    const { ref } = useParallax<HTMLDivElement>({
        translateY: [40, 0],
        opacity: [0, 1],
        speed: -20,
        ...parallaxOptions,
    });

    return (
        <div className="w-full text-dirty-black" ref={ref}>
            <h2 className="text-2xl font-semibold tracking-widest break-words">
                {title}
            </h2>
            <p className="text-sm mt-2 break-words">{content}</p>
        </div>
    );
};

HeadingAndContent.defaultProps = {
    title: 'Insert Title',
    content: 'Insert Content',
};

export default HeadingAndContent;
