import React, { useState } from 'react';


const App = () => {

    const [ username, setUsername ] = useState('@');
    const [ newChirp, setNewChirp ] = useState('');
    const [ mergeData, setMerged ] = useState([]);

    const handleMerge = (e) => {
        e.preventDefault();

        if (!username || !newChirp) {
            return;
        }

        const newData = {
            username: username,
            chirp: newChirp
        }

        setMerged([newData, ...mergeData])

        setUsername('@')
        setNewChirp('')

    }



   
    return (
        <>
        <form className="container border rounded shadow bg-light-subtle">
            <div className="bg-light mb-3 mt-3">
                
                <label htmlFor="username" className="div-label fw-semibold">Username:</label>
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control" id="username"></input>
            
                <label htmlFor="new-chirp" className="form-label mt-2 fw-semibold">Chirp:</label>
                <input value={newChirp} onChange={e => setNewChirp(e.target.value)} type="text" className="form-control" id="new-chirp" placeholder='Your Thoughts'></input>
            
            </div>
            <button onClick={handleMerge} className="btn btn-info mb-3">Send</button>
        </form>
        <h2 className='container mt-2 border-bottom text-info fw-bold'>Chirper Feed</h2>
        <div>
            <main className='container border rounded bg-info-subtle p-3'>
                
            {mergeData.map(chirp => {
                return <p>{chirp.username} {chirp.chirp}</p>
                
            })}
            </main>
        </div>
      
            
        </>

    );
        
    


    };


export default App;