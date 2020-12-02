
var pasoBot = 0;
var verbos = ['analizar', 'enumerar', 'relatar', 'calcular', 'establecer', 'replicar', 'categorizar', 'evaluar', 'reproducir', 'comparar', 'explicar', 'revelar', 'compilar', 'examinar', 'reproducir', 'contrastar', 'exponer', 'plantear', 'crear', 'formular', 'planear', 'definir', 'fundamentar', 'presentar', 'demostrar', 'generar', 'probar', 'desarrollar', 'identificar', 'producir', 'describir', 'inferir', 'proponer', 'diagnosticar', 'mostrar', 'situar', 'discriminar', 'orientar', 'tasar', 'diseñar', 'oponer', 'trazar', 'efectuar', 'reconstruir', 'valuar', ' advertir', 'determinar', 'indicar', 'analizar', 'designar', 'interpretar', 'basar', 'descomponer', 'justificar', 'calcular', 'describir', 'mencionar', 'calificar', 'discriminar', 'mostrar', 'categorizar', 'distinguir', 'operacionalizar', 'comparar', 'establecer', 'organizar', 'componer', 'enunciar', 'registrar', 'conceptuar', 'enumerar', 'relacionar', 'considerar', 'especificar', 'resumir', 'contrastar', 'estimar', 'seleccionar', 'deducir', 'examinar', 'separar', 'definir', 'explicar', 'sintetizar', 'demostrar', 'fraccionar', 'sugerir', 'detallar', 'identificar', 'terminar'];
var elementos = [];
elementos["objetivo"] = "";
elementos["donde"] = "";
elementos["como"] = "";
elementos["porque"] = "";
elementos["problema"] = "";
elementos["hipotesis"] = "";
elementos["metodologia"] = "";
elementos["marco"] = "";
elementos["estudio"] = "";
elementos["interrogantes"] = "";
elementos["argumentos"] = "";
elementos["unidades"] = "";
elementos["variables"] = "";
elementos["universo"] = "";
elementos["muestra"] = "";



function busqueda(){
    var verboEncontrado = "";
    for (var i = 0; i < verbos.length; i++) { 
        var pos = elementos["objetivo"].indexOf(verbos[i]);
        if (pos != -1){
            verboEncontrado = verbos[i];
        }
    }
    return verboEncontrado
}

function title(){
    var verb = busqueda();
    var lista = elementos["objetivo"].split(" ");
    var posicion = lista.indexOf(verb);
    var sustantivo = sustantivos[verb];
    lista[posicion] = sustantivo ;
    var titulo = "";
    for (var i = 0; i < lista.length; i++) { 
        titulo = titulo + lista[i] + " ";
    }
    return titulo


    
}
var tituloActual = "Aun no hay nada";
function entrada(id) {
    const input = document.getElementById(id);
    const entr = input.value;
    elementos[id] = entr;
    console.log(elementos[id]);
    tituloActual = title();
    
}

function moverse(x) {
    if (x == 1) {
        pasoBot = pasoBot + 1;
    }
    else {
        pasoBot = pasoBot - 1;
    }
    if (pasoBot < 0 || pasoBot > 20) {
        pasoBot = 0;
    }
    document.getElementById("pasoDelBot").innerHTML = pasoBot;

}

function botHelp() {
    switch (pasoBot) {
        case 0:
            document.getElementById("bot").innerHTML = "";
            break;
        case 1:
            document.getElementById("bot").innerHTML = "Enmarca al problema (" + elementos["problema"] + ") en un contexto teórico (" + elementos["marco"] + ") delimitando el objeto de estudio. (" + elementos["estudio"] + ")";
            break;

        case 2:
            document.getElementById("bot").innerHTML = `Se dan a conocer la o las interrogantes (` + elementos["interrogantes"] + `) o quedan implícitas en 
            la redacción del texto(dependiendo de la forma en la que es presentado el problema(`+ elementos["problema"] + `)).`;
            break;

        case 3:
            document.getElementById("bot").innerHTML = `Es proposición o enunciado que plantea
            una suposición lógica y aceptable con base
            en el marco teórico(`+ elementos["marco"] + `).
            
            Es una respuesta tentativa al problema(`+ elementos["problema"] + `)
            planteado.
            
            Tiene 3 partes:"`;
            break;

        case 4:
            document.getElementById("bot").innerHTML = `A) Las unidades de observación(` + elementos["unidades"] + `),
            representadas por todos aquellos elementos sobre los
            cuales va a recaer la investigación`;
            break;

        case 5:
            document.getElementById("bot").innerHTML = `B) Las variables(` + elementos["variables"] + `), que son las características o
            elementos de carácter cualitativo o cuantitativo que
            serán objeto(`+ elementos["estudio"] + `) de investigación con respecto a las
            unidades de observación(`+ elementos["unidades"] + `) y…`;
            break;

        case 6:
            document.getElementById("bot").innerHTML = `C) Los términos lógicos o relacionales, que
            sustentan las relaciones entre las unidades de
            observación(`+ elementos["unidades"] + `) y las variables(` + elementos["variables"] + `).`;
            break;

        case 7:
            document.getElementById("bot").innerHTML = `5.1 El objetivo(` + elementos["objetivo"] + `) General:

            Especifica qué es lo que se
            quiere lograr con la
            investigación.
            
            Técnicamente es el título de la
            investigación, pero con un verbo
            en infinitivo.`;
            break;

        case 8:
            document.getElementById("bot").innerHTML = `5.2 Objetivos Específicos:

            Dividen el objetivo(`+ elementos["objetivo"] + `) general en
            tantas partes como sea necesario`;
            break;

        case 9:
            document.getElementById("bot").innerHTML = `Presenta los argumentos(` + elementos["argumentos"] + `) o razones por los
            cuales el investigador decidió realizar la
            investigación, la importancia del problema(`+ elementos["problema"] + `)
            y/o posibles aplicaciones`;
            break;

        case 10:
            document.getElementById("bot").innerHTML = `Proporciona al lector una clara idea sobre el
            problema(`+ elementos["problema"] + `), el objetivo(` + elementos["objetivo"] + `), la hipótesis(` + elementos["hipotesis"] + `) y
            la metodología(`+ elementos["metdologia"] + `) de la investigación`;
            break;

        case 11:
            document.getElementById("bot").innerHTML = `Permite identificar claramente el objetivo(` + elementos["objetivo"] + `) del trabajo
            que se está realizando:
            
            Especifica en pocas palabras dónde(`+ elementos["donde"] + `), cómo(` + elementos["como"] + `) y
            cuándo(`+ elementos["porque"] + `) se realizará la investigación.`;
            break;

        case 12:
            document.getElementById("bot").innerHTML = `Fundamentos teóricos que sustentan la
            investigación.
            
            Antecedentes de la investigación.
            
            Describe la relación que existe entre
            cada antecedente y el estudio que está
            realizando.
            
            Al menos se mencionan todos los temas
            que están relacionados con la
            investigación.`;
            break;

        case 13:
            document.getElementById("bot").innerHTML = `8.1 Explicación de la forma cómo se llevará a cabo el estudio
            y los pasos que incluye.
            
            Se debe escribir la definición operacional de las variables(`+ elementos["variables"] + `),
            el tipo y las formas de medirla.`;
            break;

        case 14:
            document.getElementById("bot").innerHTML = "Universo(" + elementos["universo"] + ") y muestra(" + elementos["muestra"] + ")";
            break;

        case 15:
            document.getElementById("bot").innerHTML = "8.3 Diseñogeneral de la investigación";
            break;

        case 16:
            document.getElementById("bot").innerHTML = "8.4 Descripción y operacionalización de todas las variables(" + elementos["variables"] + ").";
            break;

        case 17:
            document.getElementById("bot").innerHTML = `9.1 Los resultados de la investigación son
            presentados, en forma de:
            
            Cuadros estadísticos
            
            Gráficos
            
            Mapas
            
            Tablas
            
            Diagramas
            
            Medidas de resúmenes (tasas, proporciones,
            porcentajes, promedios, entre otros)`;
            break;

        case 18:
            document.getElementById("bot").innerHTML = `8.2 Conclusiones: Tienen como
            función proporcionar una visión
            integral de los resultados obtenidos en
            la investigación y las inferencias que se
            desprenden de ellos.
            
            Se extraen de las relaciones existentes
            entre lo que se investigó, lo que se
            pretendía alcanzar, la forma que se
            utilizó para ello y los resultados que se
            obtuvieron bajo el conocimiento de la
            delimitación del problema.`;
            break;

        case 19:
            document.getElementById("bot").innerHTML = "8.3 Líneas de investigación a futuro";
            break;

        case 20:
            document.getElementById("bot").innerHTML = `12. Referencias bibliográficas y citas

            (del marco teórico)`;
            break;



        default:
            console.log("El bot esta funcionando !");
    }
}


function bot(x) {
    moverse(x);
    botHelp();
}
var contador = 0;
function crearDocumento() {
    document.getElementById("documento").innerHTML = `
    <h3>Protocolo de Investigación</h3> 
    <h4>1. Título de la investigación: </h4>
    `+tituloActual+`

    <h4>2. Resumen de la investigación (abstract): </h4>
    Proporciona al lector una clara idea sobre el
    problema(`+ elementos["problema"] + `), el objetivo(` + elementos["objetivo"] + `), la hipótesis(` + elementos["hipotesis"] + `) y
    la metodología(`+ elementos["metdologia"] + `) de la investigación

    <h4>3. Planteamiento del problema:     </h4>
    Enmarca al problema (` + elementos["problema"] + `) en un contexto teórico (` + elementos["marco"] + `) delimitando el objeto de estudio. (` + elementos["estudio"] + `)
    
    Se dan a conocer la o las interrogantes (`+ elementos["interrogantes"] + `) o quedan implícitas en 
    la redacción del texto(dependiendo de la forma en la que es presentado el problema(`+ elementos["problema"] + `)).
    
    Presenta los argumentos(`+ elementos["argumentos"] + `) o razones por los
    cuales el investigador decidió realizar la
    investigación, la importancia del problema(`+ elementos["problema"] + `)
    y/o posibles aplicaciones

    <h4>4. Objetivos de la investigación: </h4>
    4.1 El objetivo(`+ elementos["objetivo"] + `) General:

    Especifica qué es lo que se
    quiere lograr con la
    investigación.
            
    Técnicamente es el título de la
    investigación, pero con un verbo
    en infinitivo.

    4.2 Objetivos Específicos:

    Dividen el objetivo(`+ elementos["objetivo"] + `) general en
    tantas partes como sea necesario.

    <h4>5. Hipótesis </h4>
    Es proposición o enunciado que plantea
    una suposición lógica y aceptable con base
    en el marco teórico(`+ elementos["marco"] + `).
            
    Es una respuesta tentativa al problema(`+ elementos["problema"] + `)
    planteado.
            
    Tiene 3 partes: <br>
    <br>
    A) Las unidades de observación(` + elementos["unidades"] + `),
            representadas por todos aquellos elementos sobre los
            cuales va a recaer la investigación<br>
            <br>
    B) Las variables(` + elementos["variables"] + `), que son las características o
            elementos de carácter cualitativo o cuantitativo que
            serán objeto(`+ elementos["estudio"] + `) de investigación con respecto a las
            unidades de observación(`+ elementos["unidades"] + `) y…<br>
            <br>
   C) Los términos lógicos o relacionales, que
            sustentan las relaciones entre las unidades de
            observación(`+ elementos["unidades"] + `) y las variables(` + elementos["variables"] + `).<br>
            <br>
    <h4>6. Marco teórico (fundamento teórico, estado del arte)</h4>
    Fundamentos teóricos que sustentan la
    investigación.
            
    Antecedentes de la investigación.
            
    Describe la relación que existe entre
    cada antecedente y el estudio que está
    realizando.      
    Al menos se mencionan todos los temas
    que están relacionados con la
    investigación.
    
    <h4>7. Metodología de la investigación:    </h4>
    7.1 Explicación de la forma cómo se llevará a cabo el estudio
    y los pasos que incluye.
            
    Se debe escribir la definición operacional de las variables(`+ elementos["variables"] + `),
    el tipo y las formas de medirla.<br>
    <br>
    Universo(` + elementos["universo"] + `) y muestra(` + elementos["muestra"] + `)
    7.3 Diseñogeneral de la investigación<br>
    <br>
    7.4 Descripción y operacionalización de todas las variables(` + elementos["variables"] + `).
    <br>

    <h4>8.Análisis y discusión de los resultados </h4>
    9.1 Los resultados de la investigación son presentados, en forma de: <br>
    <br>

    Cuadros estadísticos<br>
    Gráficos<br>
    Mapas<br>
    Tablas<br>
    Diagramas<br>
    Medidas de resúmenes (tasas, proporciones, porcentajes, promedios, entre otros) <br>


    <h4>9. Conclusiónes</h4>
    8.2 Conclusiones: Tienen como función proporcionar una visión integral de los resultados obtenidos en la investigación y las inferencias que se desprenden de ellos. 
    <br>
    Se extraen de las relaciones existentes entre lo que se investigó, lo que se pretendía alcanzar, la forma que se utilizó para ello y los resultados que se obtuvieron bajo el conocimiento de la delimitación del problema. 
     

    <h4>10.Metodología de la investigación:  </h4>
    8.3 Líneas de investigación a futuro

    <h4> 11.  Metodología de la investigación:  </h4>
    12. Referencias bibliográficas y citas
    (del marco teórico)
    `;
}

var sustantivos = [];
sustantivos["analizar"] = "Análisis de";
sustantivos["enumerar"] = "Enumeración de";
sustantivos["relatar"] = "";
sustantivos["calcular"] = "Cálculo de";
sustantivos["establecer"] = "Establecimiento de";
sustantivos["replicar"] = "Réplica sobre";
sustantivos["categorizar"] = "Categorización de";
sustantivos["evaluar"] = "Evaluación de";
sustantivos["reproducir"] = "Reproducción de";
sustantivos["comparar"] = "Comparación de";
sustantivos["explicar"] = "Explicación de";
sustantivos["revelar"] = "Revelación de";
sustantivos["compilar"] = "Compilación de";
sustantivos["examinar"] = "Examinación de";
sustantivos["reproducir"] = "Reproducción de";
sustantivos["contrastar"] = "Contraste entre";
sustantivos["exponer"] = "Exposición de";
sustantivos["plantear"] = "Planteamiento de";
sustantivos["crear"] = "Creación de";
sustantivos["formular"] = "Formulación de";
sustantivos["planear"] = "Planeación de";
sustantivos["definir"] = "Definición de";
sustantivos["fundamentar"] = "Fundamentación de";
sustantivos["presentar"] = "Presentación de";
sustantivos["demostrar"] = "Demostración de";
sustantivos["generar"] = "Generación de";
sustantivos["probar"] = "Comprobación de";
sustantivos["desarrollar"] = "Desarrollo de";
sustantivos["identificar"] = "Identifiación de";
sustantivos["producir"] = "Producción de";
sustantivos["describir"] = "Descripción de";
sustantivos["inferir"] = "Inferencia de";
sustantivos["proponer"] = "Propuesta de";
sustantivos["diagnosticar"] = "Diagnóstico de";
sustantivos["mostrar"] = "Muestra de";
sustantivos["situar"] = "Situación de";
sustantivos["discriminar"] = "Discriminación de";
sustantivos["orientar"] = "Orientación de";
sustantivos["tasar"] = "Tasación de";
sustantivos["diseñar"] = "Diseño de";
sustantivos["oponer"] = "Oposición entre";
sustantivos["trazar"] = "Trazo de";
sustantivos["efectuar"] = "Efectos de";
sustantivos["reconstruir"] = "Reconstrucción de";
sustantivos["valuar"] = "Valuación de";
sustantivos["advertir"] = "Consecuencias de";
sustantivos["determinar"] = "Determinación de";
sustantivos["indicar"] = "Indices de";
sustantivos["analizar"] = "Análisis de ";
sustantivos["designar"] = "Designación de";
sustantivos["interpretar"] = "Interpretación de";
sustantivos["basar"] = "Bases de";
sustantivos["descomponer"] = "Descomposición de";
sustantivos["justificar"] = "Justificación de";
sustantivos["calcular"] = "Cálculo de";
sustantivos["describir"] = "Descripción de";
sustantivos["mencionar"] = "Mención de";
sustantivos["calificar"] = "Calificación de";
sustantivos["discriminar"] = "Discriminación de";
sustantivos["mostrar"] = "Muestra de";
sustantivos["categorizar"] = "Categorización de";
sustantivos["distinguir"] = "Distinción entre";
sustantivos["operacionalizar"] = "Operacionalización de";
sustantivos["comparar"] = "Comparación entre ";
sustantivos["establecer"] = "Establecimiento de";
sustantivos["organizar"] = "Organización de";
sustantivos["componer"] = "Composición de";
sustantivos["enunciar"] = "Enunciados sobre";
sustantivos["registrar"] = "Registro de";
sustantivos["conceptuar"] = "Conceptualización de";
sustantivos["enumerar"] = "Ennumeración de";
sustantivos["relacionar"] = "Relación entre";
sustantivos["considerar"] = "Consideración de";
sustantivos["especificar"] = "Especificación de";
sustantivos["resumir"] = "Resumen de ";
sustantivos["contrastar"] = "Contraste entre";
sustantivos["estimar"] = "Estimación de";
sustantivos["seleccionar"] = "Selección de";
sustantivos["deducir"] = "Deducción de";
sustantivos["examinar"] = "Examinación de";
sustantivos["separar"] = "Separación de";
sustantivos["definir"] = "Definición de";
sustantivos["explicar"] = "Explicación de";
sustantivos["sintetizar"] = "Síntesis de";
sustantivos["demostrar"] = "Demostración de";
sustantivos["fraccionar"] = "Fraccionamiento de";
sustantivos["sugerir"] = "Sugerencia de";
sustantivos["detallar"] = "Detalle de";
sustantivos["identificar"] = "Identificación de";
sustantivos["terminar"] = "Terminación de";
sustantivos["demostrar"] = "Demostración de";
sustantivos["construir"] = "Construcción de";