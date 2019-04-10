/*
Перед началом работы
Активируйте строгий режим соответствия.
Скопируйте код ниже и вставьте его в начало своей работы:
var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];
Задача № 1
В этом месяце мы определили хит продаж. Его название — в переменной hitName, а цена — в hitPrice. Cоздадим и поместим в переменную hit объект со свойствами name и price и выведем информацию о нём в консоль.

Процесс реализации
Создать пустой объект и присвоить его в переменную hit.
Добавить свойства name и price, поместив туда название и цену текущего хита.
Вывести, используя переменную hit, информацию о товаре:
Хит продаж мартобря: <Ховерборд Mattel 2016> цена 9200 Q
Угловые скобки обязательны

Задача № 2
Преобразуем информацию о товарах в массивах positions и prices в массив объектов items с ключами name и price.

Процесс реализации
Создайте пустой массив в переменной items.
Создайте для каждого товара новый объект.
Запишите название товара в свойство name созданного объекта.
Запишите цену товара в свойство price созданного объекта.
Поместите новый объект в массив items.
После того, как все товары преобразованы, выведите, используя массив items, информацию о товаре с индексом 4 в консоль в виде:
Купите Меч световой FORCE (синий луч) по цене 57000 Q
Задача № 3
Для нашего отдела оптовых продаж необходимо реализовать функцию, которая принимает в качестве аргумента объект товара и количество штук и выводит в консоль информацию о его стоимости с учетом объема партии. Скидка от объема определяется следующим образом:

До 10 штук — скидка 5 %
От 10 до 50 штук — скидка 7 %
От 50 до 100 штук — скидка 10 %
100 и более штук — скидка 15 %
Процесс реализации
Создайте функцию showDiscount.
Определите размер скидки.
Вычислите стоимость партии с учетом скидки.
Вычислите выгоду с учетом скидки.
Выведите в консоль информацию о скидке в формате:
Телепорт бытовой VZHIH-101 — стоимость партии из 12 штук 111600 Q (скидка 7 %), ваша выгода 8400 Q!
Вызовите полученную функцию для товара из массива items с индексом 0 и размером партии 12 штук.
И для товара с индексом 3 и размером партии 97 штук.
Задача № 4
На складе всех товаров в достаточном количестве. А вот товаров items[3] осталось всего 4. Решено вести учет их количества, чтобы вовремя узнать, что они закончились.

Процесс реализации
Создайте свойство amount для соответствующего товара, в котором будем хранить остаток.
В качестве значения этого свойства запишите 4.
Создайте функцию updateAmount, которая будет принимать объект товара и расход в штуках, по умолчанию 1.
Проверьте, есть ли у объекта товара свойство amount. Если свойства нет, выходим из функции.
Если свойство amount равно нулю, или расход больше, чем amount, выводим сообщение вида:
Нейтрализатор FLASH black edition закончился на складе.
Если свойство amount больше расхода, уменьшаем на расход значение свойства и выводим сообщение вида:
Нейтрализатор FLASH black edition — остаток 3 шт.
Если свойство amount равно расходу, уменьшаем на расход значение свойства и выводим сообщение вида:
Это был последний Нейтрализатор FLASH black edition, вам повезло!.
Вызываем полученную функцию для товара из массива items с индексом 1 и расходом 17.
Потом для товара с индексом 3 и расходом 3.
И еще один раз для товара с индексом 3, расход не передаем.
*/