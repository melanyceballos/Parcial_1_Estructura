let envios = [];

function calcularEnvio() {
    const nombre = document.getElementById('nombre').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const distancia = parseInt(document.getElementById('distancia').value);
    const descuento = document.getElementById('descuento').value;
    
    
    if (!nombre || isNaN(peso) || peso < 0 || isNaN(distancia) || distancia < 0|| (descuento)) {
        alert('Por favor complete todos los campos correctamente');
        return;
    }

    const costoPeso = peso * 2.0
    const costoDistancia = distancia * 0.5
    const subTotal = costoPeso + costoDistancia
        if (descuento = WEB10) {
            valorDescuento = subTotal * 0.10;
            totalDescuento = subTotal - valorDescuento;
        }else if (descuento = WEB20) {
            valorDescuento = subTotal * 0.20;
            totalDescuento = subTotal - valorDescuento;
        }else{
            console.error('No hay codigo de descuento')
        }
    const impuesto = totalDescuento * 0.08
    const total = totalDescuento + impuesto

    const calculo = document.getElementById('calculo');
    calculo.value = `${nombre} debe pagar el peso $${costoPeso.toLocaleString()} y la distancia $${costoDistancia.toLocaleString()} lo que le da un subtotal de $ ${subTotal.toLocaleString()} si aplica el descuento:${descuento.toLocaleString()} por lo tanto los impuestos son: ${impuesto.toLocaleString()} Para un total de: $ ${total.toLocaleString()}`;
    
    const envioObj = {
        nombre: nombre,
        peso: peso,
        distancia: distancia,
        descuento: descuento,
        costoPeso: costoPeso,
        costoDistancia: costoDistancia,
        subTotal: subTotal,
        descuento: descuento,
        impuesto: impuesto,
        total: total
    };
    
    
    envios.push(envioObj);


}
function calcularEnvio() {
    const calculo = document.getElementById('calculo');
    
    if (envios.length === 0) {
        calculo.value = 'No hay calculos almacenados.';
        return;
    }
    
    let texto = '=== TODOS LOS COSTOS DE ENVIOS ===\n\n';
    envios.forEach((item, index) => {
        texto += `${index + 1}. ${item.nombre} - Costo por peso: $${item.costoPeso.toLocaleString()} - Costo por distancia: ${item.costoDistancia.toLocaleString()} - Subtotal: ${item.subTotal.toLocaleString()} - Descuento aplicado: $${item.descuento.toLocaleString()} - Impuesto: $${item.impuesto.toLocaleString()} - Impuesto: $${item.impuesto.toLocaleString()} Total final : $${item.total.toLocaleString()}\n`;
    });
    
    calculo.value = texto;
}