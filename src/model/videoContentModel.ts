import data from '../data.json';
import { MultipleVideoContentSchema } from '../utils/multipleVideoContentSchema';

export const getVideoContent = (): MultipleVideoContentSchema => {
    return data;
};
