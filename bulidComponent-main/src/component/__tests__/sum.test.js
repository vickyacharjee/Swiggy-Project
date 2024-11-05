
import { sum } from "../sum"

test("sum function should returns the sum of two numbers",()=>{
    const res=sum(1,2);
    //Assertion
    expect(res).toBe(3);

})