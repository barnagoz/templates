import axios from 'axios';
import {useEffect, useState} from "react";
import {DataTable} from "@/components/ui/data-table";
import {columns} from "@/components/table/user/column-def";
import FilterInputs from "@/components/table/user/filter-inputs";

export default function Home () {
    const [Data, setData] = useState([]);
    useEffect(() => {
        async function getData () {
            const data = await axios.get("/api/test/getdata");
            setData(data.data);
        }

        getData();
    }, []);
    return (
        <div className={"p-4"}>
            <h1 className={"text-2xl font-semibold mb-2"}>Táblázat</h1>
            <DataTable columns={columns} data={Data} FilterComp={FilterInputs} />
        </div>
    );
}