// API keys
// these are generated using the google cloud platform api keys
const CALENDAR_KEY = "AIzaSyD-Dmwq4Nf0oSyaPdh_zM2NMqCgYnIRb14";
const CALENDAR_ID = "kg5v9k480jn2qahpmq33h8g7cs@group.calendar.google.com";

// constants for the look and feel of the calendar
const STATE_LIST = "listMonth";
const STATE_GRID = "dayGridMonth";
const TOGGLE_SIZE = 900;

// used for clickable event information
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let state;
let calendar;

document.addEventListener("DOMContentLoaded", () => {
  let calendarElement = document.getElementById("css-calendar");
  let switchElement = document.getElementById("css-calendar-switch");

  state = window.innerWidth < TOGGLE_SIZE ? STATE_LIST : STATE_GRID;
  let fixed = false;

  calendar = new FullCalendar.Calendar(calendarElement, {
    plugins: ["dayGrid", "googleCalendar", "list"],
    height: "auto",
    header: {
      left: "title",
      right: state == STATE_LIST ? "prev next" : "prev today next",
    },
    titleFormat: {
      year: "numeric",
      month: "long",
    },
    defaultView: state,
    googleCalendarApiKey: CALENDAR_KEY,
    events: {
      googleCalendarId: CALENDAR_ID,
    },
    eventColor: "#9d68dc",
    eventClick: function (event) {
      loadEvent(event);
    },
  });
  calendar.render();

  switchElement.addEventListener("click", () => {
    fixed = true;
    switch (state) {
      case STATE_LIST:
        refreshCalendar(STATE_GRID);
        break;
      case STATE_GRID:
        refreshCalendar(STATE_LIST);
        break;
    }
  });

  window.addEventListener("resize", () => {
    if (!fixed) {
      if (window.innerWidth < TOGGLE_SIZE) {
        refreshCalendar(STATE_LIST);
      } else {
        refreshCalendar(STATE_GRID);
      }
    }
  });

  let eventCloseElement = document.getElementById("event-close");
  eventCloseElement.addEventListener("click", () => {
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
      calendar.setOption("header", {
        left: "title",
        right: "prev today next",
      });
      break;
    case STATE_LIST:
      calendar.setOption("header", {
        left: "title",
        right: "prev next",
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
    let colon = ":";
    let space = " ";
    let allDay = eventData.allDay;
    let startMinute = ("0" + eventData.start.getMinutes()).slice(-2);
    let endMinute = ("0" + eventData.end?.getMinutes()).slice(-2);
    let startHour = "0" + eventData.start.getHours();
    let endHour = "0" + eventData.end?.getHours()
    let startDay = eventData.start.getDate();
    let endDay = eventData.end?.getDate();
    let startMonth = eventData.start.getMonth();
    let endMonth = eventData.end?.getMonth();
    let startYear = eventData.start.getFullYear();
    let endYear = eventData.end?.getFullYear();
    let startDate = "";
    let endDate = "";
    if (!eventData.end) {
      // no end date
      startDate =
        startDay +
        space +
        MONTHS[startMonth] +
        space +
        startYear +
        space +
        startHour +
        colon +
        startMinute;
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
        startDate =
          startDay +
          space +
          MONTHS[startMonth] +
          space +
          startHour +
          colon +
          endMinute;
        endDate =
          endDay +
          space +
          MONTHS[endMonth] +
          space +
          endHour +
          colon +
          endMinute;
      }
    } else {
      // same day - "dd MMM HH:MM - HH:MM"
      startDate =
        startDay +
        space +
        MONTHS[startMonth] +
        space +
        startHour +
        colon +
        startMinute;
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
      eventFacebookLinkElement.onclick = () => {
        window.open(link);
      };
      eventFacebookLinkElement.style.display = "inline";
    } else {
      // catches null regex matches
      eventFacebookLinkElement.style.display = "none";
    }

    // set text
    document.getElementById("event-text-title").textContent = title;
    document.getElementById("event-text-date").textContent = date;
    document.getElementById("event-text-location").textContent = location;
    if (description === null) {
      document.getElementById("event-text-description").innerHTML = "";
    } else {
      document
        .getElementById("event-text-description")
        .replaceChildren(description);
    }
    document.getElementById("calendar-event").style.display = "block"; //show
  } else {
    //null event
    console.error("Event is null");
  }
}

function hideEvent() {
  // hide event information by hiding the element
  document.getElementById("calendar-event").style.display = "none";
}

function parseDescription(description) {
  const el = parseHTML(description, ["desc"]);
  if (el === null) {
    return null;
  }

  const desc = el.querySelector("fb");
  if (desc) {
    return desc;
  }
  return el;
}

function parseFacebookLink(description) {
  const el = parseHTML(description, ["fb"]);
  if (el === null) {
    return null;
  }

  const fb = el.querySelector("fb");
  if (fb) {
    return fb.textContent;
  }

  const links = el.querySelectorAll("a");
  for (let link of links) {
    const url = new URL(link);
    if (url.hostname == "facebook.com") {
      return link;
    }
  }
}

function parseHTML(html, otherValidTags = null, otherValidProperties = null) {
  if (otherValidTags === null) otherValidTags = [];
  if (otherValidProperties === null) otherValidProperties = new Map();

  if (html === null || html === undefined || html === "") {
    return null;
  }

  const validTags = ["a", "b", "br", "code", "em", "i", "span", "strong", "u"];
  const validProperties = new Map([["a", ["href"]]]);
  html = sanitizeTags(
    html,
    validTags.concat(otherValidTags),
    new Map([...validProperties, ...otherValidProperties]),
  );

  let el = document.createElement("span");
  el.innerHTML = html;
  return el;
}

// sanitizeTags cleans up all html <tags>, checking tag names against an
// allow-list, dropping any invalid or forbidden tags.
// Additionally, all suspicious characters are entity-encoded.
function sanitizeTags(text, validTags, validProperties) {
  let result = "";
  for (;;) {
    const match = text.match(
      /<(\/?)([a-zA-Z]+)([a-zA-Z0-9\s:\/&'"\-_=.~?#*@'+,;%]*?)(\/?)>/,
    );
    if (!match) {
      result += encodeHTML(text);
      break;
    }

    let [_, close, name, props, selfClose] = match;

    result += encodeHTML(text.slice(0, match.index));
    text = text.slice(match.index + match[0].length);

    if (!validTags.includes(name)) {
      result += encodeHTML(match[0]);
      continue;
    }

    props = sanitizeProps(props, validProperties.get(match[2]));
    result += `<${close}${name}${props}${selfClose}>`;
  }
  return result;
}

// sanitizeProps splits up a string of properties, checks them against an
// allow-list, dropping any invalid of forbidden properties.
function sanitizeProps(text, validProperties) {
  if (validProperties === undefined || validProperties === null) return "";
  const props = text
    .split(" ")
    .map((attr) => attr.match(/^([a-zA-Z]+)="([^"]*)"$/))
    .filter((match) => match)
    .map((match) => [match[1], match[2]])
    .filter(([key, value]) => key && value && validProperties.includes(key))
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
  return props.length > 0 ? ` ${props} ` : "";
}

// encodeHTML encodes a possible html text string to use html-entities to
// protect against XSS.
function encodeHTML(text) {
  return (
    text
      // parse selected entities (because *someone* is pasting weird characters to the calendar)
      .replace(
        /\&(#?[a-z0-9]+);/g,
        (match, group) => entityList.get(group) || match,
      )
      // encode all dangerous characters to html entities
      .replace(/[\u00A0-\u9999<>\&]/g, (i) => "&#" + i.charCodeAt(0) + ";")
  );
}

const entityList = new Map([
  ["nbsp", "\u00a0"],
  ["amp", "&"],
]);
