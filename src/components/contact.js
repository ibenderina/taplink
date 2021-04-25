export default ({className, text, link}) => {
  return <li key={className} className="contacts__list-item" key={className}>
          <a className={"contacts__link contacts__link--" + className} href={link} aria-label={text}> </a>
        </li>
}
