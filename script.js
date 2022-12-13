let questions = document.querySelectorAll('.acc-qtn');
let answers = document.querySelectorAll('.acc-ans');

//
// let questions = document.querySelectorAll('.acc-qtn');
// let answers = document.querySelectorAll('.acc-ans');

questions.forEach((qtn)=>{
  qtn.addEventListener('click', (e) => {
    answers.forEach((ans) => {
      if(
        e.target.nextElementSibling !== ans &&
        ans.classList.contains('active')
      ){
      ans.classList.remove('active');
      questions.forEach((qtn)=>{qtn.classList.remove('active');
      })
      }
    });
    const panel = qtn.nextElementSibling;
    panel.classList.toggle("active");
    qtn.classList.toggle("active");
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".acc-qtn")) {
    questions.forEach((qtn) => qtn.classList.remove("active"));
    answers.forEach((ans) => ans.classList.remove("active"));
  }
};



//
// const questions = document.querySelectorAll(".accordion-header");
// const answers = document.querySelectorAll(".accordion-body");

// questions.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     answers.forEach((acc) => {
//       if (
//         e.target.nextElementSibling !== acc &&
//         acc.classList.contains("active")
//       ) {
//         acc.classList.remove("active");
//         questions.forEach((btn) => btn.classList.remove("active"));
//       }
//     });
//
//     const panel = btn.nextElementSibling;
//     panel.classList.toggle("active");
//     btn.classList.toggle("active");
//   });
// });
//
// window.onclick = (e) => {
//   if (!e.target.matches(".acc-qtn")) {
//     questions.forEach((btn) => btn.classList.remove("active"));
//     answers.forEach((acc) => acc.classList.remove("active"));
//   }
// };
