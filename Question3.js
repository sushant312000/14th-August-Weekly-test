let arr = [3,6,4,2,4];
function sum(arr){
    let c = 0;
    arr.forEach(ele => {
        c += ele*ele;
    });
    return c;
}

console.log(sum(arr));