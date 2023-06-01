import DesktopSidebar from "./DesktopSidebar"

async function Sidebar(props:{children:React.ReactNode}){
    return(

        <div className="h-full">
            <DesktopSidebar/>
            <main className="lg:pl-20 h-full">
             {props.children}    
            </main>
            
        </div>

    )
}

export default Sidebar