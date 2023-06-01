import Sidebar from "../components/sidebar/Sidebar";

export default async function UsersLayout(props:{children:React.ReactNode}){
    return(
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
             {props.children}
            </div>
        </Sidebar>
    )
}