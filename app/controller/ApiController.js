const Student=require('../model/student');

class ApiController{

    async create(req,res){
        try{
            //console.log(req.body);
            const  {name,email,phone}=req.body

            const studentdata=new Student({
                name,email,phone
            })
           const data= await studentdata.save()
           if(data){
            res.status(200).json({
                message:"data save successfully",
                data:data
            })
           }
        }catch(error){
            console.log(error);
            
        }
    }

    async getall(req,res){
        try{
            const data=await Student.find()
            res.status(200).json({
                message:"data get successfully",
                total:data.length,
                data:data
            })
        }catch(error){
            console.log(error);

        }
    }
}


module.exports=new ApiController()