class Button {
    constructor(label, onClick) {
        this.label = label
        this.onClick = onClick
    }
    render() {
        const button = document.createElement('button')

        button.innerText = this.label
        button.style.fontSize = '1rem'
        button.style.marginLeft = '1rem'
        button.style.padding = '0.6rem 1.5rem'
        button.style.background = "linear-gradient(#21c056,#65f485,#008e28)"
        button.style.border = 'none'
        button.style.outline = 'none'
        button.style.borderRadius = '18px'
        button.style.boxShadow = ` 3px 3px 7px rgba(0,0,0,0.5)`
        if (this.onClick) {
            button.addEventListener('click', () => {
                this.onClick()
            })
        }
        return button
    }
}