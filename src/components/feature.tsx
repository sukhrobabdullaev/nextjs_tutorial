export default async function Feature({ params }: { params: { slug: string[] } }) {
    return (
        <h1>Feature Page {params.slug[0]}</h1>
    )
}