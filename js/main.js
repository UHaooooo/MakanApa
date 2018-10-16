$(document).ready(function () {
	refreshRestaurantUL();

	//$("#makanApaBtn").on("click", randomizeRestaurant());

	$(document).on("click", "#makanApaBtn", randomizeRestaurant);
});

function refreshRestaurantUL() {
	$("#restaurantUL").html("");

	$.getJSON("data.json", function (data) {
		var tempRestaurantList = [];

		$.each(data, function (index, value) {
			tempRestaurantList.push({
				id: value.id,
				name: value.name,
				pricePoint: value.pricePoint,
			});

			var li = $("<li>", { "id": "restaurant_" + value.id, "class": "restaurant" }).html(value.name).appendTo("#restaurantUL");
		});
	});
}

function randomizeRestaurant() {
	$(".restaurant").removeClass("chosen_restaurant");

	$.getJSON("data.json", function (data) {
		var tempRestaurantList = [];
		var random;
		$.each(data, function (index, value) {
			tempRestaurantList.push({
				id: value.id,
				name: value.name,
				pricePoint: value.pricePoint,
			});
		});

		random = Math.floor((Math.random() * (tempRestaurantList.length)) + 1);

		$("#restaurant_" + random.toString()).addClass("chosen_restaurant");
		console.log(tempRestaurantList[random - 1]);
	});
}