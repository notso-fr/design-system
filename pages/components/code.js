function Code(props) {
  return <div className="nsf-2cols">
    <div>{props.children}</div>
    <pre className="nsf-code">{props.children}</pre>
  </div>
}

export default Code
