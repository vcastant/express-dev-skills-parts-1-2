const Skill = require('../models/skill');

module.exports = {
   index,
   show,
   new: newSkill,
   create,
   delete: deleteSkill,
   edit: editSkill,
   update: updateSkill
 };
 
 function index(req, res) {
   res.render('index', { skills: Skill.getAll() })
 }
 
 function show(req, res) {
   res.render('show', 
   { skill: Skill.getOne(req.params.id) })
 }
 
 function newSkill(req, res) {
   res.render('new');
 }
 
 function create(req, res) {
   Skill.create(req.body);
   res.redirect('/');
 }
 
 function deleteSkill(req, res) {
   Skill.deleteOne(req.params.skill);
   res.redirect('/');
 }
 
 function editSkill(req, res) {
   res.render('edit', { 
      skill: Skill.editOne(req.params.skill) });
 }
 
 function updateSkill(req, res) {
   Skill.update(req.body);
   res.render('show', { skill: req.body });
 }