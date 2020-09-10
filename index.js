const fs = require("fs");
const path = require("path");

//引入数据源
// const profileData = require('./template/api.json')
const profileData = require('./template/swaggerApi.json')

//引入文件模板
let template = require("./template/template");
let js = template.js;

// 处理数据源
const maybe = (fn, n = '') => {
    try {
        const result = fn()
        return (result && result === result && result !== 'NaN' && result !== 'Invalid date') ? result : n
    } catch (err) {
        return n
    }
}

var getProperties = target => Object.entries(target).reduce((obj, [key, val]) => {
    obj[key] = val.properties ? getProperties(val.properties) : maybe(_ => val.type === 'number' ? +val.mock.mock : val.mock.mock)
    return obj
}, {})

var result = Object.entries(profileData.paths).reduce((ary, [k, v]) => {
    var { summary, parameters } = v.post
    var properties = parameters[0].schema.properties
    var newObj = properties ? getProperties(properties) : null
    var type = Object.keys(v)[0]

    const url = k
    const name = summary
    const params = newObj
    const method = type

    const obj = { url, name, params, method }

    return [...ary, obj]
}, [])

// 创建文件并生成代码
fs.writeFile(`./pages/api.js`, js(result), err => {
    if (err) {
        return console.log('创建失败', err);
    }

    console.log(`创建文件成功！- api`);
})