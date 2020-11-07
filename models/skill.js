module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,

};
const skills = [
    {skill:'JavaScrpt', level: 5},
    {skill:'HTML5', level: 5},
    {skill:'CSS3', level: 5},
];


function create(id) {
    skills.push(id);
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function getAll() {
    return skills;
}

function getOne(id) {
    const skillResult = skills[id];
    return skillResult;
}

const results = getAll();
console.log('results ', results)

