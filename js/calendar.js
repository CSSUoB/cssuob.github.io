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
