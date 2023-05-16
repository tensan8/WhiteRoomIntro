import { SingleVideoContentSchema } from './singleVideoContentSchema';

export interface MultipleVideoContentSchema {
    BigVideo: SingleVideoContentSchema;
    LeftVideo: SingleVideoContentSchema;
    RightVideo: SingleVideoContentSchema;
}
