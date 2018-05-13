fetch('animals.json')
.then(response => response.json())
.then(animals => initZoo(animals));

function initZoo(animalsData) {
	var zoo = new Zoo();
	zoo.populate(animalsData.animals);
	zoo.display();

	$("form").on("change", onChange);

	$("form").submit((e) => {
		e.preventDefault();

		var newAnimalData = () => {
			return zoo.add({
			name: $("input[name=name]").val(),
			food: $("input[name=food]").val(),
			image: $("input[name=image]").val()
		})};

		if (newAnimalData() === false) {
			showError();
		} else {
			newAnimalData();
		}
		zoo.display();
	});
}

function onChange() {
	removeError();
	showPreview();
}

function showError() {
	$(".data").prepend(
		$("<span>", {text: "This food already exists"}).addClass("error")
	)
}

function removeError() {
	if ($(".error")) {
		$(".error").remove();
	}
}

function showPreview() {
	$("#preview").empty();
	$("#preview").append(
		$("<h2>", {text: "Preview"}),
		$("<div>", { height: "100%", width: "100%"}).css({
			'background-image': 'url(' + $("input[name=image]").val() + ')',
			'background-size': 'cover'
		})
	)
}


