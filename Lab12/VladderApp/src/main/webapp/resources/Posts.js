
let posts;
let send;
	function sendRequest(method,url) {
return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response)
        } else{

            resolve(send=JSON.parse(xhr.response))}

    }
    xhr.onerror = () => {
        reject(xhr.response)
    }
    xhr.send();
})
    }
    sendRequest('GET','Initialization')
        .then(data=>localStorage.setItem("container",JSON.stringify(data)))
        .catch(err=>console.log(err))