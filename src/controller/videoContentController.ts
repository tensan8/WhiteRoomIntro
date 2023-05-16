import { getVideoContent } from '../model/videoContentModel';
import { ContentVideoOption } from '../utils/contentVideoOption';
import { MultipleVideoContentSchema } from '../utils/multipleVideoContentSchema';
import { SingleVideoContentSchema } from '../utils/singleVideoContentSchema';

const SelectVideoContent = (
    chosenOption: ContentVideoOption
): SingleVideoContentSchema | undefined => {
    const data: MultipleVideoContentSchema = getVideoContent();

    if (chosenOption == ContentVideoOption.BIG_VIDEO) return data.BigVideo;
    else if (chosenOption == ContentVideoOption.LEFT_VIDEO)
        return data.LeftVideo;
    else if (chosenOption == ContentVideoOption.RIGHT_VIDEO)
        return data.RightVideo;
};

export default SelectVideoContent;
