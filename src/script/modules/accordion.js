/* 
 - Accordion List: é uma lista de itens empilhada verticalmente,
 que ao ser clicada, revela ou ocultam conteúdo associado a cada elemento desta lista.
 # Usa-se o evento de click em cada item que vai ser relacionad, ao seu conteúdo.
*/
export default function iniAccordion() {
    const accordionList = document.querySelectorAll("[data-accordion='accordion'] dt");
        // inicia pelo primeiro itemDt  curiosidade
        accordionList[0].classList.toggle('ativo');
        accordionList[0].nextElementSibling.classList.toggle('ativo');
        
        accordionList.forEach(itemDt => {
             ["click, mouseenter"].forEach(itemEvent =>{
                itemDt.addEventListener(itemEvent, accordion)   
            }); 

        /*  itemDt.addEventListener('mousemove', () => {
            itemDt.style.cursor = "pointer";
            itemDt.addEventListener("click", accordion);            
        }); */

        function accordion() {
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        };
    });
};

