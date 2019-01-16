describe("Filtering", function() {
  it("should correctly filter out candidates based on skill", function() {
      const testCandidates = [
        { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
        { name: "Mario", skills: ["Python", "AWS"] },
        { name: "Jacquline", skills: ["JavaScript", "Azure"] },
      ];
    expect(filterCandidateBySkill(testCandidates, "JavaScript").length).toEqual(2);
    expect(filterCandidateBySkill(testCandidates, "AWS").length).toEqual(1);
  })
});
