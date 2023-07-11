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

      app.get('/erza', (req, res) => {
        pool.query('SELECT * FROM ERZA', (error, result) => {
          if (error) res.send(error);
          else{
    
            res.render("second page",{data: result, link:"erza"});
          };
        });
      });

      app.get('/raspseti', (req, res) => {
        pool.query('SELECT * FROM SETI', (error, result) => {

          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("second page",{data: result, link:"raspseti"});
          };
        });
      });

      app.get('/electroenergy', (req, res) => {
        pool.query('SELECT * FROM POTOK', (error, result) => {

          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("second page",{data: result, link:"electroenergy"});
          };
        });
      });

      app.get('/electroenergyetalon', (req, res) => {
        pool.query('SELECT * FROM ETALON', (error, result) => {

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
            
            //res.send(result[0].Predmet)
            res.render("fird page",{data: result[0] ,link: "/erza"});
          };
        });
      });

      app.get("/raspseti/:link", (req, res) => {
        const link = req.params.link;
        pool.query('SELECT * FROM Predmet WHERE link = ?', link,(error, result) => {
          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("fird page",{data: result[0], link: "/raspseti"});
          };
        });
      });

      app.get("/electroenergy/:link", (req, res) => {
        const link = req.params.link;
        pool.query('SELECT * FROM Predmet WHERE link = ?', link,(error, result) => {
          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("fird page",{data: result[0], link: "/electroenergy"});
          };
        });
      });

      app.get("/electroenergyetalon/:link", (req, res) => {
        const link = req.params.link;
        pool.query('SELECT * FROM Predmet WHERE link = ?', link,(error, result) => {
          if (error) res.send(error);
          else{
            
            //res.send(result)
            res.render("fird page",{data: result[0], link: "/electroenergyetalon"});
          };
        });
      });
      

      
};
export default router;