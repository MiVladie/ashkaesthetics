import { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class ScrollHandler extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      const { hash } = window.location;
      
      if (hash !== '') {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);

          if (element) {
            element.scrollIntoView();
          }
        }, 0);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }
  };

  render = () => this.props.children;
}

export default withRouter(ScrollHandler);
