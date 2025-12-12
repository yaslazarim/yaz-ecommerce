export function formatPrice(price: number) {
    return Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL'
    }).format(price)
}