type Props = {
    label: string;
    onClick? : () => void;
    size:  1 | 2 | 3;
}

export const Button = ({ label, onClick, size}: Props) => {
    return ( 
        <div
        onClick={onClick}
        className={`flex justify-center items-center cursor-pointer bg-white text-black font-bold rounded-3xl px-4 py-2
         ${size === 1 && 'h-14 text-lg'} 
         ${size === 2 && 'h-11 text-md'} 
         ${size === 3 && 'h-7 text-xs'}`}
        >
            {label}
        </div>

    ); 
}