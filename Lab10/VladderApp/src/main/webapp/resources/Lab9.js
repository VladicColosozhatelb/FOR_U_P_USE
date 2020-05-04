class PostsView {

    _postArray=new PostList();
    _TypeOfPost;
	_downloadedPosts=0;
    constructor(posti=[]) {
		this._downloadedPosts=0;
        this._postArray = new PostList(posti);
        this._TypeOfPost = document.createElement('div');
        this._TypeOfPost.classList.add('box');
        this._TypeOfPost.innerHTML = `
		<section class="AuthorDate">
			<img class="Avatarka"  src="" alt=" No avatar">
			
	<p class="name"></p>
	<p class="date"></p>
	<p class="time"></p>
    <section class="Actions">
	<input id="Like" class="like" onclick="Like()" type=image src="http://s1.iconbird.com/ico/2013/9/452/w512h5121380476894like.png"></input>
	<input id="Delete" onclick="Delete()" type=image src="resources//Images//kote.gif"></input>
	<input id="Edit" onclick="Edit()" type=image src="resources//Images//editcircle_120035.png"></input>
	</section>	
	</section>
			<textarea disabled class="content" cols="50" rows="8">
	</textarea>
			<section class="PhotoAndTags">
	<section >
	<textarea class="tags" disabled rows="11" cols="10"></textarea>	
	</section>
	<img class="Photo" src=""  alt="Add photo" >
	<section id="row">
	<textarea disabled cols="16" rows="10" class="ListOfLikes"></textarea>
	<label class="LikedIt"></label>
	</section>
	</section>
	 
`;
    }
	ShowPosts(filters=[]){
         let fillingOfPosts=this._postArray.getPostsList();
        let main = document.querySelector("container");
		let numberOfPosts=10;
		if(this._downloadedPosts>=fillingOfPosts.length)
			return false;
		if(fillingOfPosts.length-this._downloadedPosts<=10)
		{
	      numberOfPosts=fillingOfPosts.length-this._downloadedPosts;
		}
let type = this._TypeOfPost.cloneNode(true);
        let filteredPosts = this._postArray.GetPage(this._downloadedPosts,numberOfPosts,filters);

        for(let i = 0; i < numberOfPosts; i++){
            let type = this._TypeOfPost.cloneNode(true);
			type.getElementsByClassName("Avatarka").item(0).src=filteredPosts[i].ava;
            type.id = filteredPosts[i].id;
            type.getElementsByClassName("Photo").item(0).src=filteredPosts[i].photoLink;
            type.getElementsByClassName("name").item(0).textContent=filteredPosts[i].author;
			filteredPosts[i].createdAt=new Date(filteredPosts[i].createdAt);
            type.getElementsByClassName("date").item(0).textContent = filteredPosts[i].createdAt.getDate().toString() + "." + (filteredPosts[i].createdAt.getMonth()+1).toString() + "."+ filteredPosts[i].createdAt.getFullYear().toString();
			type.getElementsByClassName("time").item(0).textContent=filteredPosts[i].createdAt.getHours().toString() + ":" + filteredPosts[i].createdAt.getMinutes().toString();
            type.getElementsByClassName("content").item(0).textContent=filteredPosts[i].description;
            type.getElementsByClassName("tags").item(0).textContent=filteredPosts[i].hashTags.join('\n');
			type.getElementsByClassName("ListOfLikes").item(0).textContent=filteredPosts[i].likes.join('\n');
			type.getElementsByClassName("ListOfLikes").item(0).textContent+='\n';
			if(filteredPosts[i].likes.length!=0)
			type.getElementsByClassName("LikedIt").item(0).textContent=filteredPosts[i].likes.length+ " Liked it";
		    else
			type.getElementsByClassName("LikedIt").item(0).textContent="No one liked it";
            document.getElementById("help").parentNode.insertBefore(type,document.getElementById("help").nextSibling);
        }
		this._downloadedPosts+=numberOfPosts;
		return true;
    }
	AddPost(post)
	{
		if(this._postArray._validate(post)===false)
			return false;
		let type=this._TypeOfPost.cloneNode(true);
		type.getElementsByClassName("Avatarka").item(0).src=post.ava;
		type.id = post.id;
        type.getElementsByClassName("Photo").item(0).src=post.photoLink;
        type.getElementsByClassName("name").item(0).textContent=post.author;
		post.createdAt=new Date(post.createdAt);
        type.getElementsByClassName("date").item(0).textContent = post.createdAt.getDate().toString() + "." + (post.createdAt.getMonth()+1).toString() + "."
        +post.createdAt.getFullYear().toString();
		type.getElementsByClassName("time").item(0).textContent=post.createdAt.getHours().toString() + ":" + post.createdAt.getMinutes().toString();
        type.getElementsByClassName("content").item(0).textContent=post.description;
		type.getElementsByClassName("tags").item(0).textContent=post.hashTags.join('\n');
        document.getElementById("help").parentNode.insertBefore(type,document.getElementById("help").nextSibling);
		this._postArray.add(post);
        this._downloadedPosts++;		
		return true;
	}
	DeletePost(id)
	{
		if(this._postArray.remove(id)===false)
			return false;
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		this._downloadedPosts--;		
		return true;
	}
	EditPost(id,filters)
	{
		if(this._postArray.edit(id,filters)===false)
			return false;
		this._postArray.edit(id,filters);
		let newPost=this._postArray.get(id);
		this.DeletePost(id);
		this.AddPost(newPost);
	}
	ClearView()
	{
		for(var i=0;i<this._postArray.getPostsList().length;i++){
			if(document.getElementById(this._postArray.getPostsList()[i].id)!=null)
			document.getElementById(this._postArray.getPostsList()[i].id).parentNode.removeChild( document.getElementById(this._postArray.getPostsList()[i].id));
		}
	}
	Restore()
    {
	this._postArray=new PostList(JSON.parse(localStorage.getItem('container')));
    }
	Save()
	{
		 localStorage.clear();
		 localStorage.setItem("container",JSON.stringify(this._postArray.getPostsList()));
	}
	GetArrayPosts()
	{
		return this._postArray;
	}
	GetDownloaded()
	{
		return this._downloadedPosts;
	}	
	GetType()
	{
		return this._TypeOfPost;
	}
}
