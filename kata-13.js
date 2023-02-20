const talkingCalendar = function (date) {
  let month = "";
  let day = "";
  const year = date[0] + date[1] + date[2] + date[3];

  month = date[5] + date[6];

  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
    default:
      return "Improper date format";
  }

  day = date[8] + date[9];

  if (day === "01") {
    day = `${day[1]}st`;
  }
  if (day === "21" || day === "31") {
    day = `${day}st`;
  }
  if (day === "02") {
    day = `${day[1]}nd`;
  }
  if (day === "22") {
    day = `${day}nd`;
  }
  if (day === "03") {
    day = `${day[1]}rd`;
  }
  if (day === "23") {
    day = `${day}rd`;
  }
  if (
    day === "04" ||
    day === "05" ||
    day === "06" ||
    day === "07" ||
    day === "08" ||
    day === "09"
  ) {
    day = `${day[1]}th`;
  }
  if (
    day === "10" ||
    day === "11" ||
    day === "12" ||
    day === "13" ||
    day === "14" ||
    day === "15" ||
    day === "16" ||
    day === "17" ||
    day === "18" ||
    day === "19" ||
    day === "20" ||
    day === "24" ||
    day === "25" ||
    day === "26" ||
    day === "27" ||
    day === "28" ||
    day === "29" ||
    day === "30"
  ) {
    day = `${day}th`;
  }

  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};

console.log(talkingCalendar("2017/12/02")); // --> December 2nd, 2017
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/13/24"));
