function instructionGenerator () {
    function multiplyBy2 (num){
        return num * 2
    };
    return multiplyBy2
};

let generateFunc = instructionGenerator();

let result = generateFunc(3);
console.log(result);

//function data(num){
   // return num;
//}
//data;

