import dom from '../dom.js';
import getJoke from '../../apis/getJoke.js';
import createJoke from '../components/createJoke.js';
import updateJoke from '../components/updateJoke.js';

const getJokeHandler = async () => {
    const jokeData = await getJoke();
    const jokeExist = document.getElementById('joke-container');
    if (!jokeExist) {
        const jokeDom = createJoke(jokeData);
        dom.root.append(jokeDom);
    } else {
        updateJoke(jokeExist, jokeData);
    }
};

export default getJokeHandler;
