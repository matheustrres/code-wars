const removeDuplicates = (arr) => [...new Set(arr)];
const removeArrObjDuplicates = (arrObj) => [...new Set(arrObj.map(JSON.stringify))].map(JSON.parse);

const arrObj = [
    {
        id: 2,
        name: 'Torres'
    },
    {
        id: 2,
        name: 'Torres'
    },
    {
        id: 1,
        name: 'Andre'
    },
    {
        id: 3,
        name: 'Fernando'
    },
    {
        id: 3,
        name: 'Fernando'
    }
]

console.log(removeDuplicates([0, 0, 0.55, 0,  1, 1, 2, 1, 3, 2])); /* [ 0, 0.55, 1, 2, 3 ] */
console.log(removeArrObjDuplicates(arrObj)); 