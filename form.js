class Form {
    constructor(initialValue, onSubmit) {
        this.initialValue = initialValue
        this.onSubmit = onSubmit
        this.value = initialValue
    }
    render() {
        const form = document.createElement('form')
        const input = new Input(this.initialValue, (value) => this.value = value)
        const btn = new Button('Add Task')

        form.style.fontSize = '1rem'
        form.style.padding = '10px 20px'
        form.style.border = 'none'
        form.style.outline = 'none'
        form.style.borderRadius = '18px'
        form.style.boxShadow = ` 3px 3px 7px rgba(0,0,0,0.5)`

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.onSubmit(this.value)
        })
        form.appendChild(input.render())
        form.appendChild(btn.render())

        return form
    }
}