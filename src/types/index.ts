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
    addToCart: (item:Guitar) => void
}


export type HeaderProps = {
    cart: CartItem[],
    removeFromCart: (id: Guitar['id']) => void
    increaseQuantity: (id: Guitar['id']) => void
    decreaseQuantity : (id: Guitar['id']) => void
    cleanCart: () => void
    isEmpty: boolean
    cartTotal: number
}