import {links, contactHeadline} from '../mock/mock';
import BlockList from '../components/block-list';
import ContactList from './contact-list';

export default () => {
  return (
      <section className="main">
        <div className="wrapper">
          <div className="taplink">
            <div className="taplink__headline">
              <img className="taplink__avatar" src="https://i.pinimg.com/originals/ec/ac/35/ecac351ec852679f6fe244a01fb2f514.jpg"/>
              <span className="taplink__name">Ирина Лукина</span>
              <a className="taplink__user-link" href="https://www.instagram.com/stormy.flame/">
                <span className="taplink__username">@stormy.flame</span>
              </a>
            </div>
            <ul className="taplink__list">
              {links.map(BlockList)}
            </ul>
          </div>

          <div className="contacts">
            <h2 className="taplink__list-header">{contactHeadline}</h2>

            <ContactList />

          </div>

        </div>
      </section>
  );
};
