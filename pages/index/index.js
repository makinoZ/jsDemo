function myFunction(){
	console.log(111);
	//querySelector()这个函数来获取H1对象
	var myHeading = document.querySelector('h1');
	// 将'这是改变后的标题'赋值给变量myHeading的属性innerHTML
	myHeading.innerHTML= '这是改变后的标题';
}