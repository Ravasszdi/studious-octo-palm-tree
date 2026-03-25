export  function masodfoku(a,b,c) {
    let d = Math.sqrt((b*b)-(4*a*c));
    if(d<0) return {x1:"i",x2:"i"};
    return {
        x1:(-b+d)/2*a,
        x2:(-b-d)/2*a
    }
}