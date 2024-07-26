class AlarmClock {
  constructor() {
    this.alarmCollection  = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    let searchDuplicate = this.alarmCollection.find(clock => {
      return clock.time === time;
    });
    
    if (searchDuplicate) {
      console.warn('Уже присутствует звонок на это же время');
    }
  
    this.alarmCollection.push({callback, time, canCall: true});
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
  }

  getCurrentFormattedTime() {
    let date = new Date();

    return new Intl.DateTimeFormat('ru', {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(clock => {
        let time = this.getCurrentFormattedTime();

        if (clock.time === time && clock.canCall) {
          clock.canCall = false;
          clock.callback();
        }
      }
    )}, 1000);
  }

  stop () {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls () {
    this.alarmCollection.forEach(clock => {
      clock.canCall = true;
    });
  }

  clearAlarms () {
    this.stop();
    this.alarmCollection = [];
  }
}
