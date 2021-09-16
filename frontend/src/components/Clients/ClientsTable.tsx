import {FC, useEffect, useState} from "react";
import {DataGrid, GridColDef, GridRowData} from '@mui/x-data-grid';
import axios from "../../utils/axios";
import {ClientService} from "../../services/ClientService";

export interface Client {
    id: number;
    firstName: string;
    lastName: string;
}

export const ClientsTable: FC<{}> = () => {
    const [clients, setClients] = useState<Client[]>();

    useEffect(() => {
        (async () => {
            const {data} = await ClientService.getClients();
            setClients(data);
        })();

    }, []);

    const columns: GridColDef[] = [
        {field: 'firstName'},
        {field: 'lastName'}
    ]
    const rows:GridRowData[] = clients;

    return <DataGrid
    columns={columns}
    rows={rows}
    />
}