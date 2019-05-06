import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from './getPageContext';

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props);
      this.muiPageContext = getPageContext();
      this.state = { showProgress: false };
    }

    componentWillMount() {
      this.setState({ showProgress: true });
      setTimeout(() => {
        // Start the timer
        this.setState({ showProgress: false }); // After 1 second, set render to true
      }, 1000);
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
      // // shows user feedback widget on every page
      // const userFeedback = require('./userFeedback'); // eslint-disable-line
    }

    render() {
      const { showProgress } = this.state;

      return (
        <JssProvider generateClassName={this.muiPageContext.generateClassName}>
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.muiPageContext.theme}
            sheetsManager={this.muiPageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...this.props} showProgress={showProgress} />
          </MuiThemeProvider>
        </JssProvider>
      );
    }
  }

  return WithRoot;
}

export default withRoot;
