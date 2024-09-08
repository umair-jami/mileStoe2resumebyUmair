// Function to toggle between hide and show buttons and their sections
function toggleSection(hideBtnId: string, sectionId: string) {
    const hideButton = document.getElementById(hideBtnId) as HTMLButtonElement;
    const section = document.getElementById(sectionId) as HTMLElement;

    // Ensure buttons and section exist in the DOM
    if (!hideButton || !section) {
        console.error(`Element(s) not found: hideBtnId=${hideBtnId}, sectionId=${sectionId}`);
        return;
    }

    // Event listener for hiding the section
    hideButton.addEventListener('click', () => {
        section.style.display = 'none';           // Hide the section content
        hideButton.style.display = 'none';        // Hide the "Hide" button
    });

    // Event listener for showing the section
}

// Wait for the DOM content to load before initializing the event listeners
document.addEventListener('DOMContentLoaded', () => {
    toggleSection('hideEducation', 'educationSection');
    toggleSection('hideExperience',  'experienceSection');
    toggleSection('hideSkills', 'skillsSection');
});
