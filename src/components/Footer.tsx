export default function Footer() {
  return (
    <footer className="bg-surface flex justify-center items-center h-[100px]">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl text-brand font-bold mb-2">YAZ</h3>
        <p className="text-sm text-main">
          © {new Date().getFullYear()} YAZ. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
