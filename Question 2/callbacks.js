const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('error: delayed exception!');
        }, 500);
    });
};

(async () => {
    try {
        const result = await resolvedPromise();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    try {
        const result = await rejectedPromise();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();