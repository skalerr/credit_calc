let S = 200000
let P = 0.01
let N = 24
let a = +(1 + P).toFixed(3)
console.log(a)
let b = +Math.pow(a, N).toFixed(2)
console.log(b)
let c = +(P / (b - 1)).toFixed(3)
console.log(c)
let d = +(P + c).toFixed(3)
console.log(d)
let e = +(S * d).toFixed(3)
console.log(e)

let x = S * (P + P / (Math.pow(1 + P, N) - 1))
console.log(x)
