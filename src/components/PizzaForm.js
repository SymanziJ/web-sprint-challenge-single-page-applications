import React from 'react'


export default function PizzaForm(props) {


    const onChange = evt => {
    
}


const onSubmit = evt => {
    evt.preventDefault();

  }



    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='form-inputs'>
                {/* ////////// NAME TEXT INPUT ////////// */}
                <label>Name
                    <input
                        id="name-input"
                        type="text"
                        name="name"
                        value=""
                        placeholder="Full Name"
                        minLength="2"
                        onChange={onChange}
                    />
                </label>
                {/* ////////// SIZE DROPDOWN ////////// */}
                <label>Size
                    <select id="size-dropdown" value="" name="size" onChange={onChange}>
                        <option value="">- Select a Size -</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
                {/* ////////// TOPPINGS CHECKLIST ////////// */}
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        onChange={onChange}
                        checked=''
                    />
                </label>
                <label>Onions
                    <input
                        type="checkbox"
                        name="onions"
                        onChange={onChange}
                        checked=''
                    />
                </label>
                <label>Banana Peppers
                    <input
                        type="checkbox"
                        name="bpeppers"
                        onChange={onChange}
                        checked=''
                    />
                </label>
                <label>Mushrooms
                    <input
                        type="checkbox"
                        name="mushrooms"
                        onChange={onChange}
                        checked=''
                    />
                </label>
                {/* ////////// SPECIAL INSTRUCTION TEXT INPUT ////////// */}
                <label>Special Instructions
                    <input
                        id="special-text"
                        type="text"
                        name="special-text"
                        value=""
                        placeholder=""
                        maxLength="200"
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
        
    )
}