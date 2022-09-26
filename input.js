document.querySelectorAll('.input').forEach((e) => {
	e.querySelector('input').addEventListener('focus', () => e.classList.add('active'))
	e.querySelector('input').addEventListener('focusout', () => e.classList.remove('active'))
})
