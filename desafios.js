function siempreHambriento(arr) {
    let comer = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "comida"){
            console.log("Delicioso");
            comer = 1;
        }
    }
    if(comer === 0){
        console.log("Tengo hambre");
    }
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
console.log("")

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i=0; i<arr.length;i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]
console.log("");

function betterThanAverage(arr) {
    var sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    sum = sum / (arr.length);
    var count = 0
        for(let i=0; i<arr.length; i++){
            if(arr[i] > sum){
                count++;
            }
        }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
console.log("")

function reverse(arr) {
    var temp = "";

    for(let i=0; i !== arr.length-(i+1); i++){
        temp = arr[i];
        arr[i] = arr[arr.length-(i+1)]
        arr[arr.length-(i+1)] = temp;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
console.log("")

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(let i=0; fibArr.length<n; i++){
        let sum = fibArr[fibArr.length-1] + fibArr[fibArr.length-2];
        fibArr.push(sum);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]




