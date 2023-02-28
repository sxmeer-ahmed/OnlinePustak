$(".submit-btn").click(function(e){
    e.preventDefault();
    let username = $("#username").val().trim();
    let password = $("#password").val().trim();
    let name = $("#name").val().trim();
    let contact = $("#contact").val().trim();
    let email = $("#email").val().trim();

    if(username == '' || password == '' || name == '' || contact=='' || email==''){
        alert("All Fields are Required", false);
        return;
    }

    $.ajax({
        url: "https://localhost:7223/api/register",
        headers:{
            'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*'},
           type: "post",
            contentType: "application/json",
            data: JSON.stringify({
                UserId : username,
                Password: password,
                UserName: name,
                UserContact :contact,
                UserEmail : email,
            }),
            success: function (result, status, xhr) {
                alert("Registration Successfull!", true);
                let datacpy = {
                    UserId: username,
                    UserName: result.UserName,
                    UserContact :result.UserContact,
                    UserEmail : result.UserEmail,
                    Password : result.Password,
                }
                localStorage.setItem("user", JSON.stringify(datacpy)); 
                window.location.href = "./login.html";           
            },
            error: function (xhr, status, error) {
                alert(xhr.responseJSON.message, false);
            }
        });
}); 