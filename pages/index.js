import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

// turning this to a class component to use the classed based special lifecycle hook
class IndexPage extends Component {
    static getInitialProps(context) {
        // console.log(context); // we get the context here on the server side in the console
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: 'Super App' });
            }, 1000)
        });
        return promise; // returning the entire promise to the method
        // nextjs will take care abt listening to the result and then 
        // pre-populate our props once the result is there
        // and only render the page once the result is there
    };
    render() {
        return (
            <div>
                <h1>The Main Page of {this.props.appName}</h1>
                <p>Go to <Link href='/auth'><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>
        )
    }
};

export default IndexPage;