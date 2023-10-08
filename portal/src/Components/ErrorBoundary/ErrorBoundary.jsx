import React from 'react';
import { Result } from 'antd';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.spare ? (
        this.props.spare
      ) : (
        <Result
          style={{ margin: 'auto' }}
          status='500'
          subTitle='Что-то пошло не так :('
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
