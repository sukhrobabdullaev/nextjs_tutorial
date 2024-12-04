export default function ProductDetails({ params }: { params: { productId: number } }) {
    return <h1 className='text-center text-3xl'>Product {params.productId} details</h1>
}