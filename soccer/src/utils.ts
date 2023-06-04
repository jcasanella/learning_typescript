export const dateStringToDate = (dateString: string): Date => {
    const parts = dateString.split('/')
        .map(value => parseInt(value));
    return new Date(parts[2], parts[1] - 1, parts[0]);
};