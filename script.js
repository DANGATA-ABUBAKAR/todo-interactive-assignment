const tasks = document.querySelectorAll('#todo-list .task');
tasks.forEach(task => {
    task.addEventListener('click', function(event) {
        task.classList.toggle('completed');

        if (task.classList.contains('completed')) {
            console.log('Task marked as complete.');
        } else {
            console.log('Task marked as incomplete.');
        }
    });
});