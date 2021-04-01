import LinksList from '../components/links-list';

export default ({blockHeadline, block}) => {
  return <ul className="taplink__block-list">
          <li className="taplink__block-list-item">
            <h2 className="taplink__list-header">{blockHeadline}</h2>
            <ul className="taplink__list">
              {block.map(LinksList)}
            </ul>
          </li>
        </ul>
}

