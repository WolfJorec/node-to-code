
/**
 * 生成的模板
 *「method」 请求类型「 url」 请求地址「 name」 请求名字「 params」 请求参数
 * @param {*} data 数据源
 * @returns
 */

exports.js = (data) => {
    let str = ''
    data.forEach( item => {
        str += `${item.method}('${item.url}|${item.name}',${JSON.stringify(item.params)})\n`
    });

    return str;
}