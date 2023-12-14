import React, { useEffect } from "react";

const MessageItem = ({info}) => {
    if (info.fullName == null && info.nowTime == null && info.message == null) return null;
    else
        return (
            <div className="bubble">
                <div className="m-row">
                    <p className="m-fullName" id="m-fullName">{info.fullName}</p>
                    <p className="m-time">{info.nowTime}</p>
                </div>
                <p className="m-text">{info.message}</p>
            </div>
        )
}
export default MessageItem;