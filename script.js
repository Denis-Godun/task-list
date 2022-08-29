//создаём обработчик клика на ластик
document.querySelector("#eraser").addEventListener("click", () => {
  //убираем весь контент по нажатию
  document.querySelector("#groceryItems").textContent = "";
});
//создаём обработчик добавления заметки по нажатию Enter
document.querySelector("#userInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});
//функция создания заметки
addItem = () => {
  //создаём элемент который будем добавлять
  const item = document.createElement("h2");
  //создаём значение добавляемого элемента
  item.textContent = "-" + document.querySelector(".userInput").value;
  //добавляем событие по клику на добавленный элемент
  item.addEventListener("click", () => {
    //если нажать на элемент он зачеркнется,если он уже зачеркнут,то оно убирается
    if (item.style.textDecoration != "line-through") {
      item.style.textDecoration = "line-through";
    } else {
      item.style.textDecoration = "none";
    }
  });
  //добавляем созданный элемент в конец блока
  document.querySelector("#groceryItems").appendChild(item);
  //очищаем поле ввода после добавления элемента
  document.querySelector(".userInput").value = "";
};
