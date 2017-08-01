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
