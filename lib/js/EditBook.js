$(".submit-btn").click(function(e){
    e.preventDefault();
    let bookName = $("#bookName").val().trim();
    let isbn = $("#isbn").val().trim();
    let publishDate = $("#publishDate").val().trim();
    let category = $("#category").val().trim();
    let quantity = $("#quantity").val().trim();
    let authorName = $("#authorName").val().trim();

    if(bookName == '' || isbn == '' || publishDate == '' || category == '' || quantity <0 || authorName==''){
        alert("All Fields are Required", false);
        return;
    }
    $.ajax({
        url: `https://localhost:5001/api/Library/${isbn}`,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Method': '*'
        },
        type: "get",
        contentType: "application/json",
        success: function (result, status, xhr) {
            $('.bookName').val(result.bookName);
            $('.isbn').val(result.);
            $('.publishDate').val(Number(result.bookQty));
        },
        error: function (xhr, status, error) {
            showAlert(xhr.responseJSON.message,false);
        }
    });

    $.ajax({
        url: "https://localhost:7223/api/Library/Admin/EditBook/${isbn}",
        headers:{
            'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*'},
           type: "post",
            contentType: "application/json",
            data: JSON.stringify({
                BookName : bookName,
                ISBN : isbn,
                PublishDate: publishDate,
                Category :category,
                Quantity : quantity,
                AuthorName : authorName
            }),
            success: function (result, status, xhr) {
                alert("Registration Successfull!", true);
                window.location.href = "./Library.html";           
            },
            error: function (xhr, status, error) {
                alert(xhr.responseJSON.message, false);
            }
        });
}); 