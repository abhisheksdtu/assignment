let codeBox = document.querySelector('#runableCode');
let runBtn = document.querySelector('.submitBtn');
const outputDiv = document.querySelector('.output div');

runBtn.addEventListener('click', async function () {
	outputDiv.innerHTML = 'Loading.....';
	let code = codeBox.innerText;
	var data = JSON.stringify({
		code: code,
		language: 'java',
		input: '',
	});

	var config = {
		method: 'post',
		url: 'https://pepblog.herokuapp.com/code',
		headers: {
			'Content-Type': 'application/json',
		},
		data: data,
	};

	axios(config)
		.then(function (response) {
			outputDiv.innerHTML = response.data.output;
		})
		.catch(function (error) {
			outputDiv.innerHTML = error;
		});
});
