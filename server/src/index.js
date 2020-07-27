const app = require("./configs/Server");

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(`Server is running in address: ${process.env.APP_URL}`);
})