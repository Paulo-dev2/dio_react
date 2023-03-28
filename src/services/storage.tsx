interface IDIoBank {
    login: boolean;
}

export const getAllLocalStorage = () => {
    return localStorage.getItem('dioBank');
}

export const createLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('dioBank',JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('dioBank',JSON.stringify(dioBank))
}   