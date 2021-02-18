class Task {
    constructor(task, onCompleted, onDeleted) {
        this.task = task
        this.onCompleted = onCompleted
        this.onDeleted = onDeleted

    }

    render() {

        const container = document.createElement('div')
        container.style.display = 'flex'
        container.style.fontSize = '1.5rem'
        container.style.marginTop = '5px'
        container.style.padding = '10px 20px'
        container.style.borderRadius = '18px'
        container.style.boxShadow = ` 3px 3px 7px rgba(0,0,0,0.5)`

        const p = document.createElement('p')
        p.style.width = '18.75rem'
        const completeButton = new Button('Complete', this.onCompleted)
        const deleteButton = new Button('Delete', this.onDeleted)

        p.innerText = this.task.text

        if (this.task.isCompleted === true) {
            p.style.textDecoration = 'line-through'

        }
        container.appendChild(p)
        container.appendChild(completeButton.render())
        container.appendChild(deleteButton.render())

        return container

    }
}