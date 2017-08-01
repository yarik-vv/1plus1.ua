var n = document.getElementById('next');
var p = document.getElementById('prev');
var week = document.getElementById('week');
var tempElement = null;

//прокрутка слайдера недели вперед
function next() {
  tempElement = n.previousSibling;
  n.previousSibling.remove();
  week.insertBefore(tempElement, p.nextSibling);
}

//прокрутка слайдера недели назад
function prev() {
  tempElement = p.nextSibling;
  p.nextSibling.remove();
  week.insertBefore(tempElement, n);
}

var days = document.querySelectorAll('.day p');
week.addEventListener('click', select);

function select(event) {
  if (
    event.target.tagName == 'A' ||
    event.target.tagName == 'P' ||
    event.target.tagName == 'SPAN'
  ) {
    for (var i = 0; i < days.length; i++) {
      days[i].style.border = 'none';
      days[i].style.color = '#000000';
    }

    if (event.target.tagName === 'A') {
      event.target.firstElementChild.style.border = '1px solid #ff0033';
      event.target.firstElementChild.style.color = '#ff0033';
    }

    if (event.target.tagName === 'P') {
      event.target.style.border = '1px solid #ff0033';
      event.target.style.color = '#ff0033';
    }

    if (event.target.tagName === 'SPAN') {
      event.target.previousElementSibling.style.border = '1px solid #ff0033';
      event.target.previousElementSibling.style.color = '#ff0033';
    }
  }
}
