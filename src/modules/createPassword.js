export default class Gerador{

    static criaSenha(qtd, lista){
        const senha = []
        
        const numeroVerificacoes = qtd == 1 ? 1 : Math.floor(qtd/this.elementosnoArrayTrue(lista))
        for(let i = 0 ; i <= numeroVerificacoes; i++){
        lista[0] && senha.push(this.minusculo())
        lista[1] && senha.push(this.maiusculo())
        lista[2] && senha.push(this.numero())
        lista[3] && senha.push(this.simbolo())
        }
        
        return qtd === 1 ? senha.join("") : senha.slice(0, qtd).join("")
    }
    static elementosnoArrayTrue(lista){
        let contador = 0
        for(let elemento of lista){
            
            if(elemento === true){
                contador++
            }
        }
        return contador
    }
   static  maiusculo(){
        return String.fromCharCode(this.aleatorio(65, 90))
    }

   static minusculo(){
        return String.fromCharCode(this.aleatorio(97, 122))
    }

   static numero(){
        return String.fromCharCode(this.aleatorio(48, 57))
    }

   static simbolo(){
        const simbolosArray = ['#', '$', '%','@','&']
        return simbolosArray[this.aleatorio(0, simbolosArray.length)]
    }
   
    static aleatorio(min, max){
        return Math.floor(Math.random()* (max-min)+min)
    }

}
