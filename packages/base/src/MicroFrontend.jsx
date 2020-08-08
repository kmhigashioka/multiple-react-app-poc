import React from 'react';

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    const appendScript = src => {
      const script = document.createElement('script');
      script.id = scriptId;
      script.crossOrigin = '';
      script.src = src;
      script.onload = this.renderMicroFrontend;
      document.head.appendChild(script);
    };

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        manifest.entrypoints.forEach(p => {
          appendScript(`${host}/${p}`);
        });
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;

    window[`render${name}`] && window[`render${name}`](`${name}-container`, history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
