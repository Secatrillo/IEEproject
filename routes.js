import pool from './config.js';
const router = (app) => {
    app.get("/", (req, res) => {
        pool.query('SELECT * FROM Napravlenia', (error, result) => {
          if (error) res.send(error);
          else{
            //res.send(result)
            res.render("first page",{data:result});
          };
        });
      });
      
      app.get('/about', (req, res) => {
        pool.query('SELECT * FROM Napravlenia', (error, result) => {
          if (error) res.send(error);
          else{
            var unPure = {};
            for (let i = 0; i < result.length; i++) {
                unPure["row"+i] = ("row"+i ,result[i]);
                
            }
            //res.send(unPure)
            res.render("second page",unPure);
          };
        });
      });
      
};
export default router;