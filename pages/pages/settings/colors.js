import '../../assets/index.scss';

function Color() {
  return <div>
    <div className="demo-color demo-color-main">
      <span className="demo-color-name">green</span>
      <span className="demo-color-hex">#</span>
    </div>
    <div className="demo-color demo-color-level10"></div>
    <div className="demo-color demo-color-level9"></div>
    <div className="demo-color demo-color-level8"></div>
    <div className="demo-color demo-color-level7"></div>
    <div className="demo-color demo-color-level6"></div>
    <div className="demo-color demo-color-level5"></div>
    <div className="demo-color demo-color-level4"></div>
    <div className="demo-color demo-color-level3"></div>
    <div className="demo-color demo-color-level2"></div>
    <div className="demo-color demo-color-level1"></div>
  </div>
}

function Colors() {
  return <div>
    <h1>Color palette</h1>

    <div className="demo-palette nsf-theme-red">
      <Color></Color>
    </div>

    <div className="demo-palette nsf-theme-orange">
      <Color></Color>
    </div>

    <div className="demo-palette nsf-theme-green">
      <Color></Color>
    </div>
  </div>
}

export default Colors
