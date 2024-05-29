import React from 'react';

import {
  faYoutube,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const socialLinks = [
  { icon: faGithub, path: '' },
  { icon: faYoutube, path: '' },
  { icon: faLinkedinIn, path: '' },
];

const Social: React.FunctionComponent<{
  containerStyles: string;
  iconStyles: string;
}> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map(({ path, icon }) => (
        <Link key={path} href={path} className={iconStyles}>
          <FontAwesomeIcon icon={icon} />
        </Link>
      ))}
    </div>
  );
};

export default Social;
