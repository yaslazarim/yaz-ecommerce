
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-container">
      <main className="bg-app min-h-screen">
        {children} 
      </main>
      
    </div>
  );
}