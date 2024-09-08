// Function to toggle between hide and show buttons and their sections
function toggleSection(hideBtnId, sectionId) {
    var hideButton = document.getElementById(hideBtnId);
    var section = document.getElementById(sectionId);
    // Ensure buttons and section exist in the DOM
    if (!hideButton || !section) {
        console.error("Element(s) not found: hideBtnId=".concat(hideBtnId, ", sectionId=").concat(sectionId));
        return;
    }
    // Event listener for hiding the section
    hideButton.addEventListener('click', function () {
        section.style.display = 'none'; // Hide the section content
        hideButton.style.display = 'none'; // Hide the "Hide" button
    });
    // Event listener for showing the section
}
// Wait for the DOM content to load before initializing the event listeners
document.addEventListener('DOMContentLoaded', function () {
    toggleSection('hideEducation', 'educationSection');
    toggleSection('hideExperience', 'experienceSection');
    toggleSection('hideSkills', 'skillsSection');
});
