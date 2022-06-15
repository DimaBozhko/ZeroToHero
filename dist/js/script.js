"use strict";

let numbersOfFilms = prompt("сколько фильмов вы уже посмотрели?")

let personalMovieDB = {
    count: numbersOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    private: false
}

let questionOne = prompt("Один из последних просмотреных фильмов");
let questionThree = prompt("На сколько оцените его ?");
let questionTwo = prompt("Один из последних просмотреных фильмов");
let questionFour = prompt("На сколько оцените его ?");

personalMovieDB.movies[questionOne] = questionThree;
personalMovieDB.movies[questionTwo] = questionFour;
console.log(personalMovieDB.movies);