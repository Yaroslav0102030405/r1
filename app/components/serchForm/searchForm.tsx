import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface SearchFormProps {
  onSubmit: (query: string) => void; // onSubmit теперь пропс, который является функцией, принимающей строку и ничего не возвращающей
}

const SearchForm = ({onSubmit}: SearchFormProps) => {
    const [query, setQuery] = useState<string>("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value)
    }

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault()

      onSubmit(query)
      setQuery("");
    }

    return ( <>

    <form onSubmit={handleSubmit}>
        <label>
            <input type="text" value={query} onChange={handleChange} />
        </label>

        <button type="submit">Шукати</button>
    </form>
    </> );
}
 
export default SearchForm;