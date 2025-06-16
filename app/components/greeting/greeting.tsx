interface LoaderProps {
message: string[]
}


const Greeting: React.FC<LoaderProps> = ({message}) => {
    return ( <>
    {/* {isLoader ? <h1>Добро пожалувати</h1>: <h1>Пока</h1>} */}
    {message.length > 0 && <h1>У  вас є {message.length} повідомлення</h1>}
    </> );
}
 
export default Greeting;