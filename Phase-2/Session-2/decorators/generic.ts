class GenericMap<T>
{
    private item: {[key:string]:T} = {};

    setItem(key:string, item:T) :void{
        this.item[key]= item;
    }

    getItem(key:string):T{
        return this.item[key];
    }

    clear():void{
        this.item={};
    }

    printMap():string{
        const itemAsString= Object
        .getOwnPropertyNames(this.item)
        .map(key=>  `${key}: ${this.getItem(key)}`)
        .join(",");

        return `{${itemAsString}}`;
    }
}

const numb= new GenericMap<number>();
numb.setItem('one',1);
numb.setItem('two',2);
console.log(numb.printMap());

const string1= new GenericMap<string>();
string1.setItem('test1','one');
string1.setItem('test2','two');
console.log(string1.printMap());