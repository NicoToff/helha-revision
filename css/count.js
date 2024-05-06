const countEl = document.getElementById('count');

updateCount();

function updateCount() {
	fetch('https://api.countapi.xyz/update/helha-revision.com/count/?amount=1')
		.then(res => res.json())
		.then(res => {
			countEl.innerHTML = res.value;
	});
}