document.querySelector('#btn').addEventListener('click', function (argument) {
	let name = document.querySelector('#name').value,
		sbj = document.querySelector('#sbj').value,
		email = document.querySelector('#email').value,
		msg = document.querySelector('#msg').value,
		inp = [];
		document.querySelectorAll('.in').forEach((item) => {
			inp.push(item.value)
		  if (item.value == '') {

		  	item.style.borderBottom = '1px solid rgba(255, 44, 41, 0.9)'
		  }else{
		  	item.style.borderBottom = '1px solid rgba(155, 255, 130, 0.9)'
		  }
		})
		
		if (inp.includes('') == false) {


		  
		$.ajax({
			url: '../php/mail.php',
			type: 'POST',
			dataType: 'html',
			data: {'name': name,'sbj': sbj,'email': email,'msg': msg},
		})
		.done(function() {
			document.querySelector('#name').value = '';
			document.querySelector('#sbj').value = '';
			document.querySelector('#email').value = '';
			document.querySelector('#msg').value = '';
			document.querySelector('#btn').value ='done'
			setTimeout(() => {
			  document.querySelectorAll('.in').forEach((item) => {
			    item.style.borderBottom = '1px solid rgba(255, 255, 255, 0.9)'
			    document.querySelector('#btn').value ='Send Mail'
			  })
			}, 2300)
		})
		.fail(function() {
			
		})
		.always(function() {
			
		});
		}

})