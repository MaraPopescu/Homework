import "./Todolist.css";
import { useEffect, useState } from "react";
import List from "../components/List";
import NewList from "../components/NewList";
import Search from "../components/Search";
function Todolist() {
  const [userList, setuserList] = useState([
    {
      name: "Lista 1",
      id: new Date().getTime(),
      date: "1.10.2021",
      content: "Continut lista",
    },
    {
      name: "Lista 2",
      id: new Date().getTime() + 1,
      date: "1.10.2021",
      content: "Continut lista",
    },
    {
      name: "Lista 3",
      id: new Date().getTime() + 2,
      date: "1.10.2021",
      content: "Continut",
    },
  ]);
  const [userFilteredList, setuserFilteredList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const newFilteredList = userList.filter((user) => {
      if (user.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (user.date.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (user.content.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
    setuserFilteredList(newFilteredList);
  }, [userList, search]);

  const handleAddList = (name, date, content, id) => {
    const newUserList = userList.map((user) => {
      return user;
    });
    newUserList.push({
      name: name,
      date: date,
      content: content,
      id: new Date().getTime(),
    });
    setuserList(newUserList);
    setuserFilteredList(newUserList);
  };
  const handleSearchList = (inputValue) => {
    setSearch(inputValue);
  };
  const handleDelete = (iditemDelete) => {
    const afterDeleteList = userList.filter((user) => {
      if (user.id !== iditemDelete.idAtr) {
        return true;
      } else {
        return false;
      }
    });
    setuserList(afterDeleteList);
    setuserFilteredList(afterDeleteList);
  };

  return (
    <>
      <Search handleSearchList={handleSearchList} />
      <NewList handleAddList={handleAddList} />
      <div className='container-list'>
        {userFilteredList.map((user, index) => {
          return (
            <List
              nameAtr={user.name}
              dateAtr={user.date}
              contentAtr={user.content}
              idAtr={user.id}
              handleDelete={handleDelete}
              key={index}></List>
          );
        })}
      </div>
    </>
  );
}
export default Todolist;
