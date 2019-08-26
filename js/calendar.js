// API keys
// these are generated using the google cloud platform api keys
const CALENDAR_KEY = 'AIzaSyD-Dmwq4Nf0oSyaPdh_zM2NMqCgYnIRb14';
const CALENDAR_ID = 'kg5v9k480jn2qahpmq33h8g7cs@group.calendar.google.com';

// constants for the look and feel of the calendar
const STATE_LIST = 'listMonth';
const STATE_GRID = 'dayGridMonth';
const TOGGLE_SIZE = 900;

let state;
let calendar;

document.addEventListener('DOMContentLoaded', () => {
	let calendarElement = document.getElementById('css-calendar');
	let switchElement = document.getElementById('css-calendar-switch');
	let eventCloseElement = document.getElementById('event-close');

	state = window.innerWidth < TOGGLE_SIZE ? STATE_LIST : STATE_GRID;
	let fixed = false;

	calendar = new FullCalendar.Calendar(calendarElement, {
		plugins: ['dayGrid', 'googleCalendar', 'list'],
		height: 'auto',
		header: {
			left: 'title',
			right: state == STATE_LIST ? 'prev next' : 'prev today next'
		},
		titleFormat: {
			year: 'numeric',
			month: 'long'
		},
		defaultView: state,
		googleCalendarApiKey: CALENDAR_KEY,
		events: {
			googleCalendarId: CALENDAR_ID
		},
		eventClick: function(event) {
			loadEvent(event);
		}
	});
	calendar.render();

	switchElement.addEventListener('click', () => {
		fixed = true;
		switch (state) {
			case STATE_LIST:
				refreshCalendar(STATE_GRID);
				break;
			case STATE_GRID:
				refreshCalendar(STATE_LIST);
				break;
		}
	})

	window.addEventListener('resize', () => {
		if (!fixed) {
			if (window.innerWidth < TOGGLE_SIZE) {
				refreshCalendar(STATE_LIST);
			} else {
				refreshCalendar(STATE_GRID);
			}
		}
	})

	eventCloseElement.addEventListener('click', () => {
		hideEvent();
	});
});

function refreshCalendar(nextState) {
	if (nextState == state) {
		return;
	}

	state = nextState;

	calendar.changeView(state);
	switch (state) {
		case STATE_GRID:
			calendar.setOption('header', {
				left: 'title',
				right: 'prev today next'
			});
			break;
		case STATE_LIST:
			calendar.setOption('header', {
				left: 'title',
				right: 'prev next'
			});
			break;
	}
}

function loadEvent(event) {
	let title = "";
	let date = "";
	let location = "";
	let description = "";

	// fetch calendar data
	if (event) {
		event.jsEvent.preventDefault(); // don't let the browser navigate
		eventData = event.event;
		// title
		title = eventData.title;
		// date
		
		var dash = " - ";
		var colon = ":"
		var space = " ";
		var allDay = eventData.allDay;
		var startMinute = ("0" + eventData.start.getMinutes()).slice(-2);
		var endMinute = ("0" + eventData.end.getMinutes()).slice(-2);
		var startHour = ("0" + eventData.start.getHours()).slice(-2);
		var endHour = ("0" + eventData.end.getHours()).slice(-2);
		var startDay = eventData.start.getDate();
		var endDay = eventData.end.getDate();
		var startMonth = eventData.start.getMonth();
		var endMonth = eventData.end.getMonth();
		var startYear = eventData.start.getFullYear()
		var endYear = eventData.end.getFullYear();

		const months = ["January", "February", "March", "April", "May", "June",
 		"July", "August", "September", "October", "November", "December"
		];
		console.log("start: ".concat(eventData.start.toString(), "\nend: ", eventData.end.toString()));
		var startDate = "";
		var endDate = "";
		if (startYear != endYear) {
			// years differ
			startDate = startDay + space + months[startMonth] + space + startYear;
			endDate = endDay + space + months[endMonth] + space + endYear;
			if (!allDay) {
				startDate += space + startHour + colon + startMinute;
				endDate += space + startHour + colon + startMinute;
			}
		} else if (startMonth != endMonth) {
			// same year, different month
			startDate = startDay + space + months[startMonth];
			endDate = endDay + space + months[endMonth];
			if (!allDay) {
				startDate += space + startHour + colon + startMinute;
				endDate += space + startHour + colon + startMinute;
			}
		} else if (startDay != endDay) {
			// same year, same month, different day
			if (allDay) {
				startDate = startDay;
				endDate = endDay + space + months[endMonth] + space + endYear;
			} else {
				startDate = startDay + space + months[startMonth] + space + startHour + colon + endMinute;
				endDate = endDay + space + months[endMonth] + space + endHour + colon + endMinute;
			}
		} else {
			// same day
			startDate = startDay + space + months[startMonth] + space + startHour + colon + startMinute;
			endDate = endHour + colon + endMinute;

		}
		date = startDate + dash + endDate;

		//	location
		location = eventData.extendedProps.location;

		// description 
		description = eventData.extendedProps.description;
		
		// set text
		document.getElementById("event-text-title").textContent = title;
		document.getElementById("event-text-date").textContent = date;
		document.getElementById("event-text-location").textContent = location;
		document.getElementById("event-text-description").textContent = description;
		document.getElementById('calendar-event').style.display = "block";
	} else {
		console.log("ERROR: event is null");
		//should I keep this?
	}
	
}

function hideEvent() {
	document.getElementById('calendar-event').style.display = "none";
	console.log("set none");
}
