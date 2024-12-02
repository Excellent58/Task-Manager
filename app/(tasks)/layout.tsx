import SideNav from "../components/sidenav"


export default function TasksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="">
            <SideNav/>
        </div>
        
        <div className="flex-grow p-6 md:p-5 pt-16 md:pt-5 md:overflow-y-auto bg-gray-700">
            {children}
        </div>
     </div>
  )
}