interface IData  {
    email: string
    password: string
    name: string
    id: string
    balance: number
}

const data: IData = {
    email: 'teste@gmail.com',
    password: '123456',
    name: 'teste',
    id: '1',
    balance: 5000.00
}

export const api = new Promise( resolve => {
    setTimeout( () => {
        resolve(data)
    },3000);
});