function calcular() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminante = b ** 2 - 4 * a * c;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('resultado').innerText = 'Ingrese coeficientes válidos.';
    } else if (a === 0) {
        document.getElementById('resultado').innerText = 'El coeficiente "a" no puede ser cero.';
    } else if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.getElementById('resultado').innerText = `Las soluciones son: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    } else if (discriminante === 0) {
        const x = -b / (2 * a);
        document.getElementById('resultado').innerText = `La solución es: x = ${x.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'La ecuación no tiene soluciones reales.';
    }
}

function mostrarParrafo() {
    const parrafo = document.getElementById('parrafo');
    parrafo.style.display = 'block';
}
