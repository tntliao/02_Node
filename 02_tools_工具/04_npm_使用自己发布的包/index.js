const { reqLiao, reqBaidu } = require('yesdo')

async function fn1() {
    const result1 = await reqLiao()
    console.log(result1);
}

fn1()

async function fn2() {
    const result2 = await reqBaidu()
    console.log(result2);
}

fn2()


