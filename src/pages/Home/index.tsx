import {
    Button,
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
} from "@material-ui/core";
import { grid } from "@material-ui/system";
import React, { useState } from "react";

export const HomePage: React.FC = () => {
    const [operacion, setOperacion] = useState({
        a: 100,
        b: 10,
        c: 20,
        d: 20,
        e: 0.1,
    });
    const [pila, setPila] = useState<string[]>([]);

    function handleChange(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        setOperacion((prev) => ({
            ...prev,
            [e.target.name]: parseFloat(e.target.value),
        }));
    }
    function calcular() {
        let operaciones: string[] = [""];
        let valorI1 = `(${operacion.b} + ${operacion.c}) + ${operacion.d} = ${operacion.a}`;
        let valorIx = operacion.b + operacion.c + operacion.d;
        let valorI2 = `${valorIx} = ${operacion.a}`;
        let i = operacion.a / valorIx;
        let valorI3 = `i = ${operacion.a} / ${valorIx}`;
        let valorI4 = `i = ${i}`;
        operaciones.push(valorI1, valorI2, valorI3, valorI4);

        let v = operacion.a - operacion.d;
        let valorV1 = `V = ${operacion.a} - ${operacion.d}`;
        let valorV2 = `V = ${v}`;
        operaciones.push(valorV1, valorV2);

        let i1 = operacion.a / operacion.b;
        let valorI11 = `I1 = ${v}/ ${operacion.b}`;
        let valorI12 = `I1 = ${i1}`;
        operaciones.push(valorI11, valorI12);

        let ic = i1 + (operacion.d * i1) / operacion.c;

        let valorIC1 = `Ic = ${i1} + ${operacion.d}(${i1})/ ${operacion.d}`;
        let valorIC2 = `Ic = ${ic}`;
        operaciones.push(valorIC1, valorIC2);

        let rth = v / ic;
        let valorRth = `Rth = ${v}/ ${ic}`;
        let valorRth2 = `Rth = ${rth}`;
        operaciones.push(valorRth, valorRth2);

        let tao = operacion.e / rth;
        let valorTao = `Tao = ${operacion.e} / ${rth}`;
        let valorTao1 = `Tao = ${tao}`;
        operaciones.push(valorTao, valorTao1);

        let x = 1 / tao;
        let valorX1 = `x = 1/ ${tao}`;
        let valorX2 = `x = ${x}`;

        operaciones.push(valorX1, valorX2);

        let resultado1 = `iL = Ic(1-e^(-${x}t))u(t)A`;
        operaciones.push(resultado1);

        setPila(operaciones);
    }
    return (
        <div style={{ display: "flex", marginTop: "40px" }}>
            <Grid
                container
                xs={4}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "40px",
                    marginLeft: "40px",
                }}
            >
                <img src='imagen.png' alt='' />
                <FormControl>
                    <InputLabel htmlFor='A'>A</InputLabel>
                    <Input
                        id='A'
                        name='a'
                        type='number'
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='B'>B</InputLabel>
                    <Input
                        id='B'
                        name='b'
                        type='number'
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='C'>C</InputLabel>
                    <Input
                        id='C'
                        name='c'
                        type='number'
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='D'>D</InputLabel>
                    <Input
                        id='D'
                        name='d'
                        type='number'
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='E'>E</InputLabel>
                    <Input
                        id='E'
                        name='e'
                        type='number'
                        onChange={handleChange}
                    />
                </FormControl>
                <Button
                    style={{ marginTop: "20px" }}
                    onClick={calcular}
                    color='primary'
                    variant='contained'
                >
                    Calcular
                </Button>
                <Button
                    style={{ marginTop: "20px" }}
                    onClick={() => setPila([])}
                    color='primary'
                    variant='contained'
                >
                    Borrar
                </Button>
            </Grid>
            <Grid xs={4}>
                {pila.map((texto) => (
                    <p key={texto}>{texto}</p>
                ))}
            </Grid>
        </div>
    );
};
