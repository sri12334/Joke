# Image gallery

> A simple

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)

## General info

> The objective of the project is to practice separation of concern in
> JavaScript.

## Screenshots

![Example screenshot](./assets/projectScreenshot.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

clone the repo and start using the stop watch.

## Code Examples

const getJoke = async () => {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error('failed to fetch joke');
        }
    } catch (err) {
        console.error(err);
    }
};

export default getJoke;


## Features

List of features ready and Todos for future development

-
-
-

To-do list:

-
-

## Status

Project is: done

## Inspiration

## Contact
