export interface Exercise {
    id:                  number;
    categoria:           Categoria;
    titulo:              string;
    complejidad:         number;
    zona:                string;
    dificultad:          Dificultad;
    preparacion:         number;
    duracion:            number;
    musculosPorcentajes: Array<number | string>;
    image:               string;
    poster:              string;
    video:               string;
    descripcion1?:       string;
    descripcion2:        string;
    ejercicio:           string;
    ejercicio2:          string;
    ejercicio3:          string;
    musculos:            string;
    errores:             Errores;
}

export enum Categoria {
    Core = "core",
    Inferior = "inferior",
    Superior = "superior",
}

export interface Dificultad {
    facil:   Dificil;
    normal:  Dificil;
    dificil: Dificil;
}

export interface Dificil {
    reps: number;
    desc: Desc;
}

export enum Desc {
    The1M = "1m",
    The20S = "20s",
    The40S = "40s",
}

export interface Errores {
    error1: string;
    error2: string;
    error3: string;
}
