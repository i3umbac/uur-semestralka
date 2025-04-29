import MiniDrawer from "../components/adminNav.jsx"
import AdminRouter from "../components/adminRouter.jsx"
import React, { useState } from 'react';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export default function Admin(){
    const [adminPage, setAdminPage] = useState('branch'); // Výchozí stránka

    const pages = [
        { text: "Users", file: "users", icon: PersonOutlineIcon },
        { text: "Branch verification", file: "verification", icon: VerifiedUserIcon },
        { text: "Branches", file: "branch", icon: Inventory2Icon },
        { text: "Warehouses", file: "warehouse", icon: WarehouseIcon },
        { text: "API", file: "api", icon: SettingsEthernetIcon },
        { text: "Company", file: "company", icon: CorporateFareIcon },
        { text: "Billing", file: "billing", icon: ReceiptLongIcon },
    ];

    return (
        <>
            < MiniDrawer setAdminPage={setAdminPage} items={pages} />

            <div className="container">
                < AdminRouter adminPage={ adminPage } />
            </div>
        </>
        )


}