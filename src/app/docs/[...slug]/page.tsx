import Feature from '@/app/components/feature'

export default async function DocsDetails({ params }: { params: { slug: string[] } }) {
    console.log(params.slug)
    if (params.slug.length == 2) {
        return (
            <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
        )
    } else if (params.slug.length === 1) {
        return <Feature params={params}/>
    }
    return <h1>DocsDetails Page {params.slug[0]}</h1>
}