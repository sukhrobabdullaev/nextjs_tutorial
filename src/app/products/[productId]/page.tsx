import type { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Specific ${params.productId}`)
        })
    })

    return {
        title: `Product ${title}`
    }
}


export default function ProductDetails({ params }: Props) {
    return <h1 className='text-center text-3xl'>Product {params.productId} details</h1>
}