interface InputProps{
    type: string;
    placeholder: string;
    name: string;
}

export function Input({name, placeholder, type}: InputProps){
    return(
        <div>
            <input className=""
             placeholder={placeholder}
             type={type}
             name={name}/>
           
        </div>
    )
}