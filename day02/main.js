const line1 = document.getElementsByClassName('line1');
const line2 = document.getElementsByClassName('line2');
const line3 = document.getElementsByClassName('line3');
const frame = document.getElementsByClassName('frame');

function girarMenu(){

    if (line1[0].classList.contains('line1animation') || line2[0].classList.contains('line2animation') || line3[0].classList.contains('line3animation')) {
        line1[0].classList.toggle('line1animation-revert')
        line2[0].classList.toggle('line2animation-revert')
        line3[0].classList.toggle('line3animation-revert')
        frame[0].classList.toggle('frame-animation-revert')
    } else {
        line1[0].classList.toggle('line1animation')
        line2[0].classList.toggle('line2animation')
        line3[0].classList.toggle('line3animation')
        frame[0].classList.toggle('frame-animation')
   }

}