class PostsView {

     _postArray=new PostList();
    _TypeOfPost;
	_id;

    constructor(posti=[]) {
        this._postArray = new PostList(posti);
        this._TypeOfPost = document.createElement('div');
        this._TypeOfPost.classList.add('box');
        this._TypeOfPost.innerHTML = `
		<section class="AuthorDate">
			<img id="Avatarka"  src="" alt=" No avatar">
			
	<p class="name"></p>
	<p class="date"></p>
	<p class="time"></p>
    <section class="Actions">
	<input id="Like" type=image src="resources//Images//like.gif"></input>
	<input id="Delete" type=image src="resources//Images//kote.gif"></input>
	<input id="Edit" type=image src="resources//Images//editcircle_120035.png"></input>
	</section>	
	</section>
			<textarea disabled class="content" cols="50" rows="8">
	</textarea>
			<section class="PhotoAndTags">
	<section >
	<textarea class="tags" disabled rows="11" cols="10"></textarea>	
	</section>
	<img class="Photo" src=""  alt="Add photo" >
	</section>
	 
`;
    }
	ShowPosts(filters){
         let fillingOfPosts=this._postArray._collectionOfPosts;
        let main = document.querySelector("container");
		
        for(let i = 0; i < fillingOfPosts.length; i++) {

            if(this._postArray._validate(fillingOfPosts[i])===false)
			    return false;

        }
let type = this._TypeOfPost.cloneNode(true);
        let filteredPosts = this._postArray.GetPage(0,fillingOfPosts.length,filters);

        for(let i = 0; i < fillingOfPosts.length; i++){
            let type = this._TypeOfPost.cloneNode(true);
            type.id = filteredPosts[i].id;
            type.getElementsByClassName("Photo").item(0).src=filteredPosts[i].photoLink;
            type.getElementsByClassName("name").item(0).textContent=filteredPosts[i].author;
			filteredPosts[i].createdAt=new Date(filteredPosts[i].createdAt);
            type.getElementsByClassName("date").item(0).textContent = filteredPosts[i].createdAt.getDate().toString() + "." + (filteredPosts[i].createdAt.getMonth()+1).toString() + "."+ filteredPosts[i].createdAt.getFullYear().toString();
			type.getElementsByClassName("time").item(0).textContent=filteredPosts[i].createdAt.getHours().toString() + ":" + filteredPosts[i].createdAt.getMinutes().toString();
            type.getElementsByClassName("content").item(0).textContent=filteredPosts[i].description;
            type.getElementsByClassName("tags").item(0).textContent=filteredPosts[i].hashTags.join('\n');
            document.getElementById("help").parentNode.insertBefore(type,document.getElementById("help").nextSibling);
        }
		return true;
    }
	AddPost(post)
	{
		if(this._postArray._validate(post)===false)
			return false;
		let type=this._TypeOfPost.cloneNode(true);
		type.id = post.id;
        type.getElementsByClassName("Photo").item(0).src=post.photoLink;
        type.getElementsByClassName("name").item(0).textContent=post.author;
        type.getElementsByClassName("date").item(0).textContent = post.createdAt.getDate().toString() + "." + (post.createdAt.getMonth()+1).toString() + "."
        +post.createdAt.getFullYear().toString();
		type.getElementsByClassName("time").item(0).textContent=post.createdAt.getHours().toString() + ":" + post.createdAt.getMinutes().toString();
        type.getElementsByClassName("content").item(0).textContent=post.description;
		type.getElementsByClassName("tags").item(0).textContent=post.hashTags.join('\n');
        document.getElementById("help").parentNode.insertBefore(type,document.getElementById("help").nextSibling);
		return true;
	}
	DeletePost(id)
	{
		if(this._postArray.remove(id)===false)
			return false;
		document.getElementById(id).parentNode.removeChild(document.getElementById(id));		
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
}