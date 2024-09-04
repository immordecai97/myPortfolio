export const getYear = (date) => {
        const dateNow = new Date(date);
        return dateNow.getFullYear();
}

export const getMonthYear = (dateString) => {
        const date = new Date(dateString);
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript son 0-indexados
        const year = date.getFullYear();
        return `${month}/${year}`;
}