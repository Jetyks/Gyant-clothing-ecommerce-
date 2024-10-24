

const Input = () => {
  return (
    <>
        <input
        type="text"
        placeholder="Search"
        className="h-full w-full
        pl-9
        border rounded-3xl
        border-yellow-100
        px-4 py-2
        bg-yellow-50 
        placeholder:font-medium placeholder:text-yellow-800
        font-medium text-yellow-900
        hover:bg-customYellow
        focus:border-yellow-950 focus:outline-none
        "
        onKeyDown={(e) => {
        if (e.key === 'Enter') {
            onSearch(e.target.value);
        }
        }}
    />
    </>
  )
}

export default Input