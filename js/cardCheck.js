/*    JavaScript 
 *    Filename: script1.js
 */

"use strict";

function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

//////////////////////////////////////////////////////////////////////////////////////
// FUNCTION - VALIDATE CREDIT CARD NUMBER (original code by DiegoSalazar)
//////////////////////////////////////////////////////////////////////////////////////
function validateCardNumber(value){

    // ACCEPT ONLY DIGITS, DASHES OR SPACES
    if(/[^0-9-\s]+/.test(value)){

        return false;

    }

    // LUHN ALGORITHM
    var nCheck = 0;
    var nDigit = 0;
    var bEven = false;

    // REMOVE SPACES
    value = value.replace(/\D/g,"");

    // LOOP
    for(var n = value.length - 1; n >= 0; n--){

        // SET VALUES
        var cDigit = value.charAt(n);
        var nDigit = parseInt(cDigit, 10);

        // CHECK FOR EVEN
        if(bEven){

            // CHECK FOR SOMETHING
            if((nDigit *= 2) > 9){

                // SUBSRACT 9
                nDigit -= 9;

            }

        }

        // INCREASE
        nCheck += nDigit;
        bEven = !bEven;

    }

    // RETURN
    return (nCheck % 10) == 0;

} // END FUNCTION

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}

var img = document.createElement("img");
img.alt = "logo card";

function selectCardType() {
  // local variables
    var cardNumValue = document.getElementById("card_input").value;
    // var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var visa = /^4[0-9]{15}$/;
    var mc = /^5[1-5][0-9]{14}$/;
    var discover = /^6(?:011|5[0-9]{2})[0-9{12}$/]/;
    var amex = /^3[0-7][0-9]{14}$/;

    if (visa.test(cardNumValue)) {
        // add logo on input 
        const img_input = document.getElementById("img_card")
        img_input.removeChild(img_input.firstElementChild);
        img.src = "https://w7.pngwing.com/pngs/648/10/png-transparent-visa-logo-credit-card-visa-debit-card-payment-card-mastercard-visa-blue-text-trademark.png"
        img.width = 52
        img.height = 32
        img_input.appendChild(img);

        document.getElementById("card_input").value = format(cardNumValue);
        console.log(validateCardNumber(cardNumValue));

    } else
    if (mc.test(cardNumValue)) {
        // add logo on input
        const img_input = document.getElementById("img_card")
        img_input.removeChild(img_input.firstElementChild);
        img.src = "https://w7.pngwing.com/pngs/924/607/png-transparent-mastercard-credit-card-business-debit-card-logo-mastercard-text-service-orange.png";
        img.width = 56
        img.height = 32
        img_input.appendChild(img);

        console.log(validateCardNumber(cardNumValue));
        document.getElementById("card_input").value = format(cardNumValue);

    } else if (discover.test(cardNumValue)) {

        // add logo on input
        const img_input = document.getElementById("img_card")
        img_input.removeChild(img_input.firstElementChild);
        img.src = "https://www.pngitem.com/pimgs/m/257-2572317_discover-card-hd-png-download.png";
        img.width = 56
        img.height = 32
        img_input.appendChild(img);
        console.log(validateCardNumber(cardNumValue));
        document.getElementById("card_input").value = format(cardNumValue);
      // document.getElementById("discover").checked = "checked";
    } else if (amex.test(cardNumValue)) {
        console.log(validateCardNumber(cardNumValue));
        document.getElementById("card_input").value = format(cardNumValue);
        alert("amex");
      // document.getElementById("amex").checked = "checked";
    }
}

