
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-container">
      <main className="bg-[#f5ecb7] min-h-screen">
        {children} 
      </main>
      
    </div>
  );
}