document.addEventListener('DOMContentLoaded', () => {
	let element = document.getElementById('css-calendar');
	let calendar = new FullCalendar.Calendar(element, {
		plugins: ['dayGrid', 'googleCalendar', 'list'],
		height: 'auto',
		header: {
			left: 'title',
			right: 'prev today next'
		},
		titleFormat: {
			year: 'numeric',
			month: 'long'
		},
		defaultView: window.innerWidth < 800 ? 'listMonth' : 'dayGridMonth',
		googleCalendarApiKey: 'AIzaSyD-Dmwq4Nf0oSyaPdh_zM2NMqCgYnIRb14',
		events: {
			googleCalendarId: 'kg5v9k480jn2qahpmq33h8g7cs@group.calendar.google.com'
		}
	});
	calendar.render();
});