window.addEventListener("load", ()=>{
    const dropdownBtn = document.querySelector(".more-drop-btn");
	const dropOption = document.querySelector(".drop-option");
	const relevanceBtn = document.querySelector('.relevance-btn');
	const newestBtn = document.querySelector('.newest-btn');

    	//Hide show drop option in filter
	dropdownBtn.addEventListener("click", ()=>{
        dropOption.classList.toggle("d-flex");
	
	})

	relevanceBtn.addEventListener("click", ()=>{

		relevanceBtn.classList.add('filter-select');
		newestBtn.classList.remove('filter-select');

	})

	newestBtn.addEventListener('click', ()=>{

		newestBtn.classList.add('filter-select');
		relevanceBtn.classList.remove('filter-select');

	})
})