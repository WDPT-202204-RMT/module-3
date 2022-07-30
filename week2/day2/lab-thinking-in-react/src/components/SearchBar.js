function SearchBar(props) {
    const {value, onChange} = props
    return (
        <div>
            <input type="text" value={value} onChange={onChange} name="search" placeholder="search product" />
        </div>
    )
}

export default SearchBar