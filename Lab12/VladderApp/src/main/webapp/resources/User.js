class User{
	_currentUser;
	 constructor(name=[]) {
		 if(name==="")
		 {
			this._currentUser="";
			document.getElementById('MainAvatar').src="https://www.sunhome.ru/i/wallpapers/153/krivie.orig.jpg";
			document.getElementById('Registration').style.visibility="visible";
			document.getElementById('buttonAddPost').style.visibility="hidden";
			document.getElementById('EXIT').style.visibility="hidden";
			document.getElementById('nameOf').style.visibility="hidden";
			let f=document.querySelectorAll('#Like');
			for(var i=0;i<f.length;++i)
				f[i].style.visibility="hidden";
			f=document.querySelectorAll('#Edit');
						for(var i=0;i<f.length;++i)
				f[i].style.visibility="hidden";
			f=document.querySelectorAll('#Delete');
						for(var i=0;i<f.length;++i)
				f[i].style.visibility="hidden";
		 }
        else
		{
			this._currentUser=name;
			document.getElementById('Registration').style.visibility="hidden";
			document.getElementById('buttonAddPost').style.visibility="visible";
			document.getElementById('EXIT').style.visibility="visible";
			document.getElementById('nameOf').style.visibility="visible";
			let f=document.querySelectorAll('#Like');
			for(var i=0;i<f.length;++i)
				f[i].style.visibility="visible";
			f=document.querySelectorAll('#Edit');
						for(var i=0;i<f.length;++i)
				f[i].style.visibility="visible";
			f=document.querySelectorAll('#Delete');
						for(var i=0;i<f.length;++i)
				f[i].style.visibility="visible";
			document.getElementById('nameOf').textContent=name;
			 f=document.querySelectorAll('#Delete');
			for(var i=0;i<f.length;++i)
			{
				if(f[i].parentNode.parentNode.getElementsByClassName('name').item(0).textContent!=name)
				f[i].style.visibility="hidden";
				
			}
			f=document.querySelectorAll('#Edit');
			for(var i=0;i<f.length;++i)
			{
				if(f[i].parentNode.parentNode.getElementsByClassName('name').item(0).textContent!=name)
				f[i].style.visibility="hidden";		
			}
			f=document.querySelectorAll('#Like');
				for(var i=0;i<f.length;++i)
			{
				if(f[i].parentNode.parentNode.parentNode.getElementsByClassName('ListOfLikes')[0].value.includes(name)) 
			    f[i].src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925290Like.png";
			    else
				f[i].src="http://s1.iconbird.com/ico/2013/9/452/w512h5121380476894like.png";
			}
		}
    }
	GetName()
	{
		return this._currentUser;
	}
	CheckUser()
	{
		 if(this._currentUser==="")
		 {
			 new User("");
			return;
		 }
        else
		{
			let f=document.querySelectorAll('#Like');
			for(var i=0;i<f.length;++i)
				f[i].style.visibility="visible";
			 f=document.querySelectorAll('#Delete');
			for(var i=0;i<f.length;++i)
			{
				if(f[i].parentNode.parentNode.getElementsByClassName('name').item(0).textContent!=this._currentUser)
				f[i].style.visibility="hidden";
				
			}
			f=document.querySelectorAll('#Edit');
			for(var i=0;i<f.length;++i)
			{
				if(f[i].parentNode.parentNode.getElementsByClassName('name').item(0).textContent!=this._currentUser)
				f[i].style.visibility="hidden";
				
			}
		}
	}
}
let user=new User("");