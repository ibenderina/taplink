import LinksList from '../components/links-list';

export default ({id, blockHeadline, block}) => {
  return <li className="taplink__block-list" key={id}>
          <ul className="taplink__block-list-item">
            <h2 className="taplink__list-header">{blockHeadline}</h2>
            <ul className="taplink__list">
              {block.map(LinksList)}
            </ul>
          </ul>
        </li>
}

