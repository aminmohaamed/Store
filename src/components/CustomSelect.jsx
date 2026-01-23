import { useState } from "react";
import Button from "./Button";

export default function CustomSelect({ options, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mb-6 flex justify-end w-48">
      <Button onClick={() => setOpen(!open)} type="select">
        {value || "Select"}
        <span className="ml-2">▼</span>
      </Button>

      {open && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
