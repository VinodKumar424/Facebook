class Facebook{
    private fname:string;
    private age:number;
    private details:string;
    private location:string;
    private workdetails:string;
    private contactdetails:any;

    constructor(age:number, name:string,details:string,location:string,workdetails:string,contactdetails:any)
    {
       this.age=age;
       this.fname=name;
       this.details=details;
       this.location=location;
       this.workdetails=workdetails;
       this.contactdetails=contactdetails;

    }
    
    
    public DispFace():void
    {
        console.log("My Age is "+this.age);
        console.log(" Profile name is "+this.fname);
        console.log( "my details is "+this.details);
        console.log("Location is "+this.location);
        console.log("work details "+this.workdetails);
       console.log("contact detais is "+this.contactdetails);

    }
}
 var f1:Facebook= new Facebook(23,"Vinod Kumar",
 "[Santhi Vidyanikathan ,Srividyalaya junior college,Vikas Group of institutions]",
 "lingagudem ,chintalapudimandal ,westgodavari","surat glory auto tech",[9493852732, "mallellivinodkumar@gmail.com",]);
 f1.DispFace();



 