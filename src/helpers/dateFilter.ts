// Bibilioteca para manipulação de datas
import { Item } from '../types/Item';


export const getCurrentMonth = () => { // pegando mes atual
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => { // Filtrando lista por mes e ano.
    let newList: Item[] = [];
    let [ year, month] = date.split('-');

    for(let i in list) {
        if( 
            list[i].date.getFullYear() === parseInt(year) && 
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatDate = (date: Date): string => { // formatar data para padrao pt-br e exibição
    let year = date.getFullYear();
    let month = date.getMonth() +1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month) -1]} de ${year}`;
}
