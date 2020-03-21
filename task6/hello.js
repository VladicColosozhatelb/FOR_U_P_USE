
(function() {
function conTains(A,B)
{
	for(var i=0;i<A.length;++i)
	{
		if(A[i]==B)
			return true;
	}
	return false;
}
function getPosts(number1=0,number2=10,objects=0)
{	
if(number1+1+number2>posts.length)
	return [];
	let newPost=[];
	let newPost2=[];
	let newPost3=[];
	let newPost4=[];
	if(objects!=0){
	var a=number1;
	if(object.author!=undefined){
	for(var i=0;i<number2;++i)
	{	
		if(posts[number1+1].author==object.author){
		newPost.push(posts[number1+1]);
		
		}
		number1++;
		}
		if(newPost.length==0)
			return [];
	}
	number1=a;
	if(object.createdAt!=undefined){
	for(var i=0;i<number2;++i)
	{	
		if(posts[number1+1].createdAt==object.createdAt){
		newPost2.push(posts[number1+1]);
		
		}
		number1++;
		}
		if(newPost2.length==0)
			return [];
	}
	number1=a;
	if(object.hashTags!=undefined){
	for(var i=0;i<number2;++i)
	{var b=0;	
for(var j=0;j<object.hashTags.length;++j)
		{
			if(conTains(posts[number1+1].hashTags,object.hashTags[j])==true)
				b++;		 		
		}
		if(b==object.hashTags.length){
		newPost3.push(posts[number1+1]);
		
		}
		number1++; 
		}
		if(newPost3.length==0)
			return [];
	}	
	if(newPost.length!=0){
		newPost4=newPost;
		if(newPost2.length!=0)
		{
	         for(var i=0;i<newPost2.length;++i)
if(newPost4.contains(newPost2[i])==false)
   delete(newPost4[newPost2[i].id]);	
		}
		if(newPost3.length!=0)
		{
			for(var i=0;i<newPost3.length;++i)
if(conTains(newPost4,newPost3[i])==false)
   delete(newPost4[newPost3[i].id]);	
		}
	}
	else{
		if(newPost2!=0){
		newPost4=newPost2;
		if(newPost3.length!=0)
		{
			for(var i=0;i<newPost3.length;++i)
if(conTains(newPost4,newPost3[i])==false)
   delete(newPost4[newPost3[i].id]);	
		}
		}
		else{
			newPost4=newPost3;
		}
	}
	
	
}
	else{
		for(var i=0;i<number2;++i)
	{
		
		newPost4.push(posts[number1+1]);
		number1++;
	}
		}
	if(newPost4.length!=0){
	for(var i=0;i<newPost4.length;++i)
		for(var j=i+1;j<newPost4.length;++j)
		{
			if(newPost4[i].createdAt-newPost4[j].createdAt>=0)
			{
				let change=newPost4[i];
			    newPost4[i]=newPost4[j];
				newPost4[j]=change;
			}
		}
		for(var i=0;i<newPost4.length;++i)
	{
		console.log(newPost4[i].id);
	}
	}
}
function getPost(number)
{
	if(number<0)
		return false;
	return posts[number];
}
function validatePost(Arg)
{
	
	if(Arg.id>=0 & Arg.description.length<=200&Arg.createdAt.length!=0 & Arg.author.length!=0 & Arg.id!=undefined & Arg.createdAt!=undefined & Arg.author!= undefined & Arg.description!=undefined & Arg.hashTags!=undefined & Arg.likes!=undefined)
		return true;
	return false;
}
function addPost(Arg)
{
	if(validatePost(Arg)==false)
		return false;
	else{
		posts.push(Arg);
		return true;
	}
}
function editPost(idi,Arg){
	if(idi<0)
		return false;
     if(validatePost(posts[idi])==false)
		 return false;
	 else{
		 var a=0;
		 if( Arg.description!=undefined){
		 if(Arg.description.length<=200){
			 posts[idi].description=Arg.description;
		 a++;}}
		 if(Arg.photoLink!=undefined){
		 
			 posts[idi].photoLink=Arg.photoLink;
			 a++
		}
		 if(a!=0)
		 return true;
	 else
		 return false;
	 }
}
function removePost(idi)
{
	if(validatePost(posts[idi])==false)
		return false;
	else{
		delete posts[idi];
		return true;
	}
}








console.log("Take 10 posts from 0, i also print ids of all obejcts");
getPosts(0,10);
console.log("Take 12 posts from 9 with next filtering object");
console.log("Befor that i add 2 posts");
let arrTags2=[];
arrTags2.push("#games");
let object={
	hashTags: arrTags2,
	author: 'zxcasd'
};
 let arrTags3=[];
	 arrTags3.push("#politic");
	 arrTags3.push("#games");
	 arrTags3.push("#feminists");
	  arrTags3.push("#femistokl");
 let arrTags=[];
	 arrTags.push("#politic");
	 arrTags.push("#games");
	 arrTags.push("#feminists");
  let post1={
	    id: 21,
		hashTags: arrTags,
		likes: [],
   description: 'Wow wuw wie Vladic',
   createdAt: new Date(),
   author: 'zxc',
   photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
	 };
	 let post2={
	id:30,
	hashTags: arrTags3,
   description: 'Wow wuw wie Vladic',
   createdAt: new Date(),
   author: 'zxcasd',
   likes: [],
   photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
	 };
	 addPost(post2);
	 addPost(post1);
	 getPosts(10,11,object);
	 console.log("Take post with id=4 and print its description");
console.log(getPost(4).description);
console.log("Make sure that post with id=21 is valid");
console.log(validatePost(posts[21]));
posts[8].id=-3;
console.log("Make sure that post with id=8 is not valid");
console.log(validatePost(posts[8]));
console.log("Edit post 5 with post3, thats look like this: ");
console.log("let post3={");
   console.log("     description: 'changed',");
console.log("};");
let post3={
   description: 'changed',
};
editPost(5,post3);
console.log("And show its new description:");
console.log(posts[5].description);
console.log("Now i try to remove 5 post:");
console.log("It was:");
console.log(posts[5].id+" "+posts[5].description+" "+posts[5].createdAt);
console.log("After removing");
removePost(5);
	if(posts[5]==undefined)
		console.log("its undefined");
}());