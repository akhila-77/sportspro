function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;
var newpassword=document.myform.newpassword.value;
var birthday=document.myform.birthday.value;
 

if (name==null || name==""){  
  alert("please fill the email");  
  return false;  
}else if(password==null || password==""){  
  alert("Please fill the password");  
  return false;  
  }
else if(newpassword==null || newpassword==""){  
	alert("Please fill the new password");  
	return false;  
  }
else if(password!==newpassword){
	alert("the two passwords doesnt match");
	return false;
}
else if ( ( myform.gender[0].checked == false ) && ( myform.gender[1].checked == false ) )
{
alert ( "Please choose your Gender: Male or Female" );
return false;
}
else if(birthday==null || birthday==""){
	alert("please fill DOB");
	return false;
}
else{
	alert("you have succesfully signed up. now you can login")
}
}

function validatelgform(){
var email=document.lgform.email.value;  
var password=document.lgform.password.value;

if(email==null || email==""){
	alert("please enter the email");
	return false;
}
else if(password==null || password==""){
	alert("please enter the password");
	return false;
}
else{
	alert("you have succesfully logged in");
}
}


