const createJoke = (jokeData) => {
    // container
    const container = document.createElement('div');
    container.id = 'joke-container';
    container.className = 'joke';

    // category
    const category = document.createElement('h2');
    category.className = 'category';
    category.id = `category-${jokeData.category}`;
    category.innerText = jokeData.category;

    // type
    const type = document.createElement('p');
    type.className = 'type';
    type.id = `type-${jokeData.type}`;
    type.innerText = jokeData.type === 'twopart' ? 'Two-Part Joke' : 'Single Joke';

    container.append(category, type);

    // setup
    const setup = document.createElement('p');
    setup.className = 'setup';
    setup.id = `setup-${jokeData.id}`;
    setup.innerText = jokeData.setup;
    container.append(setup);

    if (jokeData.type === 'twopart') {
        // delivery
        const delivery = document.createElement('p');
        delivery.className = 'delivery';
        delivery.id = `delivery-${jokeData.id}`;
        delivery.innerText = jokeData.delivery;
        container.append(setup, delivery);
    } else {
        setup.innerText = jokeData.joke;
    }

    // flags
    const flagsList = document.createElement('ul');
    flagsList.className = 'flags';
    flagsList.id = `flags-${jokeData.id}`;
    for (const [key, value] of Object.entries(jokeData.flags)) {
        const flagItem = document.createElement('li');
        flagItem.className = value ? 'true' : 'false';
        flagItem.innerText = `${key}`;
        flagsList.appendChild(flagItem);
    }

    // language
    const lang = document.createElement('p');
    lang.className = 'lang';
    lang.id = `lang-${jokeData.lang}`;
    lang.innerText = `Language: ${jokeData.lang}`;

    // safe
    const safe = document.createElement('p');
    safe.className = 'safe';
    safe.id = `safe-${jokeData.safe}`;
    safe.innerText = `${jokeData.safe}`;

    if (jokeData.safe === true) {
        safe.style.color = 'red'; // Set text color to red
    } else {
        safe.style.color = 'green'; // Set text color to green
    }

    container.append(flagsList, lang, safe);

    return container;
};

export default createJoke;
