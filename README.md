## Тестовая работа на должность junior front-end разработчика
>gh-pages demo: http://yarik-vv.github.io/1plus1.ua

## Коментарии:
- Так как ответа насчет адаптивности и использования некоторых технологий от вас я не получил, то писал на чистом CSS и JavaScript, а верстал под разрешение экрана указаное в задании. 
- Использовал Webpack для соединения CSS стилей в один файл, а затем интегрировав их в тег, чтобы уменьшить количество запросов и ускорить скорость загрузки страницы.
- Использовал flex-box и подразумевал, что версии браузеров младше IE11 и Android 4.3 поддержаватся не будут. Но если задача будет стоять верстать под старые те браузеры, то могу верстать и под них.
- тестил лично на разных браузерах, под управлением разных операционных систем (MacOS, Elementary OS(Linux), Windows 7 и 8).

## Инструкция по развертыванию:
- `$ npm install` - установит зависимости;
- `$ npm run dev` - запустит сервер в режиме разработки по адресу `localhost:9000`;
- `$ npm run build` - сборка с минификацией и добавления стилей в выходной html файл в тег `<style>`. Для минимизации запросов со страницы и быстрой ее загрузки.