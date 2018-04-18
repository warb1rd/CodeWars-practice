//Write a function that takes 2 arguments(base, power)

function power(base, pow){
    return pow > 0? base*(power(base, pow-1)) : 1
}

power(8, 2)


//Write a function for factorial of a number

function factorial(num){
    return num > 1? num*(factorial(num-1)) : 1
}


//Write a function that returns fibonacci number in that index

function fibonacci(n){
    return  n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  fibonacci(7)