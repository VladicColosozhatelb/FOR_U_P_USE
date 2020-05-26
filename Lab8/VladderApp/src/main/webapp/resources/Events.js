class Controller{
	constructor(){
		document.getElementById('MorePosts').addEventListener("click",this.MorePosts);
		document.getElementById('NameFilter').addEventListener('click',this.FileredNames);
		document.getElementById('TagsFilter').addEventListener('click',this.FilteredTags);
		document.getElementsByClassName('close')[0].addEventListener('click',this.Close);
		document.getElementsByClassName('close')[1].addEventListener('click',this.Close);
		document.getElementsByClassName('close')[2].addEventListener('click',this.Close);
		document.getElementById('sign').addEventListener('click',this.Sign);
		document.getElementById('adding').addEventListener('click',this.adding);
		document.getElementById('EXIT').addEventListener('click',this.Exit);	
		document.getElementById('Registration').addEventListener('click',this.Modal);	
		document.getElementById('buttonAddPost').addEventListener('click',this.addPost);
		document.getElementById('Home').addEventListener('click',this.Home);
	}
	MorePosts(){
		allPosts.ShowPosts();
		user.CheckUser();
	}
    FileredNames(){
		if(user.GetName()===""){
			alert("You have no rights, please sign up");
		return;
	    }	
	    if(document.getElementById('NameF').value===""){
		  alert("Please input value");
		  return;
	    }
	    var name=document.getElementById('NameF').value;
	    let postNames=[];	
	    let allAvailablePosts=new PostsView(JSON.parse(localStorage.getItem('container')));
	    for(let i = 0;i < allAvailablePosts.GetArrayPosts().getPostsList().length;i++)
	    {
		   if(allAvailablePosts.GetArrayPosts().getPostsList()[i].author===name)
			   postNames.push(allAvailablePosts.GetArrayPosts().getPostsList()[i]);
	    }
	    allPosts.ClearView();
	    allPosts=new PostsView(postNames);
	    allPosts.ShowPosts();
	    user.CheckUser();
   }
   FilteredTags(){
	   if(user.GetName()===""){
			alert("You have no rights, please sign up");
	   return;
	   }	
	   if(document.getElementById('TagsF').value===""){
		   alert("Please input value");
		  return;
	   }
	   var tags=document.getElementById('TagsF').value;
	   let arrayOftags=tags.split(' ');
	   let postTags=[];
       var count=0;	   
	   let allAvailablePosts=new PostsView(JSON.parse(localStorage.getItem('container')));
	   for(let i = 0;i < allAvailablePosts.GetArrayPosts().getPostsList().length;i++)
	   {
		   count=0;
		 for(var j=0;j<arrayOftags.length;j++){
			 if(allAvailablePosts.GetArrayPosts().getPostsList()[i].hashTags.includes(arrayOftags[j])===false)
			 {
				 count++;
				 break;
			 }
		 }
		 if(count===0)
			 postTags.push(allAvailablePosts.GetArrayPosts().getPostsList()[i]);		 
	   }
	   for(let  i= 0;i<allPosts.GetDownloaded();i++)
	   {
		   document.getElementById(allPosts.GetArrayPosts().getPostsList()[i].id).parentNode.removeChild( document.getElementById(allPosts.GetArrayPosts().getPostsList()[i].id));
	   }
	   allPosts=new PostsView(postTags);
	   allPosts.ShowPosts();
	   user.CheckUser();
       }
	Modal(){
		document.getElementById('myModal').style.display="block";
	}
	Close(){
		event.target.parentNode.parentNode.style.display="none";
	}	
    Sign(){
		var name=document.getElementById('login').value;
		if(name.length>25){
			alert("Wrong Name(too long)");
			return;																														ъ
	    }
		document.getElementById('myModal').style.display="none";
		user=new User(name);
		var avatar=document.getElementById('avatar').value;
		document.getElementById('MainAvatar').src=avatar;
		}
	Exit()
	{
		allPosts.ClearView();
		allPosts=new PostsView(JSON.parse(localStorage.getItem('container')));
		user=new User("");
	}
	addPost()
	{
		document.getElementById('addPost').style.display="block";
	}
	adding()
	{
		var description=document.getElementById('description').value;
		var url=document.getElementById('postUrl').value;
        let tags=document.getElementById('tags').value;
		let arrayOftags=tags.split(' ');
		let post={
			id: allPosts.GetArrayPosts().getPostsList().length+1,
			ava: document.getElementById('MainAvatar'),
			description: description,
			createdAt: new Date(),
		    author: user._currentUser,
		    photoLink: url,
		    hashTags: arrayOftags,
		    likes: []
		}
		allPosts.AddPost(post);
		let localstorage=new PostsView(JSON.parse(localStorage.getItem('container')));
		localStorage.clear();
		localstorage.GetArrayPosts().add(post);
		localStorage.setItem("container",JSON.stringify(localstorage.GetArrayPosts().getPostsList()));
		document.getElementById('addPost').style.display="none";
	}
	Home()
	{
		allPosts.ClearView();
	    allPosts=new PostsView(JSON.parse(localStorage.getItem('container')));
		allPosts.ShowPosts();
		user.CheckUser();	
	}
}
	function Edit()
	{
		document.getElementById('EditPost').style.display="block";
		var editbutton=event.target.parentNode.parentNode.parentNode;
		document.getElementById('EditDescription').value=editbutton.getElementsByClassName('content')[0].value;
		document.getElementById('EditPostUrl').value=editbutton.getElementsByClassName('Photo')[0].src;
		document.getElementById('EditTags').value=editbutton.getElementsByClassName('tags')[0].value;
		document.getElementById('Editing').addEventListener('click',function(){
                editbutton.getElementsByClassName('content')[0].value=document.getElementById('EditDescription').value;
				editbutton.getElementsByClassName('Photo')[0].src=document.getElementById('EditPostUrl').value;
				editbutton.getElementsByClassName('tags')[0].value=document.getElementById('EditTags').value;
				
				let post={
					id: editbutton.id,
					ava: editbutton.getElementsByClassName('Avatarka')[0].src,
					description: editbutton.getElementsByClassName('content')[0].value,
					createdAt: new Date(),
					author: editbutton.getElementsByClassName('name')[0].textContent,
					photoLink: editbutton.getElementsByClassName('Photo')[0].src,
					hashTags: editbutton.getElementsByClassName('tags')[0].value,
					likes: [],
	            };
				allPosts.GetArrayPosts().edit(editbutton.id,post);
				let localstorage=new PostsView(JSON.parse(localStorage.getItem('container')));
				localStorage.clear();
				localstorage.GetArrayPosts().edit(editbutton.id,post);
				localStorage.setItem("container",JSON.stringify(localstorage.GetArrayPosts().getPostsList()));
				event.target.parentNode.parentNode.style.display="none";
		});
	}
	function Delete()
		{
		let localstorage=new PostsView(JSON.parse(localStorage.getItem('container')));
		localstorage.GetArrayPosts().remove(event.target.parentNode.parentNode.parentNode.id);
		allPosts.DeletePost(event.target.parentNode.parentNode.parentNode.id);
		localStorage.clear();
		localStorage.setItem("container",JSON.stringify(localstorage.GetArrayPosts().getPostsList()));
		}
	function Like()
	{
		let localstorage=new PostsView(JSON.parse(localStorage.getItem('container')));
		if(event.target.src==="http://s1.iconbird.com/ico/2013/9/452/w512h5121380476894like.png"){
			event.target.src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925290Like.png";
			if(event.target.parentNode.parentNode.parentNode.getElementsByClassName('LikedIt')[0].textContent!="No one liked it")
			{
			let array=event.target.parentNode.parentNode.parentNode.getElementsByClassName('LikedIt')[0].textContent.split(' ');
			event.target.parentNode.parentNode.parentNode.getElementsByClassName('LikedIt')[0].textContent=(1+parseInt(array[0]))+" Liked it";
			}
		    else{
				event.target.parentNode.parentNode.parentNode.getElementsByClassName('LikedIt')[0].textContent="1 Liked it";
			}
			event.target.parentNode.parentNode.parentNode.getElementsByClassName('ListOfLikes')[0].value+=document.getElementById('nameOf').textContent;
			localstorage.GetArrayPosts().get(event.target.parentNode.parentNode.parentNode.id).likes.push(document.getElementById('nameOf').textContent);
			localStorage.setItem("container",JSON.stringify(localstorage.GetArrayPosts().getPostsList()));
		}
	    else{
			event.target.src="http://s1.iconbird.com/ico/2013/9/452/w512h5121380476894like.png";
			if(event.target.parentNode.parentNode.parentNode.getElementsByClassName('LikedIt')[0].textContent!="1 Liked it")
			{
				let array=event.target.parentNode.parentNode.parentNode.getElementsByClassName('LikedIt')[0].textContent.split(' ');
			    event.target.parentNode.parentNode.parentNode.getElementsByClassName('LikedIt')[0].textContent=(parseInt(array[0])-1)+" Liked it";
				
			}
			else
			  event.target.parentNode.parentNode.parentNode.getElementsByClassName('LikedIt')[0].textContent="No one liked it";	
			let help=event.target.parentNode.parentNode.parentNode.getElementsByClassName('ListOfLikes')[0].value.split('\n');
			let helpx2="";
			localstorage.GetArrayPosts().get(event.target.parentNode.parentNode.parentNode.id).likes=[];
			for(let i=0;i<help.length-1;++i)
			{
				if(help[i]!=document.getElementById('nameOf').textContent){
						helpx2+=help[i]+'\n';
						localstorage.GetArrayPosts().get(event.target.parentNode.parentNode.parentNode.id).likes.push(help[i]);
				}
			}
			event.target.parentNode.parentNode.parentNode.getElementsByClassName('ListOfLikes')[0].value=helpx2;
			localStorage.setItem("container",JSON.stringify(localstorage.GetArrayPosts().getPostsList()));
		}
	}