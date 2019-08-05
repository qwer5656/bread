(function()
{
    let loginform=document.querySelector(".loginform");
    let account=document.querySelector("[name='account']");
    let password=document.querySelector("[name='password']");
    let error=document.querySelectorAll(".checkword");
    loginform.addEventListener("submit",formset);
    
    function formset(event)
    {
        
        if(!localStorage.getItem("account")&&!localStorage.getItem("password"))
        {
        localStorage.setItem("account",account.value);
        localStorage.setItem("password",password.value);
        }
        else
        {
            let correctaccount=localStorage.getItem("account");
            let correctpassword=localStorage.getItem("password");
            if(correctaccount!==account.value)
            {
                error[0].classList.add("checkworderror");
                error[0].textContent=error[0].dataset.error;
            }
            if(correctpassword!==password.value)
            {          
              error[1].classList.add("checkworderror");
              error[1].textContent=error[1].dataset.error;
            }
        }
        event.preventDefault();
    }
})();