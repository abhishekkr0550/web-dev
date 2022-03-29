import {useDispatch} from "react-redux";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', post});
    };
    return (
    <span onClick={likeTuit}>
    {
        post.liked &&
        <i className="fas fa-heart me-1 wd-padding-right-12"
           style={{color: 'red'}}></i>
    }
        {
            !post.liked &&
            <i className="far fa-heart me-1 wd-padding-right-12"></i>
        }

        {post.likes}
    </span>
);
}
export default TuitStats;