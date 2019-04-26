const fs = require('fs');

const constantPath = './questions/';

const TYPES = {
    JS_QUESTIONS: "JS_QUESTIONS",
    ASSIGNMENT: 'ASSIGNMENT',
    ALGORITHM: 'ALGORITHM'
}
const NAME_TO_TYPE = {
    "js_questions": TYPES.JS_QUESTIONS,
    'assignment_questions': TYPES.ASSIGNMENT,
    'algorithm_questions': TYPES.ALGORITHM
}

const files = Object.keys(TYPES).reduce((p,k)=>{
    p[k]=[];
    return p;
},{});
// console.log(files);
try {
    const modules = fs.readdirSync(constantPath);
    const rx = /^(?!index).*\.js$/
    modules
        .filter(function (moduleName) {
            // console.log(moduleName, rx.test(moduleName));
            return rx.test(moduleName);
        })
        .forEach(function (moduleName) {
            const parts = moduleName.split('.');
            const module_r = require('./' + moduleName);
            files[NAME_TO_TYPE[parts[0]]].push(...module_r);
            
        });
} catch (err) {

}

module.exports = files;