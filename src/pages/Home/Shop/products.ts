import coffe1 from '../../../assets/photo-coffes/Image-1.png'
import coffe2 from '../../../assets/photo-coffes/Image-2.png'
import coffe3 from '../../../assets/photo-coffes/Image-3.png'
import coffe4 from '../../../assets/photo-coffes/Image-4.png'
import coffe5 from '../../../assets/photo-coffes/Image-5.png'
import coffe6 from '../../../assets/photo-coffes/Image-6.png'
import coffe7 from '../../../assets/photo-coffes/Image-7.png'
import coffe8 from '../../../assets/photo-coffes/Image-8.png'
import coffe9 from '../../../assets/photo-coffes/Image-9.png'
import coffe10 from '../../../assets/photo-coffes/Image-10.png'
import coffe11 from '../../../assets/photo-coffes/Image-11.png'
import coffe12 from '../../../assets/photo-coffes/Image-12.png'
import coffe13 from '../../../assets/photo-coffes/Image-13.png'

export interface ProductItem {
    id: number,
    photo: string,
    tags: string[],
    title: string,
    description: string,
    price: number,
    quantity?: number,
}

export const products = [

    {
        "id": 1,
        "photo": coffe1,
        "tags": ["tradicional"],
        "title": 'Expresso Tradicional',
        "description": "O tradicional café feito com água quente e grãos moídos",
        "price": 9.90
    },
    {
        "id": 2,
        "photo": coffe2,
        "tags": ["tradicional"],
        "title": 'Expresso Americano',
        "description": "Expresso diluído, menos intenso que o tradicional",
        "price": 9.90
    },
    {
        "id": 3,
        "photo": coffe3,
        "tags": ["tradicional"],
        "title": 'Expresso Cremoso',
        "description": "Café expresso tradicional com espuma cremosa",
        "price": 9.90
    },
    {
        "id": 4,
        "photo": coffe4,
        "tags": ['tradicional', 'gelado'],
        "title": 'Expresso Gelado',
        "description": "Bebida preparada com café expresso e cubos de gelo",
        "price": 9.90
    },
    {
        "id": 5,
        "photo": coffe5,
        "tags": ['tradicional', 'com leite'],
        "title": 'Café com Leite',
        "description": "Meio a meio de expresso tradicional com leite vaporizado",
        "price": 9.90
    },
    {
        "id": 6,
        "photo": coffe6,
        "tags": ['tradicional', 'com leite'],
        "title": 'Latte',
        "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        "price": 9.90
    },
    {
        "id": 7,
        "photo": coffe7,
        "tags": ['tradicional', 'com leite'],
        "title": 'Capuccino',
        "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
        "price": 9.90
    },
    {
        "id": 8,
        "photo": coffe8,
        "tags": ['tradicional', 'com leite'],
        "title": 'Macchiato',
        "description": "Café expresso misturado com um pouco de leite quente e espuma",
        "price": 9.90
    },
    {
        "id": 9,
        "photo": coffe9,
        "tags": ['tradicional', 'com leite'],
        "title": 'Mocaccino',
        "description": "Café expresso com calda de chocolate, pouco leite e espuma",
        "price": 9.90
    },
    {
        "id": 10,
        "photo": coffe10,
        "tags": ['especial', 'com leite'],
        "title": 'Chocolate Quente',
        "description": "Bebida feita com chocolate dissolvido no leite quente e café",
        "price": 9.90
    },
    {
        "id": 11,
        "photo": coffe11,
        "tags": ["especial", "alcoólico", "gelado"],
        "title": 'Cubano',
        "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
        "price": 9.90
    },
    {
        "id": 12,
        "photo": coffe12,
        "tags": ["especial"],
        "title": 'Havaiano',
        "description": "Bebida adocicada preparada com café e leite de coco",
        "price": 9.90
    },
    {
        "id": 13,
        "photo": coffe13,
        "tags": ['especial'],
        "title": 'Árabe',
        "description": "Bebida preparada com grãos de café árabe e especiarias",
        "price": 9.90
    },
]