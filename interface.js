$(document).ready(function() {
  $("#skill-filter").on('submit', function(event) {
    event.preventDefault();
    var skill = $('#skill').val();
    if (skill === '') {
      renderTable(newCandidatesTable, newCandidates);
    } else {
      var filteredCandidates = filterCandidateBySkill(newCandidates, skill);
      renderTable(newCandidatesTable, filteredCandidates);
    }
  });
})
