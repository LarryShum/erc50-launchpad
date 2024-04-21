import { ChangeEvent } from "react";

interface InputProps {
  name?: string;
  type?: string;
  label?: string;
  disabled?: boolean;
  value?: string | number;
  symbol?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  type,
  label,
  disabled,
  value,
  symbol,
  onChange,
}: InputProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-xs font-poppins font-semibold">{label}</label>
      <div className="relative">
        <input
          name={name}
          type={type}
          className={`w-full font-poppins text-xs font-medium rounded p-3 ${
            disabled
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-yellow_green border-2 border-deep_green"
          } ${symbol ? "pr-16" : "pr-3"}`}
          disabled={disabled}
          value={value}
          onChange={onChange}
          readOnly={disabled}
        />
        {symbol && (
          <p className="absolute top-1/2 right-4 -translate-y-1/2 font-poppins text-xs font-semibold">
            {symbol}
          </p>
        )}
      </div>
    </div>
  );
}
