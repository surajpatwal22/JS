let arr =['1','2','3'];

const arr1 = arr.flatMap((n)=>{
    return parseInt(n*2);
})
console.log(arr1);

const person = {
    name : "suraj",
    age : "34",
    greet(){
        console.log("hello from" + this.name);
    }
}

const {age , name } = person;

console.log(age,name);

