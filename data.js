const data = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: '1',
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro. Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: '2',
    },
    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: '3',
    }
]





let box = document.querySelector('.box')

for (let i of data) {
    let contener = document.createElement('div')
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let photo = document.createElement('img')
    let ok = document.createElement('div')


    contener.classList.add('contener')
    h1.classList.add('h1')
    h2.classList.add('h2')
    p.classList.add('p')
    photo.classList.add('img')
    ok.classList.add('ok')


    h1.innerHTML = i.preTitle
    h2.innerHTML = i.title
    p.innerHTML = i.description


    photo.style.backgroundImage = `url(img/${i.img}.jpg)`


    box.append(contener)
    contener.append(ok)
    ok.append(h1, h2, p, photo)
}