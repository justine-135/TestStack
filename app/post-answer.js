window.addEventListener("load", ()=>{
    const postBtn = document.querySelector(".post-btn");
    const editable = document.querySelector(".note-editable").childNodes;
    const answersForum = document.querySelector(".answer-result");

    postBtn.addEventListener('click', ()=>{
        // for (let node of editable){
        //     answersForum.appendChild(node);
        //     console.log(node);
        // }

        editable.forEach((child)=>{

            answersForum.appendChild(child);
         
            
        })



    })
})