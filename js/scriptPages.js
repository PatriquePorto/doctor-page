/*Mobile Menu Functions */
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('menu-mobile')
  nav.classList.toggle('activemobile')
  const activemobile = nav.classList.contains('activemobile')
  event.currentTarget.setAttribute('aria-expanded', activemobile)
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

 // Javascript for Banner Medicine Onlinen AutoPlay

 const slidesMedicine = document.querySelectorAll('.medicineslide');
  
    let currentSlideMedicine = 1;

 const repeatMedicine = function(medicineactiveClass){
  let medicineactive = document.getElementsByClassName('medicineactive');
  let i = 1;

  let repeater = () => {
    setTimeout(function(){
      [...medicineactive].forEach((medicineactiveSlide) => {
        medicineactiveSlide.classList.remove('medicineactive');
      });

    slidesMedicine[i].classList.add('medicineactive');
    
    i++;

    if(slidesMedicine.length == i){
      i = 0;
    }
    if(i >= slidesMedicine.length){
      return;
    }
    repeater();
  }, 15000);
  }
  repeater();
}
repeatMedicine();