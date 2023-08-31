import { useRef, Dispatch, SetStateAction, useState, MouseEvent } from "react";

const Form = ({ setItem }: { setItem: Dispatch<SetStateAction<string[]>> }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");

  const handlerChange = () => {
    const inputValue = inputRef.current?.value || "";
    setValue(inputValue);
  };
  const HandlerClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (value !== "") {
      setItem((prev) => [...prev, value]);
      setValue("");
    }
  };

  return (
    <section id="iso-form">
      <div className="input-group mb-3">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Example Book, ball, etc"
          value={value}
          onChange={handlerChange}
        />
      </div>
      <button
        className="btn btn-outline-secondary"
        onClick={HandlerClick}
        type="button"
        id="button-addon2"
      >
        Add Item
      </button>
    </section>
  );
};

export default Form;
