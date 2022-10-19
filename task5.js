let x = +prompt('Введите число ')
    n = +prompt('Введите степень числа ')
    
// const NumPower = (a, b) => console.log(a**b);  I-variant

const NumPower = (a, b) =>{  // II-variant
    const result = a**b;
    console.log(result);
};
NumPower(x,n)
