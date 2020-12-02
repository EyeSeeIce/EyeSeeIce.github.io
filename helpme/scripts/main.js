







document.querySelectorAll('#triggers li').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('#triggers li').forEach((li) => {
            li.classList.remove('activeTrigger')
        })
        item.classList.add('activeTrigger')
        trigger = '.'+item.getAttribute('id')
        document.querySelectorAll('.midRight div').forEach((div) => {
            div.classList.add('hide')
            div.classList.remove('show')
        })
        document.querySelector(trigger).classList.add('show')
    })
})
