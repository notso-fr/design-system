import Code from '../../components/code';

function Shadows() {
  return <div>
    <h1>Shadows</h1>

    <h2>Texts</h2>
    <Code>
      <p className="nsf-shadow1">Shadow1</p>
      <p className="nsf-shadow2">Shadow2</p>
      <p className="nsf-shadow3">Shadow3</p>
      <p className="nsf-shadow4">Shadow4</p>
      <p className="nsf-shadow5">Shadow5</p>
    </Code>

    <h2>Blocks</h2>
    <Code>
      <div className="nsf-shadow1 demo-shadow-block">Shadow1</div>
      <div className="nsf-shadow2 demo-shadow-block">Shadow2</div>
      <div className="nsf-shadow3 demo-shadow-block">Shadow3</div>
      <div className="nsf-shadow4 demo-shadow-block">Shadow4</div>
      <div className="nsf-shadow5 demo-shadow-block">Shadow5</div>
    </Code>
  </div>
}

export default Shadows
