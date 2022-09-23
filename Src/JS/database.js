let originalCart = []

const data = [
    {
        id: 1,
        img: "https://img1.ak.crunchyroll.com/i/spire1/3fc5239256fd261e25285cd5499125571649079550_main.jpg",
        nameItem: "Berserk",
        description: "Guts é um ex-mercenário e integrante do Bando do Fal...",
        value: 39.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 2,
        img: "https://images-na.ssl-images-amazon.com/images/I/51UwYyZvCDL.jpg",
        nameItem: "Viland Saga",
        description: "Quando Thors é convocado para mais uma batalha...",
        value: 29.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 3,
        img: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2720271-31.jpg",
        nameItem: "Hanma Baki",
        description: "Decidido a conquistar o título do seu pai...",
        value: 29.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 4,
        img: "https://i.ebayimg.com/images/g/toQAAOSwIspaYF3Z/s-l500.jpg",
        nameItem: "JJBA Steel Ball Run",
        description: "Gyro Zeppeli, um executor do reino de Neapolis...",
        value: 39.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 5,
        img: "https://i.pinimg.com/originals/08/79/51/08795135956735263da8b9c8495ae667.jpg",
        nameItem: "Initial D",
        description: "Ambientado na província de Gunma durante os anos 90...",
        value: 29.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 6,
        img: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6428286-50.jpg",
        nameItem: "Kingdom",
        description: "A história de Kingdom é uma adaptação fictícia de um...",
        value: 39.90,
        tag: "Mangá",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 7,
        img: "https://i.ibb.co/gMr8h1V/imagem-05.jpg",
        nameItem: "Spider-Man",
        description: "The Amazing Spider-Man é uma série de quadrinhos...",
        value: 29.90,
        tag: "HQ",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 8,
        img: "https://www.mestrejedi.com.br/wp-content/uploads/2019/02/star-wars-108-marvel-comics-variant-cover-1158313.jpeg",
        nameItem: "Star Wars",
        description: "A princesa Leia é mantida refém pelas forças imperial...",
        value: 49.90,
        tag: "HQ",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 9,
        img: "https://hqrock.files.wordpress.com/2011/08/themanwholaughs.jpg",
        nameItem: "Batman",
        description: "História do primeiro confronto entre o Batman e o Coringa...",
        value: 29.90,
        tag: "HQ",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 10,
        img: "https://a-static.mlcdn.com.br/1500x1500/gibi-tio-patinhas-disney-unidade-hq-cultural/klebervariedades/15788319793/634d5abcb16ce03c59f99a24a2d6b37f.jpg",
        nameItem: "Tio Patinhas",
        description: "Tio Patinhas é conhecido como o pato mais rico do mundo...",
        value: 19.90,
        tag: "Gibi",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 11,
        img: "https://i.ibb.co/XsX2tpG/imagem-06.jpg",
        nameItem: "Mônica",
        description: "Turma da Mônica é uma série de histórias em quadrinhos...",
        value: 9.90,
        tag: "Gibi",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
    {
        id: 12,
        img: "https://dreambook.com.br/media/catalog/product/cache/3d487d6ecb524ce0058195848e1306a2/9/7/9788539418817.jpg",
        nameItem: "Cebolinha",
        description: "Cebolinha é um personagem de histórias em quadrinhos...",
        value: 9.90,
        tag: "Gibi",
        addCart: "Adicionar ao carrinho",
        removeCart: "Remover produto"
    },
]
