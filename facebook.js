var Facebook = /** @class */ (function () {
    function Facebook(age, name, details, location, workdetails, contactdetails) {
        this.age = age;
        this.fname = name;
        this.details = details;
        this.location = location;
        this.workdetails = workdetails;
        this.contactdetails = contactdetails;
    }
    Facebook.prototype.DispFace = function () {
        console.log("My Age is " + this.age);
        console.log(" Profile name is " + this.fname);
        console.log("my details is " + this.details);
        console.log("Location is " + this.location);
        console.log("work details " + this.workdetails);
        console.log("contact detais is " + this.contactdetails);
    };
    return Facebook;
}());
var f1 = new Facebook(23, "Vinod Kumar", "[Santhi Vidyanikathan ,Srividyalaya junior college,Vikas Group of institutions]", "lingagudem ,chintalapudimandal ,westgodavari", "surat glory auto tech", [9493852732, "mallellivinodkumar@gmail.com",]);
f1.DispFace();
