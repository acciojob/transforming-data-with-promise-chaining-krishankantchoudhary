//your JS code here. If required.
const button=document.getElementById("btn");
const output=document.getElementById("output");


button.addEventListener("click",function(){
	const value=Number(document.getElementById("ip").value);
	
	let firstpromise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(value);
		},2000);
	});
	
	firstpromise.
	then((result)=>{
		output.textContent=`Result: ${result}`;
		return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(result)
		},1000);
	  });
	})
	.then((secondresult)=>{
		let multipletwo=secondresult*2;
		output.textContent=`Result: ${multipletwo}`;
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(multipletwo);
			},1000);
		})
	})
	.then((thirdresult)=>{
		let subtractthird=thirdresult-3;
		output.textContent=`Result: ${subtractthird}`;
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(subtractthird);
			},1000);
		})
	})
	.then((fourthresult)=>{
		let dividetwo=fourthresult/2;
		output.textContent=`Result: ${dividetwo}`;
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(dividetwo);
			},1000);
		})
	})
	.then((fifthresult)=>{
		let addten=fifthresult+10;
		output.textContent=`Final Result: ${addten}`;
	})
	

	
});





