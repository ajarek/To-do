class Input {
    constructor(text, onChange) {
        this.text = text
        this.onChange = onChange
    }
    render() {
        const input = document.createElement('input')

        input.value = this.text
        input.style.fontSize = '1.5rem'
        input.style.width = '25rem'
        input.style.padding = '0.5rem 1.5rem'
        input.setAttribute('type', 'text')
        input.style.border = 'none'
        input.style.outline = 'none'
        input.style.borderRadius = '10px'
        input.style.boxShadow = ` 3px 3px 7px rgba(0,0,0,0.5)`
        input.style.background='hsl(19, 100%, 93%)'

        input.addEventListener('input', (e) => {
            this.onChange(e.target.value)
        })
        return input
    }
}