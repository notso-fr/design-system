import Icon from '../../components/icon';

function Inputs() {
  return <div>
    <h1>Inputs</h1>

    <h2>Single input</h2>
    <div className="demo-inputs">
      <div>
        <p>
          Text: <input type="text" className="nsf-input" placeholder="Some example..." />
        </p>
        <p>
          Password: <input type="password" className="nsf-input" placeholder="Some example..." />
        </p>
        <p>
          Checkbox: <input type="checkbox" className="nsf-input" />
        </p>
        <p>
          Radio: <input type="radio" className="nsf-input" />
        </p>
        <p>
          Select: <select className="nsf-select">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </p>
      </div>
    </div>

    <h2>Labeled input</h2>
    <div className="demo-inputs">
      <div>
        <label className="nsf-label">
          Test
          <input type="text" className="nsf-input" placeholder="Some example..."/>
        </label>
      </div>
      <div>
        <label className="nsf-label">
          Test
        </label>
        <input type="text" className="nsf-input" placeholder="Some example..."/>
      </div>
    </div>

    <h2>Grouped inputs</h2>
    <div className="demo-inputs">
      <div className="nsf-input-group">
        <input type="text" className="nsf-input" placeholder="Some example..."/>
        <input type="text" className="nsf-input" placeholder="Some example..."/>
      </div>
      <div className="nsf-input-group">
        <input type="text" className="nsf-input" placeholder="Some example..."/>
        <select className="nsf-select">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
    </div>

    <h2>Input with icon</h2>
    <div className="demo-inputs">
      <div className="nsf-input-group">
        <Icon name="dollar-sign"></Icon>
        <input type="text" className="nsf-input" placeholder="Some example..."/>
      </div>
      <div className="nsf-input-group">
        <input type="text" className="nsf-input" placeholder="Some example..."/>
        <Icon name="dollar-sign"></Icon>
      </div>
    </div>

    <h2>Merged inputs</h2>
    <div className="demo-inputs">
      <div className="nsf-input-group nsf-input-merged-group">
        <input type="text" className="nsf-input" placeholder="Some example..."/>
        <input type="text" className="nsf-input" placeholder="Some example..."/>
        <select className="nsf-select">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className="nsf-input-group nsf-input-merged-group">
        <Icon name="dollar-sign"></Icon>
        <input type="text" className="nsf-input" placeholder="Some example..."/>
      </div>
      <div className="nsf-input-merged-group nsf-input-group">
        <input type="text" className="nsf-input" placeholder="Some example..."/>
        <Icon name="dollar-sign"></Icon>
      </div>
    </div>
  </div>
}

export default Inputs
