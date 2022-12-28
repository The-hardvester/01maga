/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')

// 1. Selecionar cada item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')

    // 2. Seleccionar cada click del header
    accordionHeader.addEventListener('click', () =>{
        // 7. Crear la variable
        const openItem = document.querySelector('.accordion-open')
        
        // 5. Llamar a la funcion toggle item
        toggleItem(item)

        // 8. Validar si existe la clase
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Crear una funcion tipo constante
const toggleItem = (item) =>{
    // 3.1 Crear la variable
    const accordionContent = item.querySelector('.accordion__content')

    // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Agregar el height maximo del content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

//* Footer (current year)

const footerSpan = document.querySelector(".footer-span");

footerSpan.innerHTML = `${(new Date().getFullYear())}`;


/* Button ScroolTop */

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 700) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '700');
});


/* ToolTip Init */
 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
