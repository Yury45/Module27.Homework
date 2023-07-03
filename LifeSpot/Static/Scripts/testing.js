let name = prompt('Пожалуйста, укажите ваше имя:')
alert(`Добрый день, ${name}\nДлина имени: ${name.length}`)

let elements = document.getElementsByTagName('*');
alert(`Количество элементов на странице:  ${elements.length}`);

const saveValue = function () {
    let currentValue = document.getElementsByTagName('input')[0].value.toLowerCase();
    alert('Последний ввод: ' + this.lastValue
        + '\n' + 'Текущий ввод: ' + currentValue);
    this.lastValue = currentValue;
}