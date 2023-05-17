import React from 'react';
import HeroTitle from '../organism/heroTitle';
import BannerWithDescription from '../organism/bannerWithDescription';
import Footer from '../organism/footer';
import FooterContent from '../molecules/footerContent';
import { SingleVideoContentSchema } from '../../utils/singleVideoContentSchema';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

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
                <ParallaxProvider>
                    <div className="mt-96">
                        <Parallax
                            translateY={[40, 0]}
                            opacity={[0, 1]}
                            startScroll={0}
                            endScroll={600}
                        >
                            <BannerWithDescription
                                youtubeUrl={
                                    bigVideoContent?.Url != ''
                                        ? bigVideoContent?.Url
                                        : undefined
                                }
                                title={bigVideoContent?.Title}
                                content={bigVideoContent?.Content}
                                textParallaxOptions={{
                                    startScroll: 500,
                                    endScroll: 700,
                                }}
                            />
                        </Parallax>
                    </div>
                    <div className="mt-96 grid grid-cols-2 gap-x-12">
                        <Parallax
                            translateY={[40, 0]}
                            opacity={[0, 1]}
                            startScroll={1000}
                            endScroll={1500}
                        >
                            <BannerWithDescription
                                youtubeUrl={
                                    leftVideoContent?.Url != ''
                                        ? leftVideoContent?.Url
                                        : undefined
                                }
                                title={leftVideoContent?.Title}
                                content={leftVideoContent?.Content}
                                isLandscape={false}
                                textParallaxOptions={{
                                    startScroll: 1450,
                                    endScroll: 1600,
                                }}
                            />
                        </Parallax>
                        <Parallax
                            translateY={[40, 0]}
                            opacity={[0, 1]}
                            startScroll={1250}
                            endScroll={1500}
                        >
                            <BannerWithDescription
                                youtubeUrl={
                                    rightVideoContent?.Url != ''
                                        ? rightVideoContent?.Url
                                        : undefined
                                }
                                title={rightVideoContent?.Title}
                                content={rightVideoContent?.Content}
                                isLandscape={false}
                                textParallaxOptions={{
                                    startScroll: 1450,
                                    endScroll: 1600,
                                }}
                            />
                        </Parallax>
                    </div>
                </ParallaxProvider>
            </div>
            <Footer>
                <FooterContent />
            </Footer>
        </div>
    );
};

export default VideoContentTemplate;
