window.onload = function() {
  var play = document.getElementById('play');
  var item = document.getElementById('tv');
  var lastItem = null;

  //вешаем событие на тв блок
  item.addEventListener('click', player);

  //плеер
  function player(event) {
    //проверяем или клик был именнно по превью
    if (event.target.className === 'preview') {
      //востанавливаем елемент если он был
      if (lastItem != null) {
        lastItem.style.display = 'flex';
      }

      //получаем елемент по превью которого кликнули
      var currentItem = event.target.parentNode;

      //удаляем плеер который открыт
      play.remove();

      //добавляем плеер
      currentItem.parentNode.insertBefore(play, currentItem);

      //записываем елемент в переменную и скрываем
      lastItem = currentItem;
      currentItem.style.display = 'none';
    } else if (event.target.className === 'info-title') {
      //востанавливаем елемент если он был
      if (lastItem != null) {
        lastItem.style.display = 'flex';
      }

      //получаем елемент по превью которого кликнули
      var currentItem = event.target.parentNode.parentNode;

      //удаляем плеер который открыт
      play.remove();

      //добавляем плеер
      currentItem.parentNode.insertBefore(play, currentItem);

      //записываем елемент в переменную и скрываем
      lastItem = currentItem;
      currentItem.style.display = 'none';
    } else {
      //если это не превью, то проверяем или это кнопка закрытия плеера
      if (event.target.className === 'close') {
        //закрываем плеер
        play.remove();

        //востанавливаем елемент если он был
        if (lastItem != null) {
          lastItem.style.display = 'flex';
        }
      }
    }
  }

  var next = document.getElementById('next');
  var prev = document.getElementById('prev');
  var week = document.getElementById('week');
  var tempElement = null;

  //прокрутка слайдера недели вперед
  next.onclick = function() {
    tempElement = next.previousSibling;
    next.previousSibling.remove();
    week.insertBefore(tempElement, prev.nextSibling);
  };

  //прокрутка слайдера недели назад
  prev.onclick = function() {
    tempElement = prev.nextSibling;
    prev.nextSibling.remove();
    week.insertBefore(tempElement, next);
  };

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
};
