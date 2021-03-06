import * as React from 'react'
//import appConfig from '../../AppContentConfig.json'

import './LogoComponent.css'

const logoURLs = {
    "app_org_url": "http://www.givelight.org",
    "app_logo_url": "http://www.givelight.org/images/branding/logo_lg.png"
}


class LogoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }    
    backgroundImage() {
        // TODO:  need to figure out way to do this
        return {
            backgroundImage: logoURLs['app_logo_url']
        }
    }
    render() {
        return (
            <div className="logoContainer">
                <a href={logoURLs['app_org_url']}><div style={this.backgroundImage()} className="logo"></div></a>
            </div>
        )
    }
}

export default LogoComponent
