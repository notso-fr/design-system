import feather from 'feather-icons';
import '../../assets/index.scss';
import Icon from '../../components/icon';

function Icons() {
  const items = Object.keys(feather.icons).map(i => <span className="demo-icon"><Icon name={i}></Icon></span>)
  const count = Object.keys(feather.icons).length;

  return <div>
    <h1>Icons</h1>
    <p>Based on the {count} <a href="https://feathericons.com/" target="_blank">Feather icons</a></p>

    <div className="demo-grid nsf-theme-red">
      {items}
    </div>
  </div>
}

export default Icons
