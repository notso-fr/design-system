import '../../assets/index.scss';

function Grid() {
  return <div>
    <h1>Grid</h1>

    <h2>12 cols</h2>
    <div className="demo-grid nsf-theme-red">
      <div className="nsf-12cols">
        <div className="demo-grid-block nsf-span12">
          .nsf-span12
        </div>

        <div className="demo-grid-block">
        </div>
        <div className="demo-grid-block nsf-span11">
          .nsf-span11
        </div>

        <div className="demo-grid-block nsf-span2">
          .nsf-span2
        </div>
        <div className="demo-grid-block nsf-span10">
          .nsf-span10
        </div>

        <div className="demo-grid-block nsf-span3">
          .nsf-span3
        </div>
        <div className="demo-grid-block nsf-span9">
          .nsf-span9
        </div>

        <div className="demo-grid-block nsf-span4">
          .nsf-span4
        </div>
        <div className="demo-grid-block nsf-span8">
          .nsf-span8
        </div>

        <div className="demo-grid-block nsf-span5">
          .nsf-span5
        </div>
        <div className="demo-grid-block nsf-span7">
          .nsf-span7
        </div>

        <div className="demo-grid-block nsf-span6">
          .nsf-span6
        </div>
        <div className="demo-grid-block nsf-span6">
          .nsf-span6
        </div>
      </div>
    </div>

    <h2>6 cols</h2>
    <div className="demo-grid nsf-theme-red">
      <div className="nsf-6cols">
        <div className="demo-grid-block">
        </div>
        <div className="demo-grid-block">
        </div>
        <div className="demo-grid-block">
        </div>
        <div className="demo-grid-block">
        </div>
        <div className="demo-grid-block">
        </div>
        <div className="demo-grid-block">
        </div>
        <div className="demo-grid-block nsf-span2">
          .nsf-span2
        </div>
        <div className="demo-grid-block nsf-span4">
          .nsf-span4
        </div>
        <div className="demo-grid-block nsf-span3">
          .nsf-span3
        </div>
        <div className="demo-grid-block nsf-span3">
          .nsf-span3
        </div>
        <div className="demo-grid-block nsf-span5">
          .nsf-span5
        </div>
        <div className="demo-grid-block">
        </div>
        <div className="demo-grid-block nsf-span6">
          nsf-span6
        </div>
      </div>
    </div>
  </div>
}

export default Grid
