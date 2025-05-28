document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetDetails = document.getElementById(targetId);

            if (targetDetails) {
                targetDetails.classList.toggle('show');
                if (targetDetails.classList.contains('show')) {
                    this.textContent = 'Нуух';
                } else {
                    this.textContent = 'Дэлгэрэнгүй';
                }
            }
        });
    });

    // Set initial state for buttons based on details visibility (optional)
    // For now, all details are hidden by default via CSS, so buttons show "Дэлгэрэнгүй"
});

// You can add more JavaScript functionalities here as needed.
// For example, an image slider, interactive map (requires more advanced libraries), etc.
console.log("Монгол орны аялал жуулчлалын вэбсайт ажиллаж байна!");