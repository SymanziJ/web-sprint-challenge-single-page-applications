import React from 'react'


export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onChange = evt => {
        const { type, name, value, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse);
    }


    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return (
        <form id='pizza-form' onSubmit={onSubmit}>

            <div className='errors'>
                <p>{errors.name}</p>
                <p>{errors.size}</p>
            </div>
            
            <div className='form-inputs'>
                {/* ----- NAME TEXT INPUT ----- */}
                <label>Name
                    <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Full Name"
                        minLength="2"
                        onChange={onChange}
                    />
                </label>
                {/* ----- SIZE DROPDOWN ----- */}
                <label>Size
                    <select id="size-dropdown" value={values.size} name="size" onChange={onChange}>
                        <option value="">- Select a Size -</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                {/* ----- TOPPINGS CHECKLIST ----- */}
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>
                <label>Onions
                    <input
                        type="checkbox"
                        name="onions"
                        onChange={onChange}
                        checked={values.onions}
                    />
                </label>
                <label>Banana Peppers
                    <input
                        type="checkbox"
                        name="bpeppers"
                        onChange={onChange}
                        checked={values.bpeppers}
                    />
                </label>
                <label>Mushrooms
                    <input
                        type="checkbox"
                        name="mushrooms"
                        onChange={onChange}
                        checked={values.mushrooms}
                    />
                </label>
                {/* ----- SPECIAL INSTRUCTION TEXT INPUT ----- */}
                <label>Special Instructions
                    <input
                        id="special-text"
                        type="text"
                        name="special"
                        value={values.special}
                        placeholder=""
                        maxLength="200"
                        onChange={onChange}
                    />
                </label>
            </div>
            {/* ----- SUBMIT BUTTON ----- */}
            <div className='form-submit'>
                <button id='order-button' disabled={disabled}>Place Order</button>
            </div>
        </form>
        
    )
}