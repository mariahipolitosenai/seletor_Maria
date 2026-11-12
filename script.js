//VARIÁVEL PARA GUARDAR O BOTÃO
const botao = document.getElementById('tema');
const icone = botao.querySelector('i');
//BUSCA NA MEMÓRIA DO NAVEGADOR A OPÇÃO QUE O USUÁRIO TINHA ESCOLHIDO NO TEMA
const salvaTema = localStorage.getItem('theme');

//SE O TEMA SALVO NA MEMÓRIA LOCALSTORAGE FOR TEMA ESCURO

if (salvaTema === 'dark'){
    //ADICIONA A CLASSE 'DARK-MODE' NO CORPO DA PÁGINA
    document.body.classList.add('dark-mode');
    //TROCAR O ICONE DE LUA ('FA-MOON') PARA UM ICONE DE SOL
    icone.classList.replace('fa-moon', 'fa-sun');
}

//QAUNDO CLICAR NO BOTÃO ELE VAI EXECUTAR O CÓDIGO ABAIXO

botao.addEventListerner('click', () =>{
    //LIGA OU DESLIGA A CLASSE DARK-MODE
    document.body.classList.toggle('dark-mode');

    //VERIFICAR SE A PÁGINA FICOU COM O MODO ESCURO ATIVADO
    const dark = document.body.classList.contains('dark-mode');

    //SE O MODO ESCURO ESTIVER ATIVADO (VERDADEIRO)
    if (dark){
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }else{
        //TROCA O DE SOL DE VOLTA PARA LUA
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});