(function (root, factory) {
    const api = factory();

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    }

    root.EstadisticasExamenes = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
    function calcularEstadisticasExamenes(examenes = [], resultados = []) {
        return examenes.map((examen) => {
            const resultadosExamen = (resultados || []).filter((resultado) => {
                if (!resultado) return false;
                return resultado.codigoExamen === examen.codigo || resultado.tituloExamen === examen.titulo;
            });

            const totalEstudiantes = resultadosExamen.length;
            const promedioPorcentaje = totalEstudiantes > 0
                ? Number((resultadosExamen.reduce((sum, resultado) => sum + Number(resultado.porcentajeObtenido || 0), 0) / totalEstudiantes).toFixed(1))
                : 0;

            const aprobados = totalEstudiantes > 0
                ? resultadosExamen.filter((resultado) => Boolean(resultado.aprobado)).length
                : 0;

            const porcentajeAprobados = totalEstudiantes > 0
                ? Math.round((aprobados / totalEstudiantes) * 100)
                : 0;

            return {
                codigo: examen.codigo,
                titulo: examen.titulo,
                porcentajeAprobacion: Number(examen.porcentaje || 0),
                estudiantes: totalEstudiantes,
                promedioPorcentaje,
                aprobados,
                porcentajeAprobados
            };
        });
    }

    return {
        calcularEstadisticasExamenes
    };
});
