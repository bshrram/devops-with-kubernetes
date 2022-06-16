const randomString = Math.random().toString(36).substr(2, 18);

const logString = () => {

    console.log(`${new Date().toISOString()}: ${randomString}`);

    setTimeout(logString, 5000);
};

logString();