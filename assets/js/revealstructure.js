$(document).ready(function() {

	$("#btn-togglestruct").on('click', function() {
		this.blur();

		$(".rating").toggleClass('show-structure');

	});

});