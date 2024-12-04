export default function Products() {
    return <div className='flex items-center justify-center flex-col text-3xl'>
        <h1>Products Page</h1>
        <ul className='text-blue-500 underline'>
            <li><a href="products/1">Product 1</a></li>
            <li><a href="products/2">Product 2</a></li>
            <li><a href="">Product 3</a></li>
        </ul>
    </div>
}