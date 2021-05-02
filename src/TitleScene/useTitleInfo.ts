import musicData from '../api/input.json';

export const useTitleInfo = (): {
    title: string;
    author: string;
    midiCreator: string;
} => {
    return {
        title: musicData.title,
        author: musicData.author,
        midiCreator: musicData.midiCreator,
    };
};
