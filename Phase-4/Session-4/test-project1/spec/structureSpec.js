// class User
// {
//     fullname(fname,lname)
//     {
//         return fname+" "+lname;
//     }
//     checkAge(value)
//     {
//         return value>=18;
//     }
//     result(a,b,c)
//     {
//         return ((a+b+c)/3);
//     }


// }
describe('User Test', function(){

    var user;
    beforeAll(function()
    {
        console.log('executed Before All specifications')
    })
    afterAll(function(){
        console.log('executed After All Specification')
    })
    beforeEach(function(){
      user= new User();
    });
    afterEach(function(){
        user=null;
    });
    it('should return firstName',function(){
        console.log(user.fullname('sonam','soni'));

        expect(user.fullname('sonam','soni')).toEqual('sonam soni');
    })
    it('should check age for valid user',function(){
        console.log(user.checkAge(45));
        expect(user.checkAge(12)).toBeFalsy();
        expect(user.checkAge(67)).toBeTruthy();
    })
    it('use got first class',function(){
        expect(user.result(67,89,76)).toBeGreaterThan(60);
        expect(user.result(54,54,25)).not.toBeGreaterThan(60);
    })
    it('able to declare User class',function(){
        expect(user).toBeDefined();
        expect(user).not.toBeUndefined();
        expect(user).not.toBeNull();
    })
})