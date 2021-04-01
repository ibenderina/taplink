export default ({link, headline, description, action}) => {
  return <li className="taplink__list-item">
            <a className="taplink__list-link" href={link}>
              <span className="taplink__text">{headline}</span>
              <span className="taplink__desc">{description}</span>
              <span className="taplink__action">{action}</span>
            </a>
          </li>
}
