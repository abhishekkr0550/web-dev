import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit}
    from "../../actions/tuits-actions";

const WhatsHappening = () => {
    // let [whatsHappening, setWhatsHappening]
    //     = useState('');
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    const dispatch = useDispatch();

    // const tuitClickHandler = () => {
    //     dispatch({type: 'create-tuit',
    //         tuit: whatsHappening
    //     });
    //
    // }
    return (
        <>
            <textarea className="col-12"
                      onChange={(e) =>
                          setNewTuit({...newTuit,
                              tuit: e.target.value})}>
      </textarea>
      {/*<textarea className="col-12" value={whatsHappening}*/}
      {/*          onChange={(event) =>*/}
      {/*              setWhatsHappening(event.target.value)}>*/}
      {/*</textarea>*/}
            <button className="btn btn-primary-white rounded-pill float-end" onClick={() => createTuit(dispatch, newTuit)}>
                Tuit
            </button>
        </>
    );
}
export default WhatsHappening;