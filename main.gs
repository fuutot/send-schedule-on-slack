function sendTodayScheduleOnSlack() {
  let BOT_URL = PropertiesService.getScriptProperties().getProperty("BOT_URL");

  let content = getTodaySchedule();

  let jsonData = {
    "text": content,
  };

  let payload = JSON.stringify(jsonData);

  let params = {
    "method": "post",
    "contentType": "application/json",
    "payload": payload,
  };

  UrlFetchApp.fetch(BOT_URL, params);
}


function getTodaySchedule() {
  let CALENDAR_ID = PropertiesService.getScriptProperties().getProperty("CALENDAR_ID");
  let calendar = CalendarApp.getCalendarById(CALENDAR_ID);
  let startTime = new Date();
  let y = startTime.getFullYear();
  let m = startTime.getMonth();
  let d = startTime.getDate();
  let endTime = new Date(y, m, d+1);

  let events = calendar.getEvents(startTime, endTime);

  let text = "";

  if(events.length > 0) {
    for(let event of events) {
      let title = event.getTitle();
      let startEventTime = event.getStartTime();
      let endEventTime = event.getEndTime();

      startEventTime = Utilities.formatDate(startEventTime, "Asia/Tokyo", "HH:mm");
      endEventTime = Utilities.formatDate(endEventTime, "Asia/Tokyo", "HH:mm");

      text += `${startEventTime} ~ ${endEventTime} ${title}\n`;
    }
  }else{
    text = "何もなし";
  }
  return text;  
}