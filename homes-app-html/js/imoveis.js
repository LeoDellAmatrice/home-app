const imoveisDB = [
    {
        "id": 1,
        "url_foto": "img/1.jpg",
        "nome": "Sobrado Lindo",
        "cidade": "Salto",
        "estado": "Minas Gerais",
        "favorito": false,
        "tipoImovel": "casa",
        "adicionais": [
            {
                "chave": "Quartos disponiveis",
                "valor": "4",
            },
            {
                "chave": "Piscina",
                "valor": "Sim",
            }
        ]
    },
    {
        "id": 2,
        "url_foto": "img/2.jpg",
        "nome": "Kitnet Economica",
        "cidade": "Saltinho",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "apartamento",
        "adicionais": [
            {
                "chave": "Banheiro",
                "valor": "1",
            }
        ]
    },
    {
        "id": 3,
        "url_foto": "img/3.jpg",
        "nome": "Casarão na floresta",
        "cidade": "Americana",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "casa",
        "adicionais": [
            {
                "chave": "Quartos disponiveis",
                "valor": "10",
            },
            {
                "chave": "Quintal",
                "valor": "Muito Grande",
            }
        ]
    },
    {
        "id": 4,
        "url_foto": "img/4.jpg",
        "nome": "Casa 04",
        "cidade": "Nova Odessa",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "casa",
        "adicionais": [
            {
                "chave": "Quartos disponiveis",
                "valor": "4",
            },
            {
                "chave": "Piscina",
                "valor": "Sim",
            }
        ]
    },
    {
        "id": 5,
        "url_foto": "img/5.jpg",
        "nome": "Casa 05",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "casa",
        "adicionais": [
            {
                "chave": "Quartos disponiveis",
                "valor": "4",
            },
            {
                "chave": "Piscina",
                "valor": "Sim",
            }
        ]
    },
    {
        "id": 6,
        "url_foto": "img/6.jpg",
        "nome": "Casa 06",
        "cidade": "Cabreúva",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "casa",
        "adicionais": [
            {
                "chave": "Quartos disponiveis",
                "valor": "4",
            },
            {
                "chave": "Piscina",
                "valor": "Sim",
            }
        ]
    },
    {
        "id": 7,
        "url_foto": "img/7.jpg",
        "nome": "Casa 07",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "casa",
        "adicionais": []
    },
    {
        "id": 8,
        "url_foto": "img/8.jpg",
        "nome": "Casa 08",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "casa",
        "adicionais": []
    },
    {
        "id": 9,
        "url_foto": "img/9.jpg",
        "nome": "Casa 09",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "apartamento",
        "adicionais": []
    }
]

function buscarTodosImoveis() {
    return imoveisDB
}

function buscarImovelPeloId(id) {
    for (let i = 0; i < imoveisDB.length; i++) {
        const imv =  imoveisDB[i];
        
        if (imv.id == id) {
            return imv
        }
    }
}

