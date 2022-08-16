enum HTMLTagEventsCustom {
    BUTTON = 'button',
}

function preventDoubleClickOnTag(el: HTMLTagEventsCustom): void {
    let element = document.getElementsByTagName(el)

    // https://stackoverflow.com/questions/54704099/typescript-how-to-iterate-over-a-htmlcollection
    for (const tag of Array.from(element)) {
        tag.addEventListener(
            'dblclick',
            (event) => {
                /** To be removed */
                alert('Double-click disabled!')
                /** To be removed */
                event.preventDefault()
                event.stopPropagation()
            },
            true
        )
    }
}

preventDoubleClickOnTag(HTMLTagEventsCustom.BUTTON)
