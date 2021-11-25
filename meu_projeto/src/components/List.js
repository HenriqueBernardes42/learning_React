import PropTypes from "prop-types"

function List({marca,ano_lançamento}){
    return (
        <>
            <h2>
                {marca} - {ano_lançamento}
            </h2>
        </>
    )
}

List.propTypes = {
    marca : PropTypes.string.isRequired,
    ano_lançamento: PropTypes.number.isRequired,
}

List.defaultProps = {
    marca: "sem marca",
    ano_lançamento: 0
}
export default List