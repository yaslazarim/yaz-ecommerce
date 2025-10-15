export default function Header() {
  return (
    <header className=" sticky top-0 flex justify-between items-center h-[65px] w-full pr-[20px] pl-[20px] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div>
        <h1 className="text-3xl text-[#fd0a54] font-bold">YAZ</h1>
      </div>
      <div className="flex gap-3">
        <button className="mx-2 flex items-center">
          <i className="text-[#23192d] text-[14px] fa-solid fa-cart-shopping"></i>
        </button>
        <button className="mx-2 flex items-center">
          <i className="text-[#23192d] text-[14px] fa-solid fa-user"></i>
        </button>
      </div>
    </header>
  );
}
