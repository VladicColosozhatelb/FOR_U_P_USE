let controller=new Controller();
let allPosts=new PostsView();
allPosts.Restore();
allPosts.ShowPosts();
user.CheckUser();
let xhr = new XMLHttpRequest();
xhr.open('Get', 'http://localhost:8080/test1', true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
        // вывести   результат
        alert( xhr.responseText ); // responseText -- текст ответа.
    }
};