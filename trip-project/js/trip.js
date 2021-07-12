
window.addEventListener("load", () => {
    
    let dropdownMenus = document.querySelectorAll(".dropdown-menu");
    for(let i = 0; i < dropdownMenus.length; i++) {
        let dropdownItems = dropdownMenus[i].querySelectorAll(".dropdown-item");
        for (let j = 0; j < dropdownItems.length; j++) {
            dropdownItems[j].addEventListener("click", function() {
                for (let k = 1; k < this.parentNode.childNodes.length; k+=2) {
                    this.parentNode.childNodes[k].classList.remove("active-dropdown-item");
                }
                this.classList.add("active-dropdown-item");
            });
        }
    }
    


});