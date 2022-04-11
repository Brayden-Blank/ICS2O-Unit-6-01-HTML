// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-01-HTML/sw.js", {
    scope: "/ICS2O-Unit-6-01-HTML/",
  })
}

/**
 * This function gets the users input and converts the value to celsius
 */
function convertClicked() {
  //input
  const fahrenheit = parseInt(document.getElementById("fahrenheit").value)

  //process
  const celsius = ((fahrenheit - 32) * 5) / 9

  //output
  document.getElementById("temperature-in-celsius").innerHTML =
    "The temperature is: " + celsius.toFixed(2) + " °C!"
}
