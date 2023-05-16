import React from 'react';
import HeroTitle from '../organism/heroTitle';
import BannerWithDescription from '../organism/bannerWithDescription';
import Footer from '../organism/footer';
import FooterContent from '../molecules/footerContent';

type VideoContent = {
    videoUrl: string;
    videoTitle: string;
    videoDescription: string;
};

interface VideoContentTemplateProps {
    bigVideoContent?: VideoContent;
    leftVideoContent?: VideoContent;
    rightVideoContent?: VideoContent;
}

const VideoContentTemplate = ({
    bigVideoContent,
    leftVideoContent,
    rightVideoContent,
}: VideoContentTemplateProps): React.ReactElement => {
    return (
        <div className="flex flex-col">
            <div className="w-screen px-40 mb-40">
                <HeroTitle />
                <div className="mt-56">
                    <BannerWithDescription
                        youtubeUrl={bigVideoContent?.videoUrl}
                        title={bigVideoContent?.videoTitle}
                        content={bigVideoContent?.videoDescription}
                    />
                </div>
                <div className="mt-56 grid grid-cols-2 gap-x-12">
                    <BannerWithDescription
                        youtubeUrl={leftVideoContent?.videoUrl}
                        title={leftVideoContent?.videoTitle}
                        content={leftVideoContent?.videoDescription}
                        isLandscape={false}
                    />
                    <BannerWithDescription
                        youtubeUrl={rightVideoContent?.videoUrl}
                        title={rightVideoContent?.videoTitle}
                        content={rightVideoContent?.videoDescription}
                        isLandscape={false}
                    />
                </div>
            </div>
            <Footer>
                <FooterContent />
            </Footer>
        </div>
    );
};

export default VideoContentTemplate;
