
export function Input ({name, placeholder, type="text", ...props}){
    return(
        <input
        className="w-full bg-white px-4 h-11 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all"
            name = {name}
            placeholder={placeholder}
            type={type}
            {...props}
        />
    )
}