let envios = [];

function calcularEnvio() {
    const nombre = document.getElementById('nombre').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const distancia = parseInt(document.getElementById('distancia').value);
    const descuento = document.getElementById('descuento').value;
    

    if (!nombre || isNaN(peso) || peso < 0 || isNaN(distancia) || distancia < 0) {
        alert('Por favor complete todos los campos correctamente');
        return;
    }

    const costoPeso = peso * 2.0;
    const costoDistancia = distancia * 0.5;
    const subTotal = costoPeso + costoDistancia;
    
    let valorDescuento = 0;
    let totalDescuento = subTotal; 
    

    if (descuento === "WEB10") {
        valorDescuento = subTotal * 0.10;
        totalDescuento = subTotal - valorDescuento;
    } else if (descuento === "WEB20") {
        valorDescuento = subTotal * 0.20;
        totalDescuento = subTotal - valorDescuento;
    } else if (descuento !== "") {
        console.log('Código de descuento no válido');
    }
    
    const impuesto = totalDescuento * 0.08;
    const total = totalDescuento + impuesto;

    const calculo = document.getElementById('calculo');
    calculo.value = `${nombre} debe pagar:\n` +
        `Por peso: $${costoPeso.toLocaleString()}\n` +
        ` Por distancia: $${costoDistancia.toLocaleString()}\n` +
        `Subtotal: $${subTotal.toLocaleString()}\n` +
        `Descuento aplicado: $${valorDescuento.toLocaleString()}\n` +
        `Total con descuento: $${totalDescuento.toLocaleString()}\n` +
        `Impuestos (8%): $${impuesto.toLocaleString()}\n` +
        `Total final: $${total.toLocaleString()}`;
    
    const envioObj = {
        nombre: nombre,
        peso: peso,
        distancia: distancia,
        descuento: descuento || "Sin descuento", 
        valorDescuento: valorDescuento,
        costoPeso: costoPeso,
        costoDistancia: costoDistancia,
        subTotal: subTotal,
        totalDescuento: totalDescuento,
        impuesto: impuesto,
        total: total
    };
    
    envios.push(envioObj);
}


