export default function Footer() {
  return (
    <footer className="bg-white flex justify-center items-center h-[100px]">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl text-[#fd0a54] font-bold mb-2">YAZ</h3>
        <p className="text-sm text-[#392B52]">
          © {new Date().getFullYear()} YAZ. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
