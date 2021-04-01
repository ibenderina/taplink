export default ({link, icon}) => {
  return <li className="social-list__item">
          <a className="social-list__link" href={link}>
            <img className="social-list__icon" src={icon} />
          </a>
        </li>
}
