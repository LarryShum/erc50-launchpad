interface InputProps {
  type?: string;
  label?: string;
  disabled?: boolean;
  value?: string | number;
  symbol?: string;
}

export default function Input({
  type,
  label,
  disabled,
  value,
  symbol,
}: InputProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-xs font-poppins font-semibold">{label}</label>
      <div className="relative">
        <input
          type={type}
          className={`w-full font-poppins text-xs font-medium rounded p-3 ${
            disabled
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-yellow_green border-2 border-deep_green"
          } ${symbol ? "pr-16" : "pr-3"}`}
          disabled={disabled}
          value={value}
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
