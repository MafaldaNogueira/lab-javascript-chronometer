class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
  }

 
  
  startClick(callback) {
  this.intervalId = setInterval(() => {
    return this.currentTime++
    callback();
  }, 1000);
  }



  getMinutes() {
   let minutes = Math.floor(this.currentTime / 60);
   return minutes
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds
  }

  twoDigitsNumber(number) {

    if(number.toString().length <= 2){
      return `0${number}`
    } else {
      return number
    }
  }
  stopClick() {
   clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0; 
  }

  splitClick() {
    const min= this.getMinutes();
    const sec=this.getSeconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}