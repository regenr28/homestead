let menu = document.querySelector('#nav-icon');
let headernav = document.querySelector('header');
menu.addEventListener("click", function() {
	menu.classList.toggle('open');
})
const interestedServicesCheckboxes = document.querySelectorAll('[name="interestedServices"]');

function requireLeastOneChecked() {
	let atLeastOneChecked = false;
	for (i = 0; i < interestedServicesCheckboxes.length; i++) {
		if (interestedServicesCheckboxes[i].checked) {
			atLeastOneChecked = true;
		}
	}
	if (atLeastOneChecked) {
		for (i = 0; i < interestedServicesCheckboxes.length; i++) {
			interestedServicesCheckboxes[i].required = false;
		}
	} else {
		for (i = 0; i < interestedServicesCheckboxes.length; i++) {
			interestedServicesCheckboxes[i].required = true;
		}
	}
}
requireLeastOneChecked();
interestedServicesCheckboxes.forEach(function($el) {
	$el.addEventListener('click', function() {
		requireLeastOneChecked();
	})
})
window.addEventListener('scroll', function() {
	var nav = document.querySelector('header');
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > 300) {
		nav.classList.add('scrolled');
	} else {
		nav.classList.remove('scrolled');
	}

});
