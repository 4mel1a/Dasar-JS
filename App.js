import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// CONTOH RESPON DARI API  =============================
const data = [
  {
    id: 1,
    dataSpp: 'dataSPP1',
  },
  {
    id: 2,
    dataSpp: 'dataSPP2',
  },
  {
    id: 3,
    dataSpp: 'dataSPP3',
  },
];
// =====================================================

function App() {
  const [spp, setSpp] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/spp')
      .then(res => {
        setSpp(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <form>
      <label for='cars'>SPP</label>
      <select name='cars' id='cars'>
        {spp.map((v, i) => (
          <option key={i} value={i.id}>
            {i.dataSpp}
          </option>
        ))}
      </select>
    </form>
  );
}

export default App;
