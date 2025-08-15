let firstPwd = document.querySelector("#pwd")
let secondPwd = document.querySelector("#confirm-pwd")
let errorMsg = document.querySelector("#error")
let submitBtn = document.querySelector(".submit-section button")
let form


submitBtn.addEventListener("click", function(event){
    if (firstPwd.value !== secondPwd.value) {
        event.preventDefault()
        errorMsg.textContent= "Both Passwords must match"
        secondPwd.focus()
    }
})