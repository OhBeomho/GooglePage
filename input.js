document.querySelectorAll('.input').forEach((e) => {
	e.querySelector('input').addEventListener('focus', () => {
		e.classList.add('active');

		if (!e.classList.contains('error')) {
			e.querySelector('.placeholder').classList.add('activecolor');
		}

		e.querySelector('.placeholder').classList.add('active');
	});

	e.querySelector('input').addEventListener('focusout', () => {
		if (!e.querySelector('input').value) {
			e.querySelector('.placeholder').classList.remove('active');
		}

		e.classList.remove('active');
		e.querySelector('.placeholder').classList.remove('activecolor');
	});
});
