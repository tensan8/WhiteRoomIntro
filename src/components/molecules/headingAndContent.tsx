import React from 'react';

export interface HeadingAndContentProps {
    title?: string;
    content?: string;
}

const HeadingAndContent = ({
    title,
    content,
}: HeadingAndContentProps): React.ReactElement => {
    return (
        <div className="w-full text-dirty-black">
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
