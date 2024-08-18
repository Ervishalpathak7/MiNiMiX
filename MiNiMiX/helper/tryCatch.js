async function tryCatch(callback) {
    try {
        return await callback();
    } catch (error) {
        console.error(error);
    }
}

export default tryCatch;