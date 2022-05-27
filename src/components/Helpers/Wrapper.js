// this wrapper is a kind of div wrapper to wrap JSX element.
//props.children represents the content between the opening
//and the closing tags when invoking/rendering a component.

//children is a special property of React components which contains
// any child elements defined within the component,
//e.g. the divs inside Example above. {this.props.children}
// includes those children in the rendered result.

const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
