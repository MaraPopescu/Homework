import "./List.css";
function List({ nameAtr, dateAtr, contentAtr }) {
  return (
    <div className='componenta-lista'>
      <h3 className='titlu'>{nameAtr}</h3>
      <h4>Data postarii: {dateAtr}</h4>
      <h4>{contentAtr}</h4>
    </div>
  );
}
export default List;
