class Zoo {

	constructor() {
		this.zoo = [];
	}

	add(animal) {
		for (var i = 0; i < this.zoo.length; i++) {
			if(this.zoo[i].name === animal.name) {
				this.zoo[i].food = animal.food;
				this.zoo[i].image = animal.image;
				console.log(this.zoo);
				return
			}
		}

		if(this.validate(animal) === false) {
			return false;
		}

		this.zoo.push({
			name: animal.name,
			food: animal.food,
			location: String(this.zoo.length + 1),
			image: animal.image
		});
		console.log(this.zoo);
	}

	display() {
		var cages = document.querySelectorAll(".cage");
		this.zoo.forEach((animal, index) => {
			$(cages[index]).empty();
			$(cages[index]).append(
				$("<h2>", {text: animal.name}),
				$("<span>", {text: animal.food})
			);
			$(cages[index]).css('background-image', 'url(' + animal.image + ')');
			$(cages[index]).css('background-size', 'cover');
			$(cages[index]).css('background-position', 'center');
			$(cages[index]).dblclick(() => this.get(animal));
		})
	}

	populate(animals) {
		animals.forEach((animal) => {
			this.zoo.push(animal);
		})
	}

	get(animal) {
		$("input[name=name]").val(animal.name);
		$("input[name=food]").val(animal.food);
		$("input[name=image]").val(animal.image);
	}

	validate(animal) {
		for (var i = 0; i < this.zoo.length; i++) {
			if (animal.food === this.zoo[i].food) {
				console.log("food exists");
				return false;
			}
		}
	}



}