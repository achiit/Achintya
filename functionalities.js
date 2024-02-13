$(document).ready(function () {
    $("#btn-whatsapp-message").click(function (e) 
    { 
        e.preventDefault();


        let  Email = $("input[name='Email']").val();
        let  _Email = `My email ID : ${Email}`

        let  Subject= $("input[name='Subject']").val();
        let  _Subject = `This chat is regarding ${Subject}`

        let  message = $("textarea[name='message']").val();
        let  _message = `       ${message}`;

        let final_message =  ` ${Email?_Email:""}%0A${Subject?_Subject:""}%0A${message?_message:""}`

        window.open(`https://wa.me/9316547934?text=${final_message}`, "_blank");
    });


});