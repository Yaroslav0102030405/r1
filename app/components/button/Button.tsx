interface ButtonProps {
  text: string; // Пропс 'text' должен быть строкой и является обязательным
  // Вы можете добавить другие пропсы, например:
  // onClick?: () => void; // Необязательный пропс для обработки клика
  // type?: 'submit' | 'button' | 'reset'; // Пример пропса с фиксированными значениями
  // disabled?: boolean; // Необязательный пропс для состояния кнопки
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    const onClick = () => {
alert("Привіт")
    }

    return ( <>
    <button onClick={onClick} type="button">{text}</button>
    </> );
}
 
export default Button;