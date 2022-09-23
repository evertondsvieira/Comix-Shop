let originalCart = []

const data = [
    {
        id: 1,
        img: "https://i.ibb.co/cyPwzCH/berserk.jpg",
        nameItem: "Berserk",
        description: "Guts é um ex-mercenário e integrante do Bando do Fal...",
        value: 39.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 2,
        img: "https://i.ibb.co/FgcM5b3/51-Uw-Yy-Zv-CDL.jpg",
        nameItem: "Viland Saga",
        description: "Quando Thors é convocado para mais uma batalha...",
        value: 29.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 3,
        img: "https://i.ibb.co/f4pdNxD/2720271-31.jpg",
        nameItem: "Hanma Baki",
        description: "Decidido a conquistar o título do seu pai...",
        value: 29.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 4,
        img: "https://i.ibb.co/P1NTkVK/s-l500.jpg",
        nameItem: "JJBA Steel Ball Run",
        description: "Gyro Zeppeli, um executor do reino de Neapolis...",
        value: 39.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 5,
        img: "https://i.ibb.co/J7fwh4S/08795135956735263da8b9c8495ae667.jpg",
        nameItem: "Initial D",
        description: "Ambientado na província de Gunma durante os anos 90...",
        value: 29.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 6,
        img: "https://i.ibb.co/0nCB2d1/6428286-50.jpg",
        nameItem: "Kingdom",
        description: "A história de Kingdom é uma adaptação fictícia de um...",
        value: 39.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 7,
        img: "https://i.ibb.co/c19pH0z/imagem-05.jpg",
        nameItem: "Spider-Man",
        description: "The Amazing Spider-Man é uma série de quadrinhos...",
        value: 29.90,
        tag: "HQ",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 8,
        img:"https://i.ibb.co/DL9BK2h/star-wars-108-marvel-comics-variant-cover-1158313.jpg",
        nameItem: "Star Wars",
        description: "A princesa Leia é mantida refém pelas forças imperial...",
        value: 49.90,
        tag: "HQ",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 9,
        img: "https://i.ibb.co/J5YC657/themanwholaughs.jpg",
        nameItem: "Batman",
        description: "História do primeiro confronto entre o Batman e o Coringa...",
        value: 29.90,
        tag: "HQ",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 10,
        img: "https://i.ibb.co/CP6Mvhy/634d5abcb16ce03c59f99a24a2d6b37f.webp",
        nameItem: "Tio Patinhas",
        description: "Tio Patinhas é conhecido como o pato mais rico do mundo...",
        value: 19.90,
        tag: "Gibi",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 11,
        img: "https://i.ibb.co/VCNL5Hn/imagem-06.jpg",
        nameItem: "Mônica",
        description: "Turma da Mônica é uma série de histórias em quadrinhos...",
        value: 9.90,
        tag: "Gibi",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 12,
        img: "https://i.ibb.co/89HWFvD/9788539418817.jpg",
        nameItem: "Cebolinha",
        description: "Cebolinha é um personagem de histórias em quadrinhos...",
        value: 9.90,
        tag: "Gibi",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
]
