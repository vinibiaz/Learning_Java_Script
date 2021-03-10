export class Conta{
    constructor(tipo,saldoInicial, cliente, agencia) {
        this._tipp =tipo;
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor) {
        let taxa = 1.1 * valor;
        if(this.tipo == "corrente")
        {
            taxa = 1.1;
        }
        const valorSacado = taxa * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}