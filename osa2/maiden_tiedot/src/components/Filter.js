const Filter = ({val, onChange}) =>{
    return(
        <div>find countries <input
            value = {val}
            onChange= {onChange}
        />
        </div>
    )
}

export default Filter