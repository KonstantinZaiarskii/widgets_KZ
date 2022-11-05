const array1 = [1, 2, 3, [4], [[5], [6]], [[[[[[7]]]]]]]

console.log(array1.flat(Infinity))

// Тебе дан массив array с подмассивами. Нужно создать переменную flattedArray с элементами массива array без вложенности (получить одноуровневый массив). Тебе нужно написать логику, которая будет убирать вложенность любого уровня:

const array2 = [1, 2, [3, 4], [[5, 6], [7, 8]], [[[9]]]];

const flattedArray = array2.flat(Infinity).slice(0, -1)

console.log(flattedArray); // [1, 2, 3, 4, 5, 6, 7, 8]