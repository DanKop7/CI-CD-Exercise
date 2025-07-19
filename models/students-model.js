import { readFileSync } from 'fs';

const students = JSON.parse(
  readFileSync('./models/students.json', 'utf-8'));

export default students;
