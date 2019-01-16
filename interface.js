$(document).ready(function() {
  $("#skill-filter").on('submit', function(event) {
    event.preventDefault();
    var skill = $('#skill').val();
    console.log(skill)
    var filteredCandidates = filterCandidateBySkill(newCandidates, skill);
    removeRowsFromTable(newCandidatesTable);
    const newTbody = newCandidatesTable.getElementsByTagName('tbody')[0];
    addCandidatesToTable(newTbody, filteredCandidates);
  });
})
