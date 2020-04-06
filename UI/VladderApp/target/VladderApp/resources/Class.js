class PostList{
    _posti=[];
    constructor(array)
    {
     this._posti=array;   
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
   getPage(start=0,end=10,objects=0)
    {	
        //Если нету такого числа постов, то ищет среди доступного числа
    if(start+end>this._posti.length)
       end=this._posti.length;
    let newPost=[];
    let newPost2=[];
    let newPost3=[];
    let newPost4=[];
    var count=start;
    if(objects!=0){
        if(object.author!=undefined){
            for(var i=count;i<end;++i)
            {	
                if(this._posti[start].author===object.author){
                newPost.push(this._posti[start]);
                
                }
                start++;
                }
                if(newPost.length===0)
                    return [];
        }
        start=count;
        if(object.createdAt!=undefined){
            for(var i=count;i<end;++i)
            {	
                if(posts[start].createdAt===object.createdAt){
                newPost2.push(this._posti[start]);
                
                }
                start++;
                }
                if(newPost2.length===0)
                    return [];
        }
        start=count;
        if(object.hashTags!=undefined){
            for(var i=count;i<end;++i){
                var b=0;	
                for(var j=0;j<object.hashTags.length;++j){
                    if(this.conTains(this._posti[start].hashTags,object.hashTags[j])===true)
                        b++;		 		
                }
                if(b===object.hashTags.length){
                newPost3.push(this._posti[start]); 
                }
                start++; 
            }
            if(newPost3.length===0)
                return [];
        }	
        if(newPost.length!=0){
            newPost4=newPost;
            if(newPost2.length!=0){
                for(var i=0;i<newPost2.length;++i)
                    if(newPost4.contains(newPost2[i])===false)
                        delete(newPost4[newPost2[i].id]);	
            }
            if(newPost3.length!=0){
                for(var i=0;i<newPost3.length;++i)
                    if(this.conTains(newPost4,newPost3[i])===false)
                        delete(newPost4[newPost3[i].id]);	
            }
        }
        else{
            if(newPost2!=0){
                newPost4=newPost2;
                if(newPost3.length!=0){
                    for(var i=0;i<newPost3.length;++i)
                        if(this.conTains(newPost4,newPost3[i])===false)
                            delete(newPost4[newPost3[i].id]);	
                }
            }
            else{
                newPost4=newPost3;
            }
        }     
    }
    else{
        for(var i=count;i<end;++i){
            newPost4.push(this._posti[start]);
            start++;
        }
    }
    if(newPost4.length!=0){
        for(var i=0;i<newPost4.length;++i)
            for(var j=i+1;j<newPost4.length;++j)
            {  
                {
                    let change=newPost4[i];
                    newPost4[i]=newPost4[j];
                    newPost4[j]=change;
                }
            }
            for(var i=0;i<newPost4.length;++i){
            console.log(newPost4[i].id);
            }
    }
    return newPost4;
    }
    get(idi)
    {
        if(idi<0 || this._posti[idi]===undefined)
            return false;
        return this._posti[idi];
    }
    static _validate(posst)
    {
        if(posst.id>=0 & posst.description.length<=200&posst.createdAt.length!=0 & posst.author.length!=0 & posst.id!=undefined 
           & posst.createdAt!=undefined & posst.author!= undefined 
           & posst.description!=undefined & posst.hashTags!=undefined & posst.likes!=undefined)
            return true;
        return false;
    }
    add(posst)
    {
        if(PostList._validate(posst)===false)
            return false;
        else{
            this._posti.push(posst);
            return true;
        }
    }
    addAll(array)
    {
        let resultArray=[];
        for(var i=1;i<array.length;++i){
        if(PostList._validate(array[i])===true)
              this.add(array[i]);
        else
           {
              resultArray.push(array[i]);
           }
        }
        return resultArray;
    }
    edit(idi,posst){
        if(idi<0 ||  this._posti[idi]===undefined)
            return false;
        if(PostList._validate(this._posti[idi])===false)
            return false;
        else{
             var count=0;
            if( posst.description!=undefined){
            if(posst.description.length<=200){
                 this._posti[idi].description=posst.description;
             count++;}}
            if(posst.photoLink!=undefined){
             
                 this._posti[idi].photoLink=posst.photoLink;
                 count++
            }
            if(count!=0)
             return true;
            else
             return false;
        }
    }
    remove(idi)
    {
        if(this._posti[idi]===undefined)
            return false;
        if(PostList._validate(this._posti[idi])===false)
            return false;
        else{
            delete this._posti[idi];
            return true;
        }
    }
    clear()
    {     
        this._posti=[];
    }
}
    
// Проверка всех методов 
    let posti=new PostList([]); 
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
        console.log("its undefined");