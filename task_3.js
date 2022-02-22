//////////////////////3/////////////////////////

let num=20;

function Fibonacci(num) {
    let arr=new Array(num);
    arr[0]=arr[1]=1;
    for (let i=2;i<num;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    console.log(arr);
}

Fibonacci(num);
