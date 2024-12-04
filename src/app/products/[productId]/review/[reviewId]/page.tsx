export default function ProductDetails({ params }: { params: { productId: number, reviewId: number } }) {
    return <h1 className='text-center text-3xl'>Product {params.productId} Review {params.reviewId}</h1>
}