import Gerador from './modules/createPassword'
//const eleemnto = document.querySelector('.maiuscula')

function main(){
    function escutador(){
        document.addEventListener('click',(elemento)=>{

            if(elemento.target.classList.contains('btGerar')){
              const quantidade = document.querySelector('.qtdCarac').value  
              const resultado = document.querySelector('.resultado')
              resultado.innerHTML = ""
              resultado.innerHTML = Gerador.criaSenha(quantidade, lerElementos())
            }

            if(elemento.target.classList.contains('resultado')){
                              
                const copia = document.querySelector('.resultado').innerText
                copia.placeholder('Clique para copiar')
                navigator.clipboard.writeText(copia)
                
            }

        })
   
    function lerElementos(){
        const container = document.querySelector('.container2').children
        const lista = [];
         for(let elemento of container){
            
             if(elemento.type === 'checkbox'){
                lista.push(verificarEstado(elemento))
             }
             
         }
         return lista
    }
    function verificarEstado(elemento){
        return elemento.checked
    }
    }

    escutador()
}


main()