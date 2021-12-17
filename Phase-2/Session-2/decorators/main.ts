enum ValidationType {
    NotNull
}

function validate(...types: ValidationType[]) {
    return function (target: any, propertyKey: string) {
        Validator2.registerValidators(target, propertyKey, types);
    }
}

class Validator2 {
    private static notNullValidatorMap: Map<any, string[]> = new Map();
    //todo add more validator maps

    static registerValidators(target: any, property: any, types: ValidationType[]): void {
        for (const type of types) {
           if(type==ValidationType.NotNull){
               let keys: string[] = this.notNullValidatorMap.get(target);
               if (!keys) {
                   keys = [];
                   this.notNullValidatorMap.set(target, keys);
               }
               keys.push(property);
           }
        }//todo add more validators if else
    }

    static validate(target: any): boolean {
        let notNullProps: string[] = this.notNullValidatorMap.get(Object.getPrototypeOf(target));
        if (!notNullProps) {
            return true;
        }
        let hasErrors: boolean = false;
        for (const property of notNullProps) {
            let value = target[property];
            if (!value) {
                console.error(property + " value cannot be null");
                hasErrors = true;
            }
        }
        return hasErrors;
    }
}

class Person2 {
    @validate(ValidationType.NotNull)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

console.log("-- creating instance --");
let person3: Person2 = new Person2(null);
console.log(person3);
let b2 = Validator2.validate(person3);
console.log("validation passed: " + !b2);
console.log("-- creating another instance --");
let person4: Person2 = new Person2("Tina");
console.log(person4);
b2 = Validator2.validate(person4);
console.log("validation passed: " + !b2);
