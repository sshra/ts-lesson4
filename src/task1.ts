
import { Job } from "./classes/Job";
import { Person } from "./classes/Person";

const persons: Person[] =
  ['Vasiliy', 'John', 'Arkadiy', null]
  .map(name => name ? new Person(name) : new Person());

const jobs: Job[] = [
  { role: 'Cleaner', salary: 10_000 },
  { role: 'Pusher', salary: 100_000 },
  { role: 'Puller', salary: 15_000 },
  { role: 'Washer', salary: 25_000 },
  { role: 'Manager', salary: 35_000 },
]
.map(jobHandler => new Job(jobHandler.role, jobHandler.salary));

const otherJob: Job = new Job('OtherDuty', 22_000);

persons.map(person => {
  person.assignRandomJobFromList(jobs);
  person.work();
  person.job = otherJob.clone();
});

console.log(persons);
