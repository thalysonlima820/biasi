function menumobo(){
    const navmenu = document.querySelector('.navegcao-primaria')


    const ativamenu =document.querySelector('.fa-bars')
    
    ativamenu.addEventListener('click', ()=>{
        ativamenu.classList.toggle ('fa-x')
        navmenu.classList.toggle ('ativado')
    })
    
}

menumobo()


const dia = new Date()
const diahoje = dia.getDay()

const hora =dia.getHours()


var bv = document.querySelector('.bv')


var setores = document.querySelector('.setores')
var prin = document.querySelector('.setoresprin')


switch(diahoje){
    case 0:
        if(hora >= 1 && hora<6){
            bv.innerHTML =` Boa madrugada  <br> Venha Conferir as Promoçoes de domingo`
        } else if(hora >=6 && hora <12){
            bv.innerHTML =` Bom Dia  <br> Venha Conferir as Promoçoes de domingo`
        } else if(hora >=12 && hora<13){
            bv.innerHTML =` Boa Tarde <br>  Venha Conferir as Promoçoes dedomingo, Fecharemos em Breve`
        } else{
            bv.innerHTML =` Boa noite  <br>  Nesse horario ja estamos fechamo, Mas fique de olho nas promoçoes de Segunda-Feira`
        }
        break
    case 1:
        if(hora >= 1 && hora<6){
            bv.innerHTML =` Boa madrugada <br>  Venha Conferir as Promoçoes de Segunda-Feira`
            setores.innerHTML =`Promoção do setor Frios`
            prin.innerHTML = `Segunda dos Frios`
        } else if(hora >=6 && hora <12){
            bv.innerHTML =` Bom Dia <br>  Venha Conferir as Promoçoes de Segunda-Feira`
            setores.innerHTML =`Promoção do setor Frios`
            prin.innerHTML = `Segunda dos Frios`
        } else if(hora >=12 && hora<18){
            bv.innerHTML =` Boa Tarde <br>  Venha Conferir as Promoçoes de Segunda-Feira`
            setores.innerHTML =`Promoção do setor Frios`
            prin.innerHTML = `Segunda dos Frios`
        }else if(hora>=18 && hora<=20){
            bv.innerHTML =` Boa noite <br>  Venha Conferir as Promoçoes de Segunda-Feira, Estaremos aberto ate as 19:30, Corra que ainda da tempo`
            setores.innerHTML =`Promoção do setor Frios`
            prin.innerHTML = `Segunda dos Frios`
        } else{
            bv.innerHTML =` Boa noite <br>  Nesse horario ja estamos fechamo, Mas fique de olho nas promoçoes de Terça-Feira`
        }
        break
    case 2:
        if(hora >= 1 && hora<6){
            bv.innerHTML =` Boa madrugada <br>  Venha Conferir as Promoçoes de Terça-Feira`
            setores.innerHTML =`Promoção do setor de Limpeza`
            prin.innerHTML = `Terça da Limpeza`
        } else if(hora >=6 && hora <12){
            bv.innerHTML =` Bom Dia <br>  Venha Conferir as Promoçoes de Terça-Feira`
            setores.innerHTML =`Promoção do setor de Limpeza`
            prin.innerHTML = `Terça da Limpeza`
        } else if(hora >=12 && hora<18){
            bv.innerHTML =` Boa Tarde <br>  Venha Conferir as Promoçoes de Terça-Feira`
            setores.innerHTML =`Promoção do setor de Limpeza`
            prin.innerHTML = `Terça da Limpeza`
        }else if(hora>=18 && hora<=19){
            bv.innerHTML =` Boa noite <br>  Venha Conferir as Promoçoes de Terça-Feira, Estaremos aberto ate as 19:30, Corra que ainda da tempo`
            setores.innerHTML =`Promoção do setor de Limpeza`
            prin.innerHTML = `Terça da Limpeza`
        } else{
            bv.innerHTML =` Boa noite <br>  Nesse horario ja estamos fechamo, Mas fique de olho nas promoçoes de Quarta-Feira`
        }
        break
    case 3:
        if(hora >= 1 && hora<6){
            bv.innerHTML =` Boa madrugada <br>  Venha Conferir as Promoçoes de Quarta-Feira`
            setores.innerHTML =`Promoção do setor de Aves`
            prin.innerHTML = `Quarta do Framgo`
        } else if(hora >=6 && hora <12){
            bv.innerHTML =` Bom Dia <br>  Venha Conferir as Promoçoes de Quarta-Feira`
            setores.innerHTML =`Promoção do setor de Aves`
            prin.innerHTML = `Quarta do Framgo`
        } else if(hora >=12 && hora<18){
            bv.innerHTML =` Boa Tarde <br>  Venha Conferir as Promoçoes de Quarta-Feira`
            setores.innerHTML =`Promoção do setor de Aves`
            prin.innerHTML = `Quarta do Framgo`
        }else if(hora>=18 && hora<=19){
            bv.innerHTML =` Boa noite <br>  Venha Conferir as Promoçoes de Quarta-Feira, Estaremos aberto ate as 19:30, Corra que ainda da tempo`
            setores.innerHTML =`Promoção do setor de Aves`
            prin.innerHTML = `Quarta do Framgo`
        } else{
            bv.innerHTML =` Boa noite <br>  Nesse horario ja estamos fechamo, Mas fique de olho nas promoçoes de Quinta-Feira`
        }
        break
    case 4:
        if(hora >= 1 && hora<6){
            bv.innerHTML =` Boa madrugada <br>  Venha Conferir as Promoçoes de Quinta-Feira`
            setores.innerHTML =`Promoção do setor de Açougue`
            prin.innerHTML = `Quinta do Filé`
        } else if(hora >=6 && hora <12){
            bv.innerHTML =` Bom Dia <br>  Venha Conferir as Promoçoes de Quinta-Feira`
            setores.innerHTML =`Promoção do setor de Açougue`
            prin.innerHTML = `Quinta do Filé`
        } else if(hora >=12 && hora<18){
            bv.innerHTML =` Boa Tarde <br>  Venha Conferir as Promoçoes de Quinta-Feira`
            setores.innerHTML =`Promoção do setor de Açougue`
            prin.innerHTML = `Quinta do Filé`
        }else if(hora>=18 && hora<=19){
            bv.innerHTML =` Boa noite <br>  Venha Conferir as Promoçoes de Quinta-Feira, Estaremos aberto ate as 19:30, Corra que ainda da tempo`
            setores.innerHTML =`Promoção do setor de Açougue`
            prin.innerHTML = `Quinta do Filé`
        } else{
            bv.innerHTML =` Boa noite <br>  Nesse horario ja estamos fechamo, Mas fique de olho nas promoçoes de Sexta-Feira`
        }
        break
    case 5:
        if(hora >= 1 && hora<6){
            bv.innerHTML =` Boa madrugada <br>  Venha Conferir as Promoçoes de Sexta-Feira`
            setores.innerHTML =`Promoção do setor Hortifrute`
            prin.innerHTML = `Sexta  Verde`
        } else if(hora >=6 && hora <12){
            bv.innerHTML =` Bom Dia <br>  Venha Conferir as Promoçoes de Sexta-Feira`
            setores.innerHTML =`Promoção do setor Hortifrute`
            prin.innerHTML = `Sexta  Verde`
        } else if(hora >=12 && hora<18){
            bv.innerHTML =` Boa Tarde <br>  Venha Conferir as Promoçoes de Sexta-Feira`
            setores.innerHTML =`Promoção do setor Hortifrute`
            prin.innerHTML = `Sexta  Verde`
            prin.style.color = 'green' 
        }else if(hora>=18 && hora<=20){
            bv.innerHTML =` Boa noite  <br> Venha Conferir as Promoçoes de Sexta-Feira, Estaremos aberto ate as 19:30, Corra que ainda da tempo`
            setores.innerHTML =`Promoção do setor Hortifrute`
            prin.innerHTML = `Sexta  Verde`
        } else{
            bv.innerHTML =` Boa noite <br>  Nesse horario ja estamos fechamo, Mas fique de olho nas promoçoes de Sabado`
        }

        

        break
    case 6:
        if(hora >= 1 && hora<6){
            bv.innerHTML =` Boa madrugada <br>  Venha Conferir as Promoçoes de Sabado`
        } else if(hora >=6 && hora <12){
            bv.innerHTML =` Bom Dia <br>  Venha Conferir as Promoçoes de Sabado`
        } else if(hora >=12 && hora<18){
            bv.innerHTML =` Boa Tarde <br>  Venha Conferir as Promoçoes de Sabado`
            setores.innerHTML =`Promoçoes de Sabado`
            prin.innerHTML = `Promoções do Dia`
        }else if(hora>=18 && hora<=19){
            bv.innerHTML =` Boa noite <br>  Venha Conferir as Promoçoes de Sabado, Estaremos aberto ate as 19:30, Corra que ainda da tempo`
        } else{
            bv.innerHTML =` Boa noite <br>  Nesse horario ja estamos fechamo, Mas fique de olho nas promoçoes de Domingo`
        }
        break
}


let count = 1
document.getElementById('slide1').checked = true;

setInterval( function(){
    nextimg()
}, 3000)

function nextimg(){
    count ++;
    if(count>4){
        count =1
    }

    document.getElementById('slide'+count).checked = true;
}