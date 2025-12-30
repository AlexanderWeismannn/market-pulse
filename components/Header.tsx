import Link from "next/link";
import Image from "next/image";
import Navitems from "@/components/Navitems";
import UserDropdown from "@/components/UserDropdown";


const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    {/*Change This to custom svg*/}
                    <Image src="public/assets/icons/logo.svg" alt="MarketPulse Logo" width={140} height={32} className="h-8 w-auto cursor-pointer"/>
                </Link>
                <nav className="hidden sm:block">
                    <Navitems />
                </nav>
                <UserDropdown />
            </div>
        </header>
    )
}
export default Header
