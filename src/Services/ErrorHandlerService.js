export const requestErrorHandler = (error) => {
    console.error(error.message);
    throw new Error(error.message);
};
