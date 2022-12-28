
export class Job {
  constructor(private role: string, private _salary: number) { }

  get salary():number {
    return this._salary;
  }

  work(personName: string): void {
    console.log(`${personName} works as a ${this.role}`);
  }

  clone(): Job{
    return new Job(this.role, this.salary);
  }
}