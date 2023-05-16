import React from 'react';
import VideoContentTemplate from '../templates/videoContentTemplate';
import SelectVideoContent from '../../controller/videoContentController';
import { ContentVideoOption } from '../../utils/contentVideoOption';
import { SingleVideoContentSchema } from '../../utils/singleVideoContentSchema';

function App() {
    const bigVideo: SingleVideoContentSchema | undefined = SelectVideoContent(
        ContentVideoOption.BIG_VIDEO
    );
    const leftVideo: SingleVideoContentSchema | undefined = SelectVideoContent(
        ContentVideoOption.LEFT_VIDEO
    );
    const rightVideo: SingleVideoContentSchema | undefined = SelectVideoContent(
        ContentVideoOption.RIGHT_VIDEO
    );

    return (
        <div id="root">
            <VideoContentTemplate
                bigVideoContent={bigVideo}
                leftVideoContent={leftVideo}
                rightVideoContent={rightVideo}
            />
        </div>
    );
}

export default App;
