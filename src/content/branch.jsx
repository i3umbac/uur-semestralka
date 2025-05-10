import * as React from "react";
import { branches } from "../components/mockData.jsx"
import BranchTable from "../components/branchTable.jsx"

const warehouse = 0

const rows = branches.filter(branch => branch.warehouse === warehouse);

export default function Company(){
    return (
        <>
            <h1>Branches</h1>
            <BranchTable rows = {rows} warehouse={warehouse} />
        </>
    )
}

