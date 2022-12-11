const app = require("./app");
const PORT=process.env.PORT||4000;
app.listen(4000,()=>{
    console.log('server is running on port 4000');
});
