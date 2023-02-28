$(".submit-btn").click(function(e){
    e.preventDefault();
    let username = $("#username").val().trim();
    let password = $("#password").val().trim();

    if(username == '' || password == ''){
        alert("Username and Password are Required", false);
        return;
    }

    $.ajax({
        url: "https://localhost:7223/api/login",
        headers:{
            'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*'},
           type: "post",
            contentType: "application/json",
            data: JSON.stringify({
                UserId : username,
                Password: password,
                UserName: "dajifdjisak",
                UserContact :"fsfsfsf",
                UserEmail : "fredsfgredsfgeds",
            }),
            success: function (result, status, xhr) {
                alert("Login Successfull!", true);
                let datacpy = {
                    UserId: username,
                    UserName: result.UserName,
                    UserContact :result.UserContact,
                    UserEmail : result.UserEmail,
                    Password : result.Password,
                }
                localStorage.setItem("user", JSON.stringify(datacpy)); 
                if(datacpy.UserId=="Admin"){
                    window.location.href = "./Library.html";
                }
                else{
                    window.location.href = "./Library.html";
                }             
            },
            error: function (xhr, status, error) {
                showAlert(xhr.responseJSON.message, false);
            }
        });
}); 