import { useState } from "react";
import "./NewList.css";
function NewList({ handleAddList }) {
  const [name, setName] = useState(" ");
  const [date, setDate] = useState(" ");
  const [content, setContent] = useState(" ");
  return (
    <div className='componenta-lista-noua'>
      <div>
        <input
          className='content'
          type='text'
          placeholder='Nume lista'
          onChange={(event) => {
            setName(event.target.value);
          }}></input>
      </div>
      <div>
        <input
          className='content'
          type='date'
          placeholder='Data postarii'
          onChange={(event) => {
            setDate(event.target.value);
          }}></input>
      </div>
      <div>
        <textarea
          className='content'
          placeholder='Continut lista'
          onChange={(event) => {
            setContent(event.target.value);
          }}></textarea>
      </div>
      <div>
        <button
          className='button'
          onClick={() => {
            handleAddList(name, date, content);
          }}>
          {" "}
          Salveaza lista
        </button>
      </div>
    </div>
  );
}
export default NewList;
