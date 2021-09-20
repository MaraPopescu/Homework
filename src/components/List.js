import "./List.css";
function List({ nameAtr, dateAtr, contentAtr, idAtr, handleDelete }) {
  return (
    <div className='componenta-lista'>
      <h3 className='titlu'>{nameAtr}</h3>
      <h4>ID: {idAtr}</h4>
      <h4>Data postarii: {dateAtr}</h4>
      <h4>{contentAtr}</h4>

      <button
        onClick={(user) => {
          handleDelete({ idAtr });
        }}>
        Sterge lista
      </button>
    </div>
  );
}
export default List;
