import { Job } from "./Job";

export class Person {
  private _job?: Job;

  constructor();
  constructor(name: string);

  constructor(public name?: string) { }

  set job(job: Job) {
    this._job = job;
  }

  getSalary(): number | null {
    if (this._job) {
      return this._job?.salary;
    }
    return null;
  }

  work():void {
    if (this._job) {
      this._job?.work(this.name ?? 'Nameless');
    }
  }

  assignRandomJobFromList(jobs: Job[]) {
    this.job = jobs[Math.floor(Math.random() * jobs.length)].clone();
  }
}