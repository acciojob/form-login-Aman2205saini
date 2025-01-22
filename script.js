function getFormvalue() {
    //Write your code here
	var fname=document.getElementsByName("fname")[0].value
    var lname=document.getElementsByName("lname")[0].value
	var name=`${fname} ${lname}`
	alert(name)

}
