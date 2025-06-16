import { useState } from "react";

const Dropdown = () => {
      const [visible, setVisible] = useState<boolean>(false)

      const handleShow = () => {
        setVisible(prev => !prev)
      }

      const handleMouseOver = () => {
        console.log("На елементі")
      }
      const handkeMouseOut = () => {
        console.log("Вийшов")
      }

    return (<>
    <div>
       {!visible ?  <button onMouseOver={handleMouseOver} onMouseOut={handkeMouseOut} onClick={handleShow} type="button">Показати</button> : <button onClick={handleShow} type="button">Скрити</button>}
        {visible && <div>Мобільне меню</div>}
    </div>
    </>  );
}
 
export default Dropdown;