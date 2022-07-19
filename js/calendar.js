// API keys
// these are generated using the google cloud platform api keys
const CALENDAR_KEY = 'AIzaSyD-Dmwq4Nf0oSyaPdh_zM2NMqCgYnIRb14';
const CALENDAR_ID = 'kg5v9k480jn2qahpmq33h8g7cs@group.calendar.google.com';

// constants for the look and feel of the calendar
const STATE_LIST = 'listMonth';
const STATE_GRID = 'dayGridMonth';
const TOGGLE_SIZE = 900;

// used for clickable event information
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let state;
let calendar;

document.addEventListener('DOMContentLoaded', () => {
	let calendarElement = document.getElementById('css-calendar');
	let switchElement = document.getElementById('css-calendar-switch');

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
		eventColor: '#9d68dc',
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

	let eventCloseElement = document.getElementById('event-close');
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
	// fetch calendar data
	if (event) {
		event.jsEvent.preventDefault(); // don't let the browser navigate

		let title = "";
		let date = "";
		let location = "";
		let description = "";

		let eventData = event.event;
		let eventDataExtended = eventData.extendedProps;

		// title
		title = eventData.title;

		// date
		let dash = " - ";
		let colon = ":"
		let space = " ";
		let allDay = eventData.allDay;
		let startMinute = ("0" + eventData.start.getMinutes()).slice(-2);
		let endMinute = ("0" + eventData.end?.getMinutes()).slice(-2);
		let startHour = ("0" + eventData.start.getHours()).slice(-2);
		let endHour = ("0" + eventData.end?.getHours()).slice(-2);
		let startDay = eventData.start.getDate();
		let endDay = eventData.end?.getDate();
		let startMonth = eventData.start.getMonth();
		let endMonth = eventData.end?.getMonth();
		let startYear = eventData.start.getFullYear()
		let endYear = eventData.end?.getFullYear();
		let startDate = "";
		let endDate = "";
		if (!eventData.end) {
			// no end date
			startDate = startDay + space + MONTHS[startMonth] + space + startYear + space + startHour + colon + startMinute;
			dash = "";
		} else if (startYear != endYear) {
			// years differ - "dd MMM YYYY - dd MMM YYYY"
			startDate = startDay + space + MONTHS[startMonth] + space + startYear;
			endDate = endDay + space + MONTHS[endMonth] + space + endYear;
			if (!allDay) {
				// "dd MMM YYYY HH:MM - dd MMM YYYY HH:MM"
				startDate += space + startHour + colon + startMinute;
				endDate += space + startHour + colon + startMinute;
			}
		} else if (startMonth != endMonth) {
			// same year, different month - "dd MMM - dd MMM"
			startDate = startDay + space + MONTHS[startMonth];
			endDate = endDay + space + MONTHS[endMonth];
			if (!allDay) {
				// "dd MMM HH:MM - dd MMM HH:MM"
				startDate += space + startHour + colon + startMinute;
				endDate += space + startHour + colon + startMinute;
			}
		} else if (startDay != endDay) {
			// same year, same month, different day - "dd - dd MMM"
			if (allDay) {
				startDate = startDay;
				endDate = endDay + space + MONTHS[endMonth];
			} else {
				// "dd MMMM HH:MM - dd MMM HH:MM"
				startDate = startDay + space + MONTHS[startMonth] + space + startHour + colon + endMinute;
				endDate = endDay + space + MONTHS[endMonth] + space + endHour + colon + endMinute;
			}
		} else {
			// same day - "dd MMM HH:MM - HH:MM"
			startDate = startDay + space + MONTHS[startMonth] + space + startHour + colon + startMinute;
			endDate = endHour + colon + endMinute;
		}
		date = startDate + dash + endDate;

		// location
		location = eventDataExtended.location;

		// description 
		description = parseDescription(eventDataExtended.description);

		// Facebook event button
		let eventFacebookLinkElement = document.getElementById("facebook-link");
		let link = parseFacebookLink(eventDataExtended.description);
		if (link) {
			eventFacebookLinkElement.onclick = () => {window.open(link)};
			eventFacebookLinkElement.style.display = "inline";
		} else {
			// catches null regex matches
			eventFacebookLinkElement.style.display = "none";
		}
	
		// set text
		document.getElementById("event-text-title").textContent = title;
		document.getElementById("event-text-date").textContent = date;
		document.getElementById("event-text-location").textContent = location;
		let descStr = "";
		for (let line in description) {
			descStr += description[line].toString() + "\r\n";
		}
		document.getElementById("event-text-description").textContent = descStr; 
		document.getElementById('calendar-event').style.display = "block"; //show
	} else {
		//null event
		console.error("Event is null");
	}
	
}

function hideEvent() {
	// hide event information by hiding the element
	document.getElementById('calendar-event').style.display = "none";
}

function parseDescription(description) {
	let retDesc = "";
	let regex = new RegExp(/&lt;desc&gt;(.*?)&lt;\/desc\&gt;/, "g");
	// parse and escape for <desc></desc> tags. toString prevent XSS
	// make descripton string, checks for null if no description specified
	description = description == null ? null : description.toString();
	let match = regex.exec(description);
	if (match != null) {
		retDesc = match[1];
	} else {
		// null, so just use the description
		retDesc = description;
	}
	// parse and split on <br>
	if (retDesc) {
		// checks for null
		let regexBr = new RegExp(/\<br\>/, "g");
		return retDesc.split(regexBr);
		//returns list of lines
	} else {
		return retDesc;
	}
	
}

function parseFacebookLink(description) {
	let retLink = "";
	let regex = new RegExp(/&lt;fb&gt;(.*?)&lt;\/fb\&gt;/);
	// parse and escape for <fb></fb> tags. 
	// make descripton string, checks for null if no description specified
	description = description == null ? null : description.toString();
	let match = regex.exec(description);
	if (match != null) {
		retLink = match[1];
	}
	// parse any <a> tags
	let regexA = new RegExp(/\<a.*\>(.*?)\<\/a\>/);
	// check for null
	retLink = description == null ? null : retLink.toString();
	match = regexA.exec(retLink);
	if (match != null) {
		retLink = match[1];
	} 
	return retLink;
}