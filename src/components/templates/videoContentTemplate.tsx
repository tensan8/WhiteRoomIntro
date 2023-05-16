import React from 'react';
import HeroTitle from '../organism/heroTitle';
import BannerWithDescription from '../organism/bannerWithDescription';
import Footer from '../organism/footer';
import FooterContent from '../molecules/footerContent';
import { SingleVideoContentSchema } from '../../utils/singleVideoContentSchema';

interface VideoContentTemplateProps {
    bigVideoContent?: SingleVideoContentSchema;
    leftVideoContent?: SingleVideoContentSchema;
    rightVideoContent?: SingleVideoContentSchema;
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
                        youtubeUrl={
                            bigVideoContent?.Url != ''
                                ? bigVideoContent?.Url
                                : undefined
                        }
                        title={bigVideoContent?.Title}
                        content={bigVideoContent?.Content}
                    />
                </div>
                <div className="mt-56 grid grid-cols-2 gap-x-12">
                    <BannerWithDescription
                        youtubeUrl={
                            leftVideoContent?.Url != ''
                                ? leftVideoContent?.Url
                                : undefined
                        }
                        title={leftVideoContent?.Title}
                        content={leftVideoContent?.Content}
                        isLandscape={false}
                    />
                    <BannerWithDescription
                        youtubeUrl={
                            rightVideoContent?.Url != ''
                                ? rightVideoContent?.Url
                                : undefined
                        }
                        title={rightVideoContent?.Title}
                        content={rightVideoContent?.Content}
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
