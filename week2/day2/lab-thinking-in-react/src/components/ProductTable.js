import ProductRow from "./ProductRow"

function ProductTable(props) {
    const {products} = props

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((e) => <ProductRow product={e} key={e.id} />)}
            </tbody>
        </table>
    )
}

export default ProductTable