import '../../assets/index.scss';
import Icon from '../../components/icon';

function Navigation() {
  return <div>
    <h1>Navigation</h1>

    <h2>Links</h2>
    <div className="demo-navigation">
      <a className="nsf-link" href="#">Link</a>
    </div>

    <h2>Header</h2>
    <div className="demo-navigation">
      <div className="nsf-header">
        <a href="#" className="nsf-link nsf-first-link">Header name</a>
      </div>
    </div>
    <div className="demo-navigation">
      <div className="nsf-header">
        <a href="#" className="nsf-link nsf-first-link">Header name</a>
        <ul class="nsf-header-links">
          <li>
            <a href="#" className="nsf-link">Link 1</a>
          </li>
          <li>
            <a href="#" className="nsf-link">Link 2</a>
          </li>
          <li>
            <a href="#" className="nsf-link">Link 3</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="demo-navigation">
      <div className="nsf-header">
        <a href="#" className="nsf-link nsf-first-link nsf-image-link">
          <img src="/assets/logo.png" />
        </a>
        <ul class="nsf-header-links">
          <li>
            <a href="#" className="nsf-link">Link 1</a>
          </li>
          <li>
            <a href="#" className="nsf-link">Link 2</a>
          </li>
          <li>
            <a href="#" className="nsf-link">Link 3</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="demo-navigation">
      <div className="nsf-header">
        <a href="#" className="nsf-link nsf-first-link">Header name</a>
        <ul class="nsf-header-links">
          <li>
            <a href="#" className="nsf-link"><Icon name="home"></Icon></a>
          </li>
          <li>
            <a href="#" className="nsf-link"><Icon name="monitor"></Icon></a>
          </li>
          <li>
            <a href="#" className="nsf-link"><Icon name="user"></Icon></a>
          </li>
        </ul>
      </div>
    </div>
    <div className="demo-navigation">
      <div className="nsf-header">
        <a href="#" className="nsf-link nsf-first-link">Header name</a>
        <div className="nsf-header-form nsf-input-group nsf-input-merged-group">
          <input className="nsf-input" type="text" placeholder="Search" />
          <Icon name="search"></Icon>
        </div>
      </div>
    </div>
    <div className="demo-navigation">
      <div className="nsf-header nsf-3cols">
        <div>
          <a href="#" className="nsf-link nsf-first-link">Header name</a>
          <ul class="nsf-header-links">
            <li>
              <a href="#" className="nsf-link"><Icon name="home"></Icon></a>
            </li>
            <li>
              <a href="#" className="nsf-link"><Icon name="monitor"></Icon></a>
            </li>
            <li>
              <a href="#" className="nsf-link"><Icon name="user"></Icon></a>
            </li>
          </ul>
        </div>
        <div className="nsf-header-form nsf-input-group nsf-input-merged-group nsf-align-center nsf-justify-center">
          <input className="nsf-input" type="text" placeholder="Search" />
          <Icon name="search"></Icon>
        </div>
        <div className="nsf-align-start nsf-justify-end">
          <a href="#" className="nsf-link">
            <Icon name="settings"></Icon>
          </a>
        </div>
      </div>
    </div>

    <h2>Footer</h2>
    <div className="demo-navigation">
      <div className="nsf-footer nsf-4cols">
        <ul className="nsf-footer-links">
          <li>
            <a href="#" className="nsf-link">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="nsf-link">
              Legale
            </a>
          </li>
        </ul>
        <ul className="nsf-footer-links">
          <li>
            <a href="#" className="nsf-link">
              The team
            </a>
          </li>
          <li>
            <a href="#" className="nsf-link">
              About
            </a>
          </li>
        </ul>
        <ul className="nsf-footer-links">
          <li>
            <a href="#" className="nsf-link">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="nsf-link">
              Legale
            </a>
          </li>
        </ul>
        <ul className="nsf-footer-links">
          <li>
            <a href="#" className="nsf-link">
              The team
            </a>
          </li>
          <li>
            <a href="#" className="nsf-link">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>

    <h2>Menu</h2>
    <div className="demo-navigation">
      <ul className="nsf-menu">
        <li className="nsf-menu-category">
          Category
        </li>
        <li className="nsf-menu-item">
          <a className="nsf-link">
            <Icon name="droplet"></Icon>
            Link 1
          </a>
        </li>
        <li className="nsf-menu-item">
          <a className="nsf-link">
            <Icon name="italic"></Icon>
            Link 2
          </a>
        </li>
      </ul>
    </div>
  </div>
}

export default Navigation
