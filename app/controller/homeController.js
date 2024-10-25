


class  homeController {
   
    async home(req,res){
       res.render('home',{
        title:'Home Page'
       })
    }   
    async about(req,res){
       res.render('about',
        {
            title:'About Page'
        }
       )
    }   
    async contact(req,res){
        res.render('contact',
            {
                title:'Contact Page'
            }
        )
    }   
}


module.exports = new homeController();