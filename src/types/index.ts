import type { CartActions } from "../reducers/cart-reducer"

export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number

}

export type CartItem = Guitar & {
    quantity: number
}

// export type GuitartId = Pick<Guitar, 'id'>

// export type GuitartId = Guitar['id']

export type GuitarProps = {
    guitar: Guitar,
    dispatch: React.Dispatch<CartActions>
}


export type HeaderProps = {
    cart: CartItem[],
    dispatch : React.Dispatch<CartActions>
}