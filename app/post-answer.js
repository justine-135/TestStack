window.addEventListener("load", ()=>{
    const postBtn = document.querySelector(".post-btn");
    const editable = document.querySelector(".note-editable");
    const answersResult = document.querySelector(".answer-result");
    const answerForum = document.querySelector(".answers-forum");
    const count = document.querySelector(".all-answer-count");
    const label = document.querySelector('.answer-label');

    postBtn.addEventListener('click', ()=>{

        let cln = editable.cloneNode(true);

        cln.setAttribute("class", "result-clone");
        cln.setAttribute("contenteditable", "false");


        answersResult.appendChild(cln);
    })
    
    const updateCount = () => {
        if (answerForum.childElementCount > 1){
            label.innerHTML = "Answers";
        }
        count.innerHTML = answerForum.childElementCount;

    }

    updateCount();
})