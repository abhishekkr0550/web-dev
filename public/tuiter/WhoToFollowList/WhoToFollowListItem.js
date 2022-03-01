const WhoToFollowListItem = (w) => {

    return(`
        
                <li  class="list-group-item" aria-current="true" >
                    <label><img class="rounded-circle " src=${w.avatarIcon}
                         width="40px" alt="Abhishek"/> ${w.userName} <i class="fas fa-check-circle"></i><br>
                         <span class="wd-text-small">
                        @${w.handle}</label></span>
                        <button class="btn btn-primary-white rounded-pill float-end">
                            Follow
                        </button>
                    
                </li>
    `);
}
export default WhoToFollowListItem;
