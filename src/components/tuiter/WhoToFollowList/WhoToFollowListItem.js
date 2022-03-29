import React from "react";

const WhoToFollowListItem = ( {
                                  w = {
                                      avatarIcon: '../../images/virgin.png',
                                      userName: 'Virgin',
                                      handle: 'virgin',
                                  }
                              }) => {

    return(<>
        
                <li  className="list-group-item" aria-current="true" align="left">
                    <label><img className="rounded-circle " src={w.avatarIcon}
                                width="40px" alt="Abhishek"/> {w.userName} <i className="fas fa-check-circle"></i><br></br>
                         <span className="wd-text-small">
                        @{w.handle}</span></label>
                        <button className="btn btn-primary-white rounded-pill float-end">
                            Follow
                        </button>
                    
                </li>
</>
    );
}
export default WhoToFollowListItem;
