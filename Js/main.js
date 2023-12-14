const themesWorks = [
    "Grupo Nº 1: Micro-controladores",
    "Grupo Nº 2: Linguagem Assembly",
    "Grupo Nº 3: Clock de um Computador",
    "Grupo Nº 4: Gabinete",
    "Grupo Nº 5: Fonte de alimentação",
    "Grupo Nº 6: Placa mãe",
    
    "Grupo Nº 8: Armazenamento em massa",
    "Grupo Nº 9: Gestão de memória"
];

let TheMeselected =[]

const storeData = localStorage.getItem("Theme") ||[];

function generateTheme (){
    const themeContainer = document.getElementById("theme-container");
    const n =themesWorks.length;
    let   themeselect;


    for(let i= n -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1))
        const temp = themesWorks[i];
        themesWorks[i] = themesWorks[j];
        themesWorks[j] = temp;
              
        
    }
    themeselect = themesWorks[0];
    themeContainer.textContent= themeselect
    TheMeselected.push(themeselect);
    localStorage.setItem("Theme", JSON.stringify(TheMeselected) )
    if(TheMeselected.includes(themeselect)){
        
        TheMeselected.filter((item, element, array) => array.indexOf(item) === element)
        themeselect = TheMeselected[0]
    }
    
       
       

        if(TheMeselected.length === themesWorks.length){
            themeContainer.textContent= "Fim"
            TheMeselected = []
            localStorage.setItem("Theme", JSON.stringify(TheMeselected))

             return themeselect= "";
           
        }
    


    console.log(TheMeselected.length, themesWorks.length)
    

    

}



document.getElementById("button").addEventListener("click", generateTheme);