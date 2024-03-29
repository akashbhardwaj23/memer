"use client"

const Input = ({onChange, text, htmlFor}:{onChange : () => void, text : string, htmlFor : string}) => {
  return (
    <div className="w-1/2 mb-4">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {text}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">@</span>
        </div>
        <input
          type="text"
          name={htmlFor}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Write Something"
          // onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        
      </div>
    </div>
  );
};

export default Input;
