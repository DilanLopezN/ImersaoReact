interface IHeader {
  title: string
}

export const Header = ({ title }: IHeader) => {
  return <div className="header">{title}</div>
}
