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

const fechas =(pares)=>{
    const partidos = []
    for (let e = 0; e < equipos.length -1; e++) {
        const element = equipos[e];
        const f = []
        const fp = []
        let rePar = 0
        for (let i = 0; i < 4; i++) {
            const par = pares.splice(rePar, 1)
            const parF = par[0] 
            f.push(par)
            fp.push(parF)
            for (let equipo = 0; equipo < pares.length; equipo++) {
                const element = pares[equipo];
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

const mostrarF=(teams)=>{
    const pares = combine(teams)
    console.log('pares : ',pares)
    const fechas1 = fechas(pares)
    return fechas1
}

const Fixture =(props)=>{
    const [resultado, setResultado] = useState([])
    
    const mostrar =()=>{
        const f = mostrarF(props.teams)
        setResultado(f)
    }

    return(
        <Container>
            <Button onClick={mostrar} >ver</Button>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Equipo 1</th>
                        <th>Puntos</th>
                        <th>Equipo 2</th>
                        <th>Puntos</th>
                    </tr>
                </thead>
            {
                resultado.map((el, fi)=>(
                    <tbody key={fi}>
                        <h3>fecha {fi + 1}</h3>
                        {
                            el.map((f, i)=>(
                                <tr key={i}>
                                    <td style={{border: '1px solid grey' }} >{ f[0].nombre }</td>
                                    <td style={{border: '1px solid grey' }} ></td>
                                    <td style={{border: '1px solid grey' }} >{ f[1].nombre }</td>
                                    <td style={{border: '1px solid grey' }} ></td>
                                </tr>
                            ))
                        }
                    </tbody>    
                ))
            }
            </table>
        </Container>
    )
}

export default Fixture