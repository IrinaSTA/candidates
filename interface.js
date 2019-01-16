$(document).ready(function() {
  $("#skill-filter").on('submit', function(event) {
    event.preventDefault();
    var skill = $('#skill').val();
    console.log(skill);
    var filteredCandidates = filterCandidateBySkill(newCandidates, skill);
    renderTable(newCandidatesTable, filteredCandidates);
  });
})
