import React from 'react'
import HomePage from '../../routes/HomePage/HomePage';
import LandingInfo from '../../components/Landing/Landing';

class LandingPage extends React.Component {
    render() {
        const view = <HomePage/>
        return (
            <div>
                {view}
            </div>
        )
    }
}

export default LandingPage