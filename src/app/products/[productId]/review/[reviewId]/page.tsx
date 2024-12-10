import { notFound } from "next/navigation"

export default function ProductDetails({ params }: { params: { productId: number, reviewId: number } }) {

    if (parseInt(params.reviewId) > 100) {
        notFound()
    }
    return (

        <>
            <h1 className='text-center text-3xl'>Product {params.productId} Review {params.reviewId}</h1>
        </>
    )

}