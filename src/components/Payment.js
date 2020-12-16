import React, { useState } from 'react'

const Payment  = () => {
        return (
            <div>
                <h2 style={{textAlign: "center"}}>Pagar</h2>
            </div>
        )
    }

function InputField({ title, children}) {
    return <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ marginRight: 4}}>{title}</label>
        {children}
    </div>
}

function useTextInput(defaultValue){
    const [val, setVal] = useState(defaultValue);

    return{
        onChange: (evt) => setVal(evt.target.value),
        value: val,
        type: 'text'
    }
}


export default function User(){
    const nameInput = useTextInput("");
    const phoneInput = useTextInput("");
    const mailInput = useTextInput("");

    function onSubmit() {
        console.log('Tu nombre es ${nameInput.value} tu número de teléfono es ${phoneInput.value} y tu mail es ${mailInput.value}');
    }

    const inputs= [
        [nameInput, "Nombre"],
        [phoneInput, "Teléfono"],
        [mailInput, "Mail"]
    ];

    return(
        <>  
            {inputs.map(([input, title]) => 
            <InputField key={title} title={title}>
                <input {...Input} />
            </InputField>
            )}
            
            {
                <button
                disabled={!nameInput.value || !phoneInput.value || !mailInput.value}
                onClick={onSubmit}
                >
                    Crear Orden
                </button>
            }          
        </>
    );
}


export default Payment
