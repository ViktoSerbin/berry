// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const clearFilterBtn = document.querySelector('.filter-active__clear');
const filterItemCategory = document.querySelectorAll('.filter-active__item');

if(clearFilterBtn && filterItemCategory) {
    clearFilterBtn.addEventListener('click', ()=> {
        filterItemCategory.forEach((item)=> {
            item.remove();
        });
    });
}

document.addEventListener("click", (e) => {
    const targetElement = e.target;
    if (targetElement.closest('.filter-active__delete')) {
        targetElement.closest('.filter-active__item').remove();
    }

    if (targetElement.closest('.filters-products__filter-btn')) {
        const bodyProductsItems = document.querySelector('.body-products__items');
        if (bodyProductsItems) {
            bodyProductsItems.classList.toggle('active-filters');
        }
    }
    
});


