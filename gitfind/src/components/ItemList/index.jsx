import './style.css'

export default function ItemList({ title, description }) {
  return (
    <div className="repos">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
