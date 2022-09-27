const skills = [
    {id: 125223, skill: 'Dancing', done: true},
    {id: 127904, skill: 'Singing', done: false},
    {id: 139608, skill: 'Cooking', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  };
 
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  };