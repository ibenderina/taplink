import {links, SocialLinks} from '../mock/mock';
import BlockList from '../components/block-list';
import SocialLinksList from '../components/social-links';

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
          <ul className="social-list">
            {SocialLinks.map(SocialLinksList)}
          </ul>
        </div>
      </section>
  );
};
