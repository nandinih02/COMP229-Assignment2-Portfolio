//COMP229-Assignment01-Portfolio
// Nandini Hariprasad
// 301129100
// 03/10/2021

//IIFE Immediately Invoked Function Expression
(function(){

  function Start()
  {
      console.log("App Started...");

    let deleteButtons = document.querySelectorAll('.btn-danger')

    for(button of deleteButtons)
    {
      button.addEventListener('click', (event) => {
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          window.location.assign('/contacts-list');
        }

      });
    }
  }


window.addEventListener("load", Start);  

})();