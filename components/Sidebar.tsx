import { MenuIcon } from "lucide-react"
import NewdocumentButton from "./NewdocumentButton"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function Sidebar() {

    const menuOptions = (
        <>
            <NewdocumentButton />
            {/* My Documents */}
            {/* List */}

            {/* Shared with Me */}
            {/* List */}
        </>
    );
    return (
        <div className="p-2 md:p-5 bg-gray-200 relative">
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <div>
                                {/* Options */}
                                {menuOptions}
                            </div>
                            {/* <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription> */}
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden md:inline">

                {menuOptions}
            </div>

        </div>
    )
}
export default Sidebar