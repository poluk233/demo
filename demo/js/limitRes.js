export default class limitRes {
  isRun = false;
  taskList = [];
  resultList = [];
  max = 10;
  totalCount = 0;
  runCount = 0;
  constructor(max = 10) {
    this.max = max;
  }
  add(taskList = []) {
    taskList.forEach((task, index) => {
      this.taskList.push({ index, task });
    });
    this.totalCount = this.taskList.length;
  }
  start() {
    if (this.isRun) return;
    console.log("开始执行----------")
    this.isRun = true;
    let runCount = Math.min(this.max, this.taskList.length);
    this.taskList.splice(0, runCount).forEach((taskObj) => {
      this._run(taskObj);
    });
  }
  _run({ task, index }) {
    console.log(`开始执行-----------${index}`);
    task()
      .then((res) => {
        this.resultList[index] = res;
      })
      .catch((err) => {
        this.resultList[index] = err;
      })
      .finally(() => {
        this.runCount++;
        console.log(`执行完成-----------${index}`);
        if (this.totalCount === this.runCount) {
          this.isRun = false;
          this.on && this.on(`完成了------最后---${index}---`);
        }
        if (this.taskList.length > 0 && this.isRun) {
          let [taskObj] = this.taskList.splice(0, 1);
          this._run(taskObj);
        }
      });
  }
  pause() {
    this.isRun = false;
    console.log("暂停-----------");
  }
}