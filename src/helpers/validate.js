export const required = value => {
    console.log(value ? undefined : 'Required');
    return value ? undefined : 'Required';
};