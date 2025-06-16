import type {  MouseEvent} from "react";

type ColorOption = {
  label: string;
  color: string;
};

type ColorPickerProps = {
  options: ColorOption[];
};


const ColorPicker: React.FC<ColorPickerProps> = ({options}) => {
    
    const handleClick = (event:  MouseEvent<HTMLButtonElement>) => {
        // console.log(event.target)

    const clickedButton = event.target as HTMLButtonElement;
        clickedButton.classList.add('selected-button');
    

    
    }

    return ( 
    <>
    <ul className="b">
        {options.map(({label, color}, index) => (
            <li key={label} >
<button onClick={handleClick} style={{backgroundColor: color}} className="a" type="button"></button>
            </li>
        ))}
    </ul>
    </> );
}
 
export default ColorPicker;