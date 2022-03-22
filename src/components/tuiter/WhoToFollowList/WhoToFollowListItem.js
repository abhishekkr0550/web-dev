import React from "react";

const WhoToFollowListItem = ( {
                                  w = {
                                      avatarIcon: '../../images/virgin.png',
                                      userName: 'Virgin',
                                      handle: 'virgin',
                                  }
                              }) => {

    return(<>
        
                <li  class="list-group-item" aria-current="true" align="left">
                    <label><img class="rounded-circle " src={w.avatarIcon}
                                width="40px" alt="Abhishek"/> {w.userName} <i class="fas fa-check-circle"></i><br></br>
                         <span class="wd-text-small">
                        @{w.handle}</span></label>
                        <button class="btn btn-primary-white rounded-pill float-end">
                            Follow
                        </button>
                    
                </li>
</>
    );
}
export default WhoToFollowListItem;
