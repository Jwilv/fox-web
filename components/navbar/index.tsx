import { Brand } from "./Brand";
import { Navegation } from "./Navegation";


export const Navbar = () => {
    return (
        <div className="h-16 bg-[#000d15]  flex items-center">
            <Brand />
            <Navegation />
        </div>
    );
}