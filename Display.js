class Display{//permite interacción con botones y mostrar resultado pantalla.
    constructor(displayAnterior, displayActual){
        this.displayActual = displayActual;
        this.displayAnterior = displayAnterior;
        this.calculador = new Calculator();
        this.typeOperation = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrarNumero(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirNumero();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.typeOperation = undefined;
        this.imprimirNumero();
    }
    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirNumero();
    }
    
    contar(tipo){
        this.typeOperation !== 'igual' && this.calcular();
        this.typeOperation = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirNumero();

    }
    
    imprimirNumero(){
        this.displayActual.textContent = this.valorActual;
        this.displayAnterior.textContent = `${this.valorAnterior} ${this.signos[this.typeOperation] || ''}`;
    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.typeOperation](valorAnterior, valorActual);

    }
    
}