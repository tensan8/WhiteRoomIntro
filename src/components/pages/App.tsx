import React from 'react';
import HeroTitle from '../molecules/heroTitle';
import BannerWithDescription from '../organism/bannerWithDescription';
import Footer from '../organism/footer';
import FooterContent from '../molecules/footerContent';

function App() {
    return (
        <div className="flex flex-col" id="root">
            <div className="w-screen px-40 mb-40">
                <HeroTitle />
                <div className="mt-56">
                    <BannerWithDescription />
                </div>
                <div className="mt-56 grid grid-cols-2 gap-x-12">
                    <BannerWithDescription isLandscape={false} />
                    <BannerWithDescription isLandscape={false} />
                </div>
            </div>
            <Footer>
                <FooterContent />
            </Footer>
        </div>
    );
}

export default App;
