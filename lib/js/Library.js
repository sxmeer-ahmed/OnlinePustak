$("table tbody").html("");
$.ajax({
    url: "https://localhost:7223/api/Library",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
    },
    type: "get",
    contentType: "application/json",
    success: function (result, status, xhr) {
        $.each(result, function (index, value) {
            $("tbody").append($("<tr>"));
            appendElement = $("tbody tr").last();
            appendElement.append($("<td  style='color:white' >").html(value["bookName"]));
            appendElement.append($("<td style='color:white' >").html(value["isbn"]));   
            appendElement.append($("<td style='color:white' >").html(value["publishDate"]));
            appendElement.append($("<td style='color:white' >").html(value["category"]));
            appendElement.append($("<td style='color:white' >").html(value["quantity"]));
            appendElement.append($("<td style='color:white' >").html(value["authorName"]));
            appendElement.append($("<td style='color:white' >").html("<a href=\"Details.html?id=" + value["isbn"] + "\"><button class=\"btn btn-info text-white\">Details</button></a>"));  
            appendElement.append($("<td style='color:white' >").html("<a href=\"EditBook.html?id=" + value["isbn"] + "\"><button class=\"btn btn-warning text-white\">Update</button></a>"));  
            appendElement.append($("<td style='color:white' >").html("<a href=\"DeleteBook.html?id=" +value["isbn"] + "\"><button class=\"btn btn-danger\">Delete</button></a>"));  
        });
    },
    error: function (xhr, status, error) {
        console.log(xhr)
    }
});
