
document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        
        

        if (parent.classList.contains('accordion-item--active')) {
            parent.classList.remove('accordion-item--active');


        } else {
            document
                .querySelectorAll('.accordion-item')
                .forEach((child) => child.classList.remove('accordion-item--active'))

            
            parent.classList.add('accordion-item--active')
        }


    })
)

document.querySelectorAll('.accordion-item__trigger').forEach((item) => 
 	item.addEventListener('click',() => {
 		let arr = document.querySelectorAll('.arrow')
 		let arrow = document.querySelectorAll('.accordion-item');
 		for(let i = 0; i < arrow.length; i++){
 			if (arrow[i].classList.contains('accordion-item--active')){
 				arr[i].classList.add('arrowClose')
 			}else{
 				arr[i].classList.remove('arrowClose')
 			}
 		}

 		})
 	 
 	)
 	







