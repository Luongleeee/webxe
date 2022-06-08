var email = document.getElementById("email");

var email_er = document.getElementById("email_er");

var pass = document.getElementById("pass");

var pass_er = document.getElementById("pass_er");

var passs = document.getElementById("passs");

var pass_err = document.getElementById("pass_err");

function kt(){

    var test_email  = /^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/

    if(!test_email.test(email.value)){
        email.style = "background: yellow";
        email_er.innerHTML = "Hãy nhập đúng email cho tên đăng nhập !!";
        email_er.style = "color:red";

        return false;
    }else{
        email.style = "background: none";
        email_er.innerHTML = "";
    }

    var test_pass = /^(?=.*[A-Z])(?=.*\d).{6,20}$/

    if(!test_pass.test(pass.value)){
        pass.style = "background: yellow";
        pass_er.innerHTML = "Hãy nhập đúng mật khẩu !!";
        pass_er.style = "color:red";

        return false;
    }else{
        pass.style = "background: none";
        pass_er.innerHTML = "";
    }


    if(!test_pass.test(passs.value)){
        passs.style = "background: yellow";
        pass_err.innerHTML = "Mật khẩu vừa nhập không trùng khớp !!";
        pass_err.style = "color:red";

        return false;
    }else{
        passs.style = "background: none";
        pass_err.innerHTML = "";
    }

    return true;
}
