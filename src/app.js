
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");

const btn1_form = document.querySelector(".btn1-form");
const btn2_form = document.querySelector(".btn2-form");
const btn3_form = document.querySelector(".btn3-form");

const btn1_form_next = document.querySelector(".btn1-form .btn-next");
const btn2_form_back = document.querySelector(".btn2-form .btn-back");
const btn2_form_next = document.querySelector(".btn2-form .btn-next");
const btn3_form_back = document.querySelector(".btn3-form .btn-back");

const f2progressbar = document.querySelector(".f2progressbar");
const f3progressbar = document.querySelector(".f3progressbar");

const btn_done = document.querySelector(".btn-done");
const modalwrapper = document.querySelector(".modal-wrapper");
const shadow = document.querySelector(".shadow");

/* button, click  */
btn1_form_next.addEventListener("click", function(){
    form1.style.display = "none";
    form2.style.display ="block";

    btn1_form.style.display ="none";
    btn2_form.style.display="flex";

    f2progressbar.classList.add("active");

})
btn2_form_back.addEventListener("click", function(){

    form1.style.display ="block";
    form2.style.display ="none";

    btn1_form.style.display="flex";
    btn2_form.style.display="none";

    f2progressbar.classList.remove("active");

})
btn2_form_next.addEventListener("click", function(){

    form2.style.display ="none";
    form3.style.display ="block";

    btn3_form.style.display="flex";
    btn2_form.style.display="none";

    f3progressbar.classList.add("active");

})
btn3_form_back.addEventListener("click", function(){

    form2.style.display ="block";
    form3.style.display ="none";

    btn3_form.style.display="none";
    btn2_form.style.display="flex";

    f3progressbar.classList.remove("active");
})

btn_done.addEventListener("click", function(){
modalwrapper.classList.add("active");
})

shadow.addEventListener("click", function(){
    modalwrapper.classList.remove("active");
})