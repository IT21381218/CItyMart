
// import React, { useState } from "react";
// import { useWorkoutsContext } from "../components/hooks/useWorkoutsContext";
// import '../components/styles/form.css'

// const WorkoutForm = () => {
//     const { dispatch } = useWorkoutsContext();
//     const [title, setTitle] = useState('');
//     const [load, setLoad] = useState('');
//     const [reps, setReps] = useState('');
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const workout = { title, load, reps };

//         try {
//             const response = await fetch('/workouts', {
//                 method: 'POST',
//                 body: JSON.stringify(workout),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             const json = await response.json();

//             if (response.ok) {
//                 setError(null);
//                 setTitle('');
//                 setLoad('');
//                 setReps('');
//                 dispatch({ type: 'CREATE_WORKOUT', payload: json });
//             } else {
//                 throw new Error(json.message);
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const startDictation = (field) => {
//         if (window.hasOwnProperty('webkitSpeechRecognition')) {
//             const recognition = new window.webkitSpeechRecognition();
//             recognition.continuous = false;
//             recognition.interimResults = false;
//             recognition.lang = "en-US";
//             recognition.start();
//             recognition.onresult = (e) => {
//                 const transcript = e.results[0][0].transcript;
//                 switch (field) {
//                     case 'title':
//                         setTitle(transcript);
//                         break;
//                     case 'load':
//                         setLoad(parseInt(transcript));
//                         break;
//                     case 'reps':
//                         setReps(parseInt(transcript));
//                         break;
//                     default:
//                         break;
//                 }
//                 recognition.stop();
//             };
//             recognition.onerror = (e) => {
//                 recognition.stop();
//             }
//         }
//     };

//     return (
//         <form className="create" onSubmit={handleSubmit}>
//             <h3>Add a New Workout</h3>

//             <div className="input-group">
//                 <label>Exercise Title:</label>
//                 <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <button type="button" onClick={() => startDictation('title')}>🎤</button>
//             </div>

//             <div className="input-group">
//                 <label>Load:</label>
//                 <input
//                     type="number"
//                     value={load}
//                     onChange={(e) => setLoad(e.target.value)}
//                 />
//                 <button type="button" onClick={() => startDictation('load')}>🎤</button>
//             </div>

//             <div className="input-group">
//                 <label>Reps:</label>
//                 <input
//                     type="number"
//                     value={reps}
//                     onChange={(e) => setReps(e.target.value)}
//                 />
//                 <button type="button" onClick={() => startDictation('reps')}>🎤</button>
//             </div>

//             <button type="submit">ADD</button>
//             {error && <div className="error">{error}</div>}
//         </form>
//     );
// };

// export default WorkoutForm;



import React, { useState } from "react";
import { useItemsContext } from "./hooks/useItemsContext";
import '../components/styles/form.css'

const ItemForm = () => {
    const { dispatch } = useItemsContext();
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const item = { title, quantity};

        try {
            const response = await fetch('/items', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();

            if (response.ok) {
                setError(null);
                setTitle('');
                setQuantity('');
                dispatch({ type: 'CREATE_ITEM', payload: json });
            } else {
                throw new Error(json.message);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const startDictation = (field) => {
        if (window.hasOwnProperty('webkitSpeechRecognition')) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = "en-US";
            recognition.start();
            recognition.onresult = (e) => {
                const transcript = e.results[0][0].transcript;
                switch (field) {
                    case 'title':
                        setTitle(transcript);
                        break;
                    case 'quantity':
                        setQuantity(parseInt(transcript));
                        break;
                    default:
                        break;
                }
                recognition.stop();
            };
            recognition.onerror = (e) => {
                recognition.stop();
            }
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Item</h3>

            <div className="input-group">
                <label>Food Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="button" onClick={() => startDictation('title')} className="micBTN"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXlJREFUSEvt1cFLVFEUx/HPgGCEGxcWSBBuTBApEUQCV4L/gUggiYiICG38E8KFi7YiElKIG10HrsWSNupCBF0pKKJQmwgDtXw3biLTvHlvGGYheFcP7jnne+7v3vN7BTVehRrXlxcwhDfowDm+YAwnWQ3mAQxguUShIzxPwN/LQfIAvqI7pch8corxagGhw8aUIgdoqRbwJ0PnsirkkegekPWS3T2JfuIhGhC+j9Gccs6w9yTG/ojxIe9mlXpFe2hFFzbxAcMpgAWMogcb2EV7FuB9TJrDBJqwg0dFkGAVL/AtGbaPeJ3EzGIyC/ASn3EZLWIrShTAodPfWI8WcYperMWindjOAoT9RQQHPUycsx/7KRKFE6zicanuQ07aJNfjE/rwC0GudwiyhPUMU0kDI6hLdF/BK1wVN1LOKh5gJv4H0oblAtN4G6X7Ly6PFz2NnQ6iLVYI97IUpTyr1k1v5/+b6jyN/c3LHRgpNQdkGlcll1xxsVIJ16xNQxlXeT1iAAAAAElFTkSuQmCC"/></button>
            </div>

            <div className="input-group">
                <label>Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="button" onClick={() => startDictation('quantity')} className="micBTN"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXlJREFUSEvt1cFLVFEUx/HPgGCEGxcWSBBuTBApEUQCV4L/gUggiYiICG38E8KFi7YiElKIG10HrsWSNupCBF0pKKJQmwgDtXw3biLTvHlvGGYheFcP7jnne+7v3vN7BTVehRrXlxcwhDfowDm+YAwnWQ3mAQxguUShIzxPwN/LQfIAvqI7pch8corxagGhw8aUIgdoqRbwJ0PnsirkkegekPWS3T2JfuIhGhC+j9Gccs6w9yTG/ojxIe9mlXpFe2hFFzbxAcMpgAWMogcb2EV7FuB9TJrDBJqwg0dFkGAVL/AtGbaPeJ3EzGIyC/ASn3EZLWIrShTAodPfWI8WcYperMWindjOAoT9RQQHPUycsx/7KRKFE6zicanuQ07aJNfjE/rwC0GudwiyhPUMU0kDI6hLdF/BK1wVN1LOKh5gJv4H0oblAtN4G6X7Ly6PFz2NnQ6iLVYI97IUpTyr1k1v5/+b6jyN/c3LHRgpNQdkGlcll1xxsVIJ16xNQxlXeT1iAAAAAElFTkSuQmCC"/></button>
            </div>


            <button type="submit" className="AddItem">ADD</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default ItemForm;
