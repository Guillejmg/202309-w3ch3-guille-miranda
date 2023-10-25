import { Task } from "../model/task";

export const repo = ()=>{

const data :Task[]=[
  {id:crypto.randomUUID(), name:'django' , owner:'guille', isCompleted: false}
]
return data;}
