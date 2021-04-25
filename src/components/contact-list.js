import {SocialLinks} from '../mock/mock';
import Contact from './contact';

export default () => {
  return (
      <ul className="contacts__list">
        {Object.keys(SocialLinks).map((key) => {
          return Contact({
            className: key,
            text: SocialLinks[key].text,
            link: SocialLinks[key].link,
          });
        })}
      </ul>
  )
}
