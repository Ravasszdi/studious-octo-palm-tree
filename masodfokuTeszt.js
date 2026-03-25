import {masodfoku} from "./masodfoku.js";

const TESZTESETEK = [
    {
        a:0,
        b:0,
        c:0,
        vart:{x1:0,x2:0},
        szoveg:"Az értékek 0-ák"
    },
    {
        a:-1,
        b:-1,
        c:-1,
        vart:{x1:"i",x2:"i"},
        szoveg:"Az értékek (-1)-ek"
    },
    {
        a:5,
        b:3,
        c:4,
        vart:{x1:"i",x2:"i"},
        szoveg:"Az értékek természetes számok,a vissza kapott érték komplex"
    },
    {
        a:1,
        b:4,
        c:4,
        vart:{x1:-2,x2:-2},
        szoveg:"Az értékek természetes számok,a vissza kapott érték negatív"
    },
    {
        a:0,
        b:4,
        c:4,
        vart:{x1:-2,x2:-2},
        szoveg:"Az értékek természetes számok,a vissza kapott érték negatív"
    },

];

export function masdofokuTesztek() {
    for (let i = 0; i < TESZTESETEK.length; i++) {
        masodfokuteszt(TESZTESETEK[i]);
    }
}

function masodfokuteszt(adat = {a:0,b:0,c:0,vart:0,szoveg:""}) {
    let d = Math.sqrt((adat.b*adat.b)-(4*adat.a*adat.c));
    let eredmeny = masodfoku(adat.a,adat.b,adat.c);
    console.assert((adat.vart.x1===eredmeny.x1)&&(adat.vart.x2===eredmeny.x2),
        `a várt érték [${adat.vart.x1},${adat.vart.x2}] helyette [${eredmeny.x1},${eredmeny.x2}] kaptunk, a diszkrimináns ${d}`,
        adat.szoveg
        )
}