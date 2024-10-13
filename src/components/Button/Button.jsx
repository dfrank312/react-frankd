import './Button.css'

export default function CButton({name, onclickfunc}) {
    return (
        <button onClick={onclickfunc}>{name}</button>
    )
  }
