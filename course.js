var courses = document.querySelectorAll('.courses');

for (var i = 0; i < courses.length; i++) {
    courses[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f0f0f0';
    });
    courses[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
}
