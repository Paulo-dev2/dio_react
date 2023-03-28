import { api } from "./api";
import { createLocalStorage } from "./storage";

interface IData  {
    email: string
    password: string
    name: string
    id: string
    balance: number
}

export const login = async (email: string, password: string): Promise<boolean> => {
    const data: IData | any  = await api;
    if (email !== data.email) return false
    if (password !== data.password) return false
    const newData = {...data, isLogged: 'true'};
    createLocalStorage(newData);
    return true;
}