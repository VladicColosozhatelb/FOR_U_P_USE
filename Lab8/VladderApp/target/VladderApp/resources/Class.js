class PostList{
    _collectionOfPosts=[];
    constructor(array=[])
    {
     this._collectionOfPosts=array;   
    }
    conTains(obejc1,obejct2)
    {
        for(var i=0;i<obejc1.length;++i)
        {
            if(obejc1[i]===obejct2)
                return true;
        }
        return false;
    }
  GetPage(start = 0, numberOfPosts = 10, filters) {

		if (start === undefined || numberOfPosts === undefined) {
			return undefined;
		}

		let filteredPosts1 = [];

		filteredPosts1=this._collectionOfPosts;

		if (filters !== undefined && filters.author !== undefined && filters.author.length !== 0) {

			filteredPosts1 = filteredPosts1.filter(post => post.author == filters.author);
		}

		if (filters !== undefined && filters.createdAt !== undefined) {

			filteredPosts1 = filteredPosts1.filter(post => post.createdAt == filters.createdAt);
		}

		if (filters !== undefined && filters.hashTags !== undefined && filters.hashTags.length !== 0) {

			filteredPosts1 = filteredPosts1.filter(post => this.Contains(post.hashTags, filters.hashTags));
		}
        filteredPosts1=this._collectionOfPosts.slice(start, start + numberOfPosts);
		return filteredPosts1.sort(this.CompareData);
	}
    get(id)
    {
        if(id<0 || this._collectionOfPosts[id]===undefined)
            return false;
        return this._collectionOfPosts[id];
    }
    _validate(posst)
    {
        if(posst.id>=0 & posst.description.length<=200&posst.createdAt.length!=0 & posst.author.length!=0 & posst.id!=undefined 
           & posst.createdAt!=undefined & posst.author!= undefined 
           & posst.description!=undefined & posst.hashTags!=undefined & posst.likes!=undefined)
            return true;
        return false;
    }
    add(posst)
    {
        if(this._validate(posst)===false)
            return false;
        else{
            this._collectionOfPosts.push(posst);
            return true;
        }
    }
    addAll(array)
    {
        let resultArray=[];
        for(var i=1;i<array.length;++i){
        if(this._validate(array[i])===true)
              this.add(array[i]);
        else
           {
              resultArray.push(array[i]);
           }
        }
        return resultArray;
    }
    edit(id,posst){
        if(id<0 ||  this._collectionOfPosts[id]===undefined)
            return false;
        if(this._validate(this._collectionOfPosts[id])===false)
            return false;
        else{
             var count=0;
            if( posst.description!=undefined){
            if(posst.description.length<=200){
                 this._collectionOfPosts[id].description=posst.description;
             count++;}}
            if(posst.photoLink!=undefined){
             
                 this._collectionOfPosts[id].photoLink=posst.photoLink;
                 count++
            }
            if(count!=0)
             return true;
            else
             return false;
        }
    }
    remove(id)
    {
        if(this._collectionOfPosts[id]===undefined)
            return false;
        else{
            delete this._collectionOfPosts[id];
            return true;
        }
    }
    clear()
    {     
        this._collectionOfPosts=[];
    }
}
    
// Проверка всех методов 
   /* let posti=new PostList([]); 
    console.log("I create empty array of posts, then with addAll add 20 posts");
    posti.addAll(posts);
    console.log("Take 10 posts from 0, i also print ids of all obejcts");
    posti.getPage(0,10);
    let arrTags3=[];
    arrTags3.push("#politic");
    arrTags3.push("#games");
    arrTags3.push("#feminists");
    let post2= {
       id:21,
       hashTags: arrTags3,
      description: 'Wow wuw wie Vladic',
      createdAt: new Date(),
      author: 'zxcasd',
      likes: [],
      photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    };
    let arrTags2=[];
    arrTags2.push("#games");
    let object={
        hashTags: arrTags3,
        author: 'zxcasd'
    };
   
    let arrTags=[];
         arrTags.push("#politic");
         arrTags.push("#games");
         arrTags.push("#feminists");
    let post1={
            id: 22,
            hashTags: arrTags,
            likes: [],
       description: 'Wow wuw wie Vladic',
       createdAt: new Date(),
       author: 'zxc',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    };
    console.log("Now i add 2 post and create special object, and make filtering with it");
    posti.add(post2);
    posti.add(post1);
    posti.getPage(10,15,object);
    console.log("Take post with id=4 and print its description,if such post with such id exisct");
    console.log(posti.get(4).description);
    console.log("Take post with id=30");
    console.log(posti.get(30).description);
    console.log("Edit post 5 with post3, thats look like this: ");
    console.log("let post3={");
    console.log("     description: 'changed',");
    console.log("};");
    let post3={
       description: 'changed',
    };
    posti.edit(5,post3);
    console.log("And show its new description:");
    console.log(posti.get(5).description);
    console.log("Now i try to remove 5 post:");
    console.log("It was:");
    console.log(posts[5].id+" "+posts[5].description+" "+posts[5].createdAt);
    console.log("After removing, i checked it with condition === undefind aaaaand:");
    posti.remove(5);
    if(posti[5]===undefined)
        console.log("its undefined");*/