import React, {Component} from 'react';

export function withCloseHandler(WrappedComponent, props) {
    return class extends Component {
        render() {
            return <WrappedComponent {...props} />
        }
    }
}