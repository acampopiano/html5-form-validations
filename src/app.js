/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";
import validator from "validator";
window.onload = function() {
  function formValidation(e) {
    e.preventDefault();
    let myAlert = document.querySelector("#alert");
    let error = document.getElementById("error");
    let cardNumber = document.querySelector("#cardNumber");
    if (
      cardNumber.value.length == 0 ||
      validator.isCreditCard(cardNumber.value)
    ) {
      myAlert.classList.add("d-block");
      cardNumber.style.backgroundColor = "rgb(236,205,208)";
      error.innerHTML = "";
      error.innerHTML = error.innerHTML + cardNumber.dataset.error + "<br/>";
    } else {
      myAlert.classList.add("d-none");
      cardNumber.style.backgroundColor = "white";
    }
  }

  function createElement(element, attribute, inner) {
    if (typeof element === "undefined") {
      return false;
    }
    if (typeof inner === "undefined") {
      inner = "";
    }
    var el = document.createElement(element);
    if (typeof attribute === "object") {
      for (var key in attribute) {
        el.setAttribute(key, attribute[key]);
      }
    }
    if (!Array.isArray(inner)) {
      inner = [inner];
    }
    for (var k = 0; k < inner.length; k++) {
      if (inner[k].tagName) {
        el.appendChild(inner[k]);
      } else {
        el.appendChild(document.createTextNode(inner[k]));
      }
    }
    return el;
  }

  document.querySelector("form").addEventListener("submit", formValidation);
};
