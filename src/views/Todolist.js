import "./Todolist.css";
import { useState } from "react";
import List from "../components/List";
import NewList from "../components/NewList";
import Search from "../components/Search";
function Todolist() {
  const [userList, setuserList] = useState([
    { name: "Lista 1", date: "1.10.2021", content: "blablabla" },
    { name: "Lista 2", date: "1.10.2021", content: "sadsdasca" },
    { name: "Lista 3", date: "1.10.2021", content: "sadsdasca" },
  ]);
  const [useFilteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState(" ");

  const handleAddList = (name, date, content) => {
    const newUserList = userList.map((user) => {
      return user;
    });
    newUserList.push({ name: name, date: date, content: content });
    setuserList(newUserList);
  };
  const handleSearchList = (inputValue) => {
    console.log("Valoare noua", inputValue);
    setSearch(inputValue);
  };
  return (
    <>
      <Search handleSearchList={handleSearchList} />
      <NewList handleAddList={handleAddList} />
      <div className='container-list'>
        {userList.map((user, index) => {
          return (
            <List
              nameAtr={user.name}
              dateAtr={user.date}
              contentAtr={user.content}
              key={index}></List>
          );
        })}
      </div>
    </>
  );
}
export default Todolist;
