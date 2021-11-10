window.addEventListener("load", ()=>{
    const dropdownBtn = document.querySelector(".more-drop-btn");
	const dropOption = document.querySelector(".drop-option");

    	//Hide show drop option in filter
	dropdownBtn.addEventListener("click", ()=>{
		console.log("click")
        dropOption.classList.toggle("d-flex");
	})
})