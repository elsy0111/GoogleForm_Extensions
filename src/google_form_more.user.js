// ==UserScript==
// @name         Google Form More
// @version      1.0.0
// @namespace    https://github.com/elsy0111/GoogleForm_Extensions
// @description  Google Form More Width
// @author       Arcsecond
// @updateURL    https://github.com/elsy0111/GoogleForm_Extensions/raw/master/src/google_form_more.user.js
// @downloadURL  https://github.com/elsy0111/GoogleForm_Extensions/raw/master/src/google_form_more.user.js
// @supportURL   https://github.com/elsy0111/GoogleForm_Extensions
// @match        ://docs.google.com/forms/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        setTimeout(function() {

            var checkboxes = document.querySelectorAll('div[role="checkbox"]');

            checkboxes.forEach(function(checkbox) {
                while (checkbox.firstChild) {
                    checkbox.removeChild(checkbox.firstChild);
                }
                checkbox.style.borderColor = '#EEE';
            });

            var textInputs = document.querySelectorAll('input[type="text"]');

            textInputs.forEach(function(input) {
                input.style.color = '#FFF';
            });
            var visibleElements = document.querySelectorAll('[style="visibility: visible;"]');

            visibleElements.forEach(function(element) {
                element.style.visibility = 'hidden';
            });

            var elements = document.querySelectorAll('[aria-describedby][role="group"]');
            elements.forEach(function(element) {
                var childElements = element.querySelectorAll('*');
                childElements.forEach(function(childElement) {
                    childElement.style.backgroundColor = 'rgb(255, 255, 255)';
                    childElement.style.color = '#222';
                });
            });
            var ans_check = document.querySelectorAll('[aria-label]');
            ans_check.forEach(function(ans) {
                while (ans.firstChild) {
                    ans.removeChild(ans.firstChild);
                }
            });
            var ques = document.querySelectorAll('[role="heading"]');
            ques.forEach(function(q) {
                q.style.color = 'rgb(32,33,36)';
            });



            /*var ariaexpCheckedElements = document.querySelectorAll('[aria-expanded]');

            ariaexpCheckedElements.forEach(function(checkbox) {
                while (checkbox.firstChild) {
                    checkbox.removeChild(checkbox.firstChild);
                }
                checkbox.style.width = '50%';
                checkbox.style.height = '40px';
                checkbox.style.color = '#EEE';
            });*/
            var ariaCheckedElements = document.querySelectorAll('[aria-checked]');

            ariaCheckedElements.forEach(function(checkbox) {
                while (checkbox.firstChild) {
                    checkbox.removeChild(checkbox.firstChild);
                }
                checkbox.style.backgroundColor = '#EEE';
            });
        }, 1000);
    };
})();
