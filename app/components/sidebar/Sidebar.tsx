import DesktopSidebar from "./DesktopSidebar"
import MobileFooter from "./MobileSidebar"

async function Sidebar(props:{children:React.ReactNode}){
    return(

        <div className="h-full">
            <DesktopSidebar/>
            <MobileFooter />
            <main className="lg:pl-20 h-full">
             {props.children}    
            </main>
            
        </div>

    )
}

export default Sidebar