document.addEventListener('DOMContentLoaded', () => {
  flatpickr("#pickup-datepicker", {
    dateFormat: "Y-m-d",
    minDate: "today",
    maxDate: new Date().fp_incr(90),
    allowInput: false
  });

  flatpickr("#return-datepicker", {
    dateFormat: "Y-m-d",
    minDate: "today",
    maxDate: new Date().fp_incr(90),
    allowInput: false
  });

  flatpickr("#pickup-timepicker", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    minTime: "06:00",
    maxTime: "22:00",
    minuteIncrement: 30,
    time_24hr: false,
    allowInput: false,
    static: true
  });

  flatpickr("#return-timepicker", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    minTime: "06:00",
    maxTime: "22:00",
    minuteIncrement: 30,
    time_24hr: false,
    allowInput: false,
    static: true
  });
});