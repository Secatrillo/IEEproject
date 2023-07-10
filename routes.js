import pool from './config.js';
const router = (app) => {
    app.get("/", (req, res) => {
        pool.query('SELECT * FROM Napravlenia', (error, result) => {
          if (error) res.send(error);
          else{
            var unPure = {};
            for (let i = 0; i < result.length; i++) {
                unPure["row"+i] = ("row"+i ,result[i]);
                
            }
            //res.send(result)
            res.render("first page",unPure);
          };
        });
      });
      
      app.get('/erza', (req, res) => {
        pool.query('SELECT * FROM ERZA', (error, result) => {
          if (error) res.send(error);
          else{
    
            res.render("second page",{data: result, link:"erza"});
          };
        });
      });

      app.get('/raspseti', (req, res) => {
        pool.query('SELECT * FROM RASPSETI', (error, result) => {

          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("second page",{data: result, link:"raspseti"});
          };
        });
      });

      app.get('/electroenergy', (req, res) => {
        pool.query('SELECT * FROM ELECTROENERGY', (error, result) => {

          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("second page",{data: result, link:"electroenergy"});
          };
        });
      });

      app.get('/electroenergyetalon', (req, res) => {
        pool.query('SELECT * FROM ELECTROENERGYETALON', (error, result) => {

          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("second page",{data: result, link:"electroenergyetalon"});
          };
        });
      });

      app.get("/erza/:link", (req, res) => {
        const link = req.params.link;
        pool.query('SELECT * FROM Predmet WHERE link = ?', link,(error, result) => {
          if (error) res.send(error);
          else{
    
            res.render("fird page",{data: result[0]});
          };
        });
      });

      app.get("/respseti/:link", (req, res) => {
        const link = req.params.link;
        pool.query('SELECT * FROM Predmet WHERE link = ?', link,(error, result) => {
          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("fird page",{data: result[0]});
          };
        });
      });

      app.get("/electroenergy/:link", (req, res) => {
        const link = req.params.link;
        pool.query('SELECT * FROM Predmet WHERE link = ?', link,(error, result) => {
          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("fird page",{data: result[0]});
          };
        });
      });

      app.get("/electroenergyetalon/:link", (req, res) => {
        const link = req.params.link;
        pool.query('SELECT * FROM Predmet WHERE link = ?', link,(error, result) => {
          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("fird page",{data: result[0]});
          };
        });
      });
      

      
};
export default router;