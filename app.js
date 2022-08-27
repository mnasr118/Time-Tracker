const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");
const hours = document.querySelectorAll(".hours");
const difference = document.querySelectorAll(".difference");
function day(item) {
	daily.addEventListener("click", () => {
		daily.classList.add("active");
		weekly.classList.remove("active");
		monthly.classList.remove("active");

		hours.forEach((hour) => {
			if (hour.parentElement.classList.contains(item[0])) {
				hour.innerHTML = item[1];
			}
		});
		difference.forEach((number) => {
			if (number.parentElement.classList.contains(item[0])) {
				number.innerHTML = "Yesterday  -" + `${item[2]}`;
			}
		});
	});
}

function week(item) {
	weekly.addEventListener("click", () => {
		daily.classList.remove("active");
		weekly.classList.add("active");
		monthly.classList.remove("active");

		hours.forEach((hour) => {
			if (hour.parentElement.classList.contains(item[0])) {
				hour.innerHTML = item[1];
			}
		});
		difference.forEach((number) => {
			if (number.parentElement.classList.contains(item[0])) {
				number.innerHTML = "Last Week  -" + `${item[2]}`;
			}
		});
	});
}

function month(item) {
	monthly.addEventListener("click", () => {
		daily.classList.remove("active");
		weekly.classList.remove("active");
		monthly.classList.add("active");

		hours.forEach((hour) => {
			if (hour.parentElement.classList.contains(item[0])) {
				hour.innerHTML = item[1];
			}
		});
		difference.forEach((number) => {
			if (number.parentElement.classList.contains(item[0])) {
				number.innerHTML = "Last Month  -" + `${item[2]}`;
			}
		});
	});
}

function run(item) {
	daily.classList.add("active");
	weekly.classList.remove("active");
	monthly.classList.remove("active");

	hours.forEach((hour) => {
		if (hour.parentElement.classList.contains(item[0])) {
			hour.innerHTML = item[1];
		}
	});
	difference.forEach((number) => {
		if (number.parentElement.classList.contains(item[0])) {
			number.innerHTML = "Last Week  -" + `${item[2]}`;
		}
	});
}

fetch("data.json")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		data.forEach((dat) => {
			day([
				dat.title,
				dat.timeframes.daily.current,
				dat.timeframes.daily.previous,
			]);
			week([
				dat.title,
				dat.timeframes.weekly.current,
				dat.timeframes.weekly.previous,
			]);
			month([
				dat.title,
				dat.timeframes.monthly.current,
				dat.timeframes.monthly.previous,
			]);
			run([
				dat.title,
				dat.timeframes.daily.current,
				dat.timeframes.daily.previous,
			]);
		});
	});
