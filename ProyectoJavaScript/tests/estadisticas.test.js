const assert = require('assert');
const { calcularEstadisticasExamenes } = require('../Proyecto JavaScript/PortalCreaciónExamen/estadisticas.js');

const examenes = [
  { codigo: 'EX-001', titulo: 'JavaScript Básico', porcentaje: 70 },
  { codigo: 'EX-002', titulo: 'DOM Avanzado', porcentaje: 80 }
];

const resultados = [
  { codigoExamen: 'EX-001', porcentajeObtenido: 80, aprobado: true },
  { codigoExamen: 'EX-001', porcentajeObtenido: 60, aprobado: false },
  { codigoExamen: 'EX-002', porcentajeObtenido: 90, aprobado: true }
];

const estadisticas = calcularEstadisticasExamenes(examenes, resultados);

assert.strictEqual(estadisticas[0].codigo, 'EX-001');
assert.strictEqual(estadisticas[0].estudiantes, 2);
assert.strictEqual(estadisticas[0].promedioPorcentaje, 70);
assert.strictEqual(estadisticas[0].aprobados, 1);
assert.strictEqual(estadisticas[0].porcentajeAprobados, 50);
assert.strictEqual(estadisticas[1].estudiantes, 1);
assert.strictEqual(estadisticas[1].promedioPorcentaje, 90);

console.log('Pruebas de estadísticas OK');
