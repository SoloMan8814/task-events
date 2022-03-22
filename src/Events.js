/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let creater = document.createElement('button');
    creater.innerHTML = 'Удали меня';
    document.body.append(creater);
    creater.addEventListener('click', function () {
        this.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let root = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let childrenOfRoot = document.createElement('li');
        childrenOfRoot.innerHTML = arr[i];
        root.append(childrenOfRoot);
        childrenOfRoot.addEventListener('mouseover', function () {
            childrenOfRoot.title = arr[i];
        });
    }

    document.body.append(root);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.innerHTML = 'tensor';
    document.body.append(a);
    a.addEventListener('click', function () {
        this.innerHTML = this.innerHTML + ' ' + this.href + '';
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = 'Пункт';
    ul.append(li);
    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    document.body.append(ul);
    document.body.append(button);
    li.addEventListener('click', function () {
        this.innerHTML = this.innerHTML + '!';
    });
    button.addEventListener('click', function () {
        let newli = document.createElement('li');
        newli.innerHTML = 'Пункт';
        ul.append(newli);
        newli.addEventListener('click', function () {
            this.innerHTML = this.innerHTML + '!';
        });
    });
}
