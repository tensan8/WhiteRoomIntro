import React from 'react';
import HeadingAndContent, {
    HeadingAndContentProps,
} from '../molecules/headingAndContent';

export interface BannerWithContentProps extends HeadingAndContentProps {
    youtubeUrl?: string;
    isLandscape?: boolean;
}

const BannerWithDescription = ({
    title,
    content,
    youtubeUrl,
    isLandscape,
    textParallaxOptions,
}: BannerWithContentProps) => {
    return isLandscape ? (
        <div className="flex w-full">
            <iframe src={youtubeUrl} className="w-3/5 h-96 rounded-sm"></iframe>
            <div className="ml-10 my-5 w-2/5">
                <HeadingAndContent
                    title={title}
                    content={content}
                    textParallaxOptions={textParallaxOptions}
                />
            </div>
        </div>
    ) : (
        <div className="w-full flex flex-col">
            <iframe
                src={youtubeUrl}
                className="w-full h-96 rounded-sm"
            ></iframe>
            <div className="w-full pr-20 my-7">
                <HeadingAndContent
                    title={title}
                    content={content}
                    textParallaxOptions={textParallaxOptions}
                />
            </div>
        </div>
    );
};

BannerWithDescription.defaultProps = {
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isLandscape: true,
};

export default BannerWithDescription;
