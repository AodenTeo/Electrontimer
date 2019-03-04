import React from 'react';
import './TimeList.css';
class TimeList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
      console.log(this.props.TimeList);
    }
    render() {
      const times = this.props.TimeList;
      console.log(times);
        return (<div id='timelist'>
        <h3>Time List</h3>
        <ol>
        {
				times.map(time => {
					return (<li key={times.indexOf(time)}><p id='timelistelement'>{time}</p></li>);
				}

				)
			}
          
        </ol>
      </div>);
    }
    
}
export default TimeList;