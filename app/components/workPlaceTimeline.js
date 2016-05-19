import React from "react";
import TimeLine from "d3-react-simple-timeline";
import classnames from "classnames"

class WorkPlaceTimeline extends React.Component {
  render() {
      var containerClass = classnames({
          'timeline-container': true
      });
    return(
        <div className={containerClass}>
            TimeLine Olol
            <TimeLine dates={["1/06/2015",
            "1/07/2015",
            "1/09/2015",
            "1/15/2015",
            "1/25/2015",
            "1/26/2015"]}
            mouseOnHandler={function(data){
                console.log(data);
            }}
            mouseOutHandler={function(data){
                console.log(data);
            }}
            id={"d3-time-line"}
            />
        </div>
    )
  }
}

export default WorkPlaceTimeline;
