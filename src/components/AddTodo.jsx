import { useState } from "react";

export const AddTodo = ({ onNewTodo }) => {
 const [form, setForm] = useState({
  id: "",
  desc: "",
  done: false,
 });

 const onInputChange = (e) => {
  setForm({
   id: new Date().getTime(),
   desc: e.target.value,
   done: false,
  });
 };

 const onSubmit = (e) => {
  e.preventDefault();
  if (form.desc.length === 0) return;
  onNewTodo(form);
  setForm({
   id: "",
   desc: "",
   done: false,
  });
 };

 return (
  <form onSubmit={onSubmit}>
   <input
    value={form.desc}
    onChange={(e) => onInputChange(e)}
    type='text'
    className='form-control'
   />
   <button type='submit' className='btn btn-primary mt-2'>
    Add
   </button>
  </form>
 );
};
