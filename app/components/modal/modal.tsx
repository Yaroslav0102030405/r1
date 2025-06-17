import { useEffect } from "react";

interface ChildrenElement {
  children: React.ReactNode;
  onClose: () => void;
}


const Modal = ({children, onClose }: ChildrenElement) => {

 useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose(); // Вызываем onClose, переданный через пропсы
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Функция очистки: удаляем слушатель событий при размонтировании компонента
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
if(event.currentTarget === event.target ) {
  onClose()
}
  }

    return ( <>
    <div className="backdrop" onClick={handleBackdropClick}>
        <div className="modal">{children}</div>
    </div>
    </> );
}
 
export default Modal;