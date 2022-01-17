/*console.log('abc');
console.log(1);
console.log(true);
console.log(null);
console.log(undefined);
console.log([1,2,3,4]);
console.log({a:1,b:2,c:3});*/
(function () {
    console.log('Listo');
})();

/*function myPrincipalfunction() {
    let name = 'Nestor'
    function mySecondaryFunc() {
        name = 'Agustin'
        return name;
    }
    return mySecondaryFunc()
}
*/


const myPrincipalfunction = ()=>{
    let name = 'Nestor'
    const mySecondaryFunc =()=> {
        name = 'Agustin'
        return name;
    }
    return mySecondaryFunc()
}

console.log(myPrincipalfunction())

const edad =()=>{
    return '38'
}

console.log(`Mi edad es ${edad()}`)