import { profile } from '../data/profile';

type LinkItem = { label: string; detail: string; href: string; icon?: string; materialIcon?: string };
const links: readonly LinkItem[] = profile.links;

export function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Контакты Ritoka">
      {links.map((link) => (
        <a className="social-link" href={link.href} key={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}>
          {link.icon ? <img src={import.meta.env.BASE_URL + link.icon.replace(/^\//, '')} alt="" aria-hidden="true" /> : null}
          {link.materialIcon ? <span className="material-symbols-sharp" aria-hidden="true">{link.materialIcon}</span> : null}
          <span className="social-copy"><strong>{link.label}</strong><small>{link.detail}</small></span>
          <span className="material-symbols-sharp social-arrow" aria-hidden="true">north_east</span>
        </a>
      ))}
    </nav>
  );
}
