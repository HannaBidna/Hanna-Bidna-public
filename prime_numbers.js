//output of prime numbers from 1 to n
let n = prompt ('Input the n');
checkPrime:
for (let i = 2; i <= n; i += 1){
    for (let k = 2; k < i; k += 1){
        if (i%k == 0) continue checkPrime;
    }alert (i);
}