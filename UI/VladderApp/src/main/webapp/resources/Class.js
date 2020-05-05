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
        if(id<0 || this._collectionOfPosts[id-1]===undefined)
            return false;
        return this._collectionOfPosts[id-1];
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
        if(id<0 ||  this._collectionOfPosts[id-1]===undefined)
            return false;
        else{
             var count=0;
             if( posst.description!=undefined){
             if(posst.description.length<=200){
                 this._collectionOfPosts[id-1].description=posst.description;
                   count++;}}
             if(posst.photoLink!=undefined){
             
                 this._collectionOfPosts[id-1].photoLink=posst.photoLink;
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