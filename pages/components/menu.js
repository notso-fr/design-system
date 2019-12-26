import Link from 'next/link';
import Icon from './icon';

function Menu() {
  return <ul className="nsf-menu">
    <li className="nsf-menu-category">
      Settings
    </li>
    <li className="nsf-menu-item">
      <Link href="/pages/settings/colors">
        <a className="nsf-link">
          <Icon name="droplet"></Icon>
          Colors
        </a>
      </Link>
    </li>
    <li className="nsf-menu-item">
      <Link href="/pages/settings/typography">
        <a className="nsf-link">
          <Icon name="italic"></Icon>
          Typography
        </a>
      </Link>
    </li>
    <li className="nsf-menu-category">
      Tools
    </li>
    <li className="nsf-menu-category">
      Generic
    </li>
    <li className="nsf-menu-item">
      <Link href="/pages/generic/shadows">
        <a className="nsf-link">
          <Icon name="layers"></Icon>
          Shadows
        </a>
      </Link>
    </li>
    <li className="nsf-menu-item">
      <Link href="/pages/generic/grid">
        <a className="nsf-link">
          <Icon name="grid"></Icon>
          Grid
        </a>
      </Link>
    </li>
    <li className="nsf-menu-category">
      Elements
    </li>
    <li className="nsf-menu-category">
      Objects
    </li>
    <li className="nsf-menu-item">
      <Link href="/pages/objects/icons">
        <a className="nsf-link">
          <Icon name="smile"></Icon>
          Icons
        </a>
      </Link>
    </li>
    <li className="nsf-menu-item">
      <Link href="/pages/objects/inputs">
        <a className="nsf-link">
          <Icon name="edit-3"></Icon>
          Inputs
        </a>
      </Link>
    </li>
    <li className="nsf-menu-category">
      Components
    </li>
    <li className="nsf-menu-item">
      <Link href="/pages/components/navigation">
        <a className="nsf-link">
          <Icon name="compass"></Icon>
          Navigation
        </a>
      </Link>
    </li>
    <li className="nsf-menu-category">
      Utilities
    </li>
  </ul>
}

export default Menu
