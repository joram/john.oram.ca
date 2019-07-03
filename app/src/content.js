import React from 'react';


class Content extends  React.Component {

    constructor(props) {
        super(props);
        // browserHistory.listen(this.pathChange.bind(this));
    }

    pathChange(location){
        console.log(location)
    }

    render(){
        return "hi"
    }
}

export default Content
