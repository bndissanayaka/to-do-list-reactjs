import React, { useEffect, useState } from "react";
import "./todo.css";
import axios from "axios";
import ReactPaginate from "react-paginate";

function Todo() {
  const [userData, setuserData] = useState([]);
  const tableHeaders = ["UserID", "ID", "Title", "Completed"];

  // const itemsPerPage = 6;
  // const [currentItems, setCurrentItems] = useState(null);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setuserData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   setCurrentItems(userData.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(userData.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage]);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % userData.length;
  //   setItemOffset(newOffset);
  // };

  return (
    <div className="todolist__container">
      <div className="todolist__container__table">
        <table>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
          {userData.map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </table>
      </div>
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </div>
  );
}

export default Todo;
