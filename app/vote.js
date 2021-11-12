window.addEventListener("load", ()=>{
    const upVoteQuestion = document.querySelector(".vote-up-question");
    const downVoteQuestion = document.querySelector(".vote-down-question");
    const voteCount = document.querySelector(".vote-count");

    const upVoteAnswer = document.querySelector(".vote-up-answer");
    const downVoteAnswer = document.querySelector(".vote-down-answer");
    const answerCount = document.querySelector(".answer-count");

    let voteCountTemp = voteCount.innerHTML;
    let answerCountTemp = answerCount.innerHTML;

      upVoteQuestion.addEventListener("click", () => {
        upVoteQuestion.childNodes[1].style.color = "orange";
        downVoteQuestion.childNodes[1].style.color = "rgb(197, 197, 197)";
        voteCount.innerHTML = parseInt(voteCountTemp) + 1;
        upVoteQuestion.disabled = true;
        downVoteQuestion.disabled = false;
      });

      downVoteQuestion.addEventListener("click", () => {
        downVoteQuestion.childNodes[1].style.color = "orange";
        upVoteQuestion.childNodes[1].style.color = "rgb(197, 197, 197)";
        voteCount.innerHTML = parseInt(voteCountTemp) - 1;
        downVoteQuestion.disabled = true;
        upVoteQuestion.disabled = false;
      });

      upVoteAnswer.addEventListener("click", () => {
        upVoteAnswer.childNodes[1].style.color = "orange";
        downVoteAnswer.childNodes[1].style.color = "rgb(197, 197, 197)";
        answerCount.innerHTML = parseInt(answerCountTemp) + 1;
        upVoteAnswer.disabled = true;
        downVoteAnswer.disabled = false;
      });

      downVoteAnswer.addEventListener("click", () => {
        downVoteAnswer.childNodes[1].style.color = "orange";
        upVoteAnswer.childNodes[1].style.color = "rgb(197, 197, 197)";
        answerCount.innerHTML = parseInt(answerCountTemp) - 1;
        downVoteAnswer.disabled = true;
        upVoteAnswer.disabled = false;
      });
})