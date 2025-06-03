"use client";

type Props = {
  placeholder: string;
  rows: number;
  value?: string;
  onChange?: (newValue: string) => void; // ✅ nova prop adicionada
};

export const Textarea = ({ placeholder, rows, value, onChange }: Props) => {
  return (
    <div className="has-[:focus]:border-white flex items-center rounded-3xl border-2 border-gray-700">
      <textarea
        className="flex-1 outline-none bg-transparent h-full p-5 resize-none"
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={(e) => onChange && onChange(e.target.value)} // ✅ onChange agora funciona
      />
    </div>
  );
};
