
let posts = [20];
for(var i=0;i<20;++i)
 {
	 let arrTags=[];
	 arrTags.push("#politic");
	 arrTags.push("#games");
	 arrTags.push("#feminists");
	 let arrLikes=[];
	 arrLikes.push("David");
	 arrLikes.push("Shuha");
	 arrLikes.push("Lama");
	 arrLikes.push("DDragon");
	 let post={
   id: i+1,
   description: 'Vlad is trying JS',
   createdAt: new Date(),
   author: 'Ivanov Ivashka',
   photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: arrTags,
  likes: arrLikes
	 };
	 posts.push(post);
  }
  
	  