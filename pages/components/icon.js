import feather from 'feather-icons';

function Icon(props) {
  if (!feather.icons[props.name]) {
    return null;
  }
  return <span title="{props.name}" className="nsf-icon" dangerouslySetInnerHTML={{__html: feather.icons[props.name].toSvg()}}></span>;
}

export default Icon;
