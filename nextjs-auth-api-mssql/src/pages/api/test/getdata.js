import {runQuery} from "@/lib/mssql_db";
import {testFeauture} from "@/lib/queries";

export default async function handler(req, res) {
    try {
        // Fetch data from MSSQL
        const data = await runQuery(testFeauture.getData);
        res.status(200).json(data.recordset);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}