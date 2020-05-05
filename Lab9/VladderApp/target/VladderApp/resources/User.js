class User{
	 constructor(name=[]) {
		 if(name==="")
		 {
			 
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
			document.getElementById('Registration').style.visibility="hidden";
			document.getElementById('nameOf').textContent=name;
			let f=document.querySelectorAll('#Delete');
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
		}
    }
     ChangeUserOnOff()
	{
		if(document.getElementById('Registration').style.visibility=="hidden")
			new User("");
		else
			new User("TherIsName");
	}
}
