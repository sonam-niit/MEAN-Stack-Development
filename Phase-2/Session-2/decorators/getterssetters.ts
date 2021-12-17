class Example{

    private _fname:string;
    private _lname:string;

    //getters
    get fname():string{
        return this._fname;
    }

    get lname():string{
        return this._lname;
    }

    //setters
    set fname(firstName:string){
        this._fname=firstName;
    }

    set lname(lastName:string){
        this._lname=lastName;
    }
}

let e1=new Example();
e1.fname="Pooja";//calling of set method
e1.lname="Jain";
console.log(e1.fname+" "+e1.lname) // calling get method


