import React, {Component} from "react";
import "./massages.scss";
import Photo from "../../pictures/Photo.svg";

class MessageAuthorInfo extends Component {


    render() {


        return (
            <div className="chat-massages">
                <div>
                    <div className="photo">
                        <img src={Photo} alt="Logo" className="Photo"/>
                    </div>
                    <div className="massage">
                        <div className="name">
                            <p>Amilia Luna</p>
                            <p>19:38 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageAuthorInfo;