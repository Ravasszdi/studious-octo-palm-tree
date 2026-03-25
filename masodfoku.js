export  function masodfoku(a,b,c) {
    if(a===0) return `Az "a" egyenlő 0-val! és nem másodfokú`;
    let d = Math.sqrt((b*b)-(4*a*c));
    if(d<0) return {x1:"i",x2:"i"};
    return {
        x1:(-b+d)/2*a,
        x2:(-b-d)/2*a
    }
}