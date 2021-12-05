import { createCounterAnimation } from "./createCounterAnimation.js";

const expertsCounter = document.getElementById("experts-counter");
const usersElement = document.getElementById("users-number");
const countryElement = document.getElementById("country-number");
const expertsElement = document.getElementById("experts-number");

const USERS = 2;
const COUNTRIES = 78;
const EXPERTS = 10000;

const expertsObserver = new IntersectionObserver(function ([entry]) {
  if (!entry.isIntersecting) return;

  createCounterAnimation({
    element: usersElement,
    limit: USERS,
    sufix: "m",
  });
  createCounterAnimation({
    element: countryElement,
    limit: COUNTRIES,
    time: 1000,
  });
  createCounterAnimation({
    element: expertsElement,
    limit: EXPERTS,
    sufix: "+",
    incrementValue: 20,
    time: 1,
  });
});
expertsObserver.observe(expertsCounter);
