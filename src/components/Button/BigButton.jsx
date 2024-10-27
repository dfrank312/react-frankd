import './BigButton.css'

export default function CBigButton({name, onclickfunc}) {
    return (
        <button onClick={onclickfunc}>{name}</button>
    )
  }
