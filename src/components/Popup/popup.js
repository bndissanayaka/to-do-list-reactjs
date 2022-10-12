import "./popup.css";

function Popup(props) {
  const tableHeaders = ["UserID", "ID", "Title", "Completed"];
  return (
    <div className="popup__container__wrapper">
      <div className="popup__container">
        <div className="popup__header">
          <div className="popup__header__title">User Information</div>
          <div className="popup__header__closebtn" onClick={props.handleClose}>
            <img
              src="./images/cross.png"
              alt="cross"
              className="header__closebtn__img"
            />
          </div>
        </div>
        <div className="popup__content">
          <table>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
            <tr className="popuplist__table__row">
              <td>{props.item.userId}</td>
              <td>{props.item.id}</td>
              <td>{props.item.title}</td>
              <td>{props.item.completed}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Popup;
