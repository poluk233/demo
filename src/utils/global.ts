class GTimer {
  callBackList: Function[] = [];
  runTime = 0;
  Timer: NodeJS.Timeout | null = null;
  constructor() {
    this.startTime();
  }
  addTimeCallBack(fun: Function) {
    !this.callBackList.includes(fun) && this.callBackList.push(fun);
  }

  RCallBack(fun: Function) {
    this.callBackList = this.callBackList.filter((curFun) => curFun !== fun);
  }
  startTime() {
    this.Timer = setInterval(() => {
      this.runTime++;
      this.callBackList.length > 0 &&
        this.callBackList.forEach((callbackfn) => {
          callbackfn(this.runTime);
        });
    }, 1000);
  }
}

const Decimal = (num: number) => (num < 10 ? `0${num}` : num);

const timeFormat = (time: string | number) => {
  let time1 = +time;
  let h = Math.floor(time1 / 60);
  let s = time1 - h * 60;
  return `${Decimal(h)}:${Decimal(s)}`;
};
const gtime = new GTimer();
export { gtime, timeFormat };
