import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";


function combine(list) {
    var pairs = new Array((list.length * (list.length - 1)) / 2),
    pos = 0;
    for (var i = 0; i < list.length; i++) {
        for (var j = i + 1; j < list.length; j++) {
            pairs[pos++] = [list[i], list[j]];
        }
    }
    return pairs;
}

const comparaPares = (a, b)=>{
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if(a[i] == b[j]){
                return true
            }
        }
    }
    return false
}

const compPares = (a, b)=>{
    for (let ar = 0; ar < a.length; ar++) {
        const element = a[ar];
        for (let inter = 0; inter < element.length; inter++) {
            const re = element[inter];
            if(comparaPares(re, b)){
                return true
            }
        }
    }
    return false
    
}

const equipos = new Array(8)
for (let i = 0; i < equipos.length; i++) {
    equipos[i] = i+1;
    
}

const result = combine(equipos);

const fechas =()=>{
    const partidos = []
    for (let e = 0; e < equipos.length -1; e++) {
        const element = equipos[e];
        const f = []
        const fp = []
        let rePar = 0
        for (let i = 0; i < 4; i++) {
            const par = result.splice(rePar, 1)
            const parF = par[0] 
            f.push(par)
            fp.push(parF)
            for (let equipo = 0; equipo < result.length; equipo++) {
                const element = result[equipo];
                let r = compPares(f, element)
                if(r === false){
                    //console.log('par', equipo, ' ', r)
                    rePar = equipo
                    break
                }
            }
        }
        partidos.push(fp)
    }
    return partidos
}
//console.log("Combinaciones = "+ JSON.stringify(result));
//console.log("Combinaciones sin = "+ JSON.stringify(partidos));
/*
result.map(el=>{
    el.map(p=>{
        console.log(p)
    })
})
*/

const mostrarF=()=>{
    const pares = combine(equipos)
    const fechas1 = fechas()
    return fechas1
}

const Fixture =()=>{
    const [resultado, setResultado] = useState([])
    
    const mostrar =()=>{
        const f = mostrarF()
        setResultado(f)
    }

    return(
        <Container>
            <Button onClick={mostrar} >ver</Button>
            {
                resultado.map((el, fi)=>(
                    <div key={fi}>
                        <h3>fecha {fi + 1}</h3>
                        {
                            el.map((f, i)=>(
                                <div key={i}>
                                    <h4>Hora</h4>
                                    <pre>{JSON.stringify(f, null, 2)}</pre>
                                </div>
                            ))
                        }
                    </div>    
                ))
            }
        </Container>
    )
}

export default Fixture