//Написати функцію яка сортує за спаданням масив рядків по вазі кожного рядка. Вага рядка розраховується наступним чином: для кожного символа вираховується код за допомогою метода charCodeAt() після чого коди складаються. Отримане числове значення і є вагою рядка. Для вирішення обовʼязково використати методи масивів.

function sort_weight(arr){
    function weight(string){
      return string.split('').reduce((sum, char) => sum += char.charCodeAt(0), 0);
    }
  return arr.sort((a,b) => weight(b) - weight(a));
}
console.log(sort_weight(['hello', 'world', 'universe']));