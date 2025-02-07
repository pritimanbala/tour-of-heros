import { useState } from 'react';
import Detail from './elements/detail';
import Disp from './elements/display';
import List from './elements/list';
import Navb from './elements/navbar';
import videoFile from './videoplayback.mp4'; // Import the video file


import {BrowserRouter, Route, Routes} from "react-router-dom"
 
function App() {
    const [hashira, chHashira] = useState([
      {
        "id": 1,
        "name": "Gyomei Himejima",
        "title": "Stone Hashira",
        "abilities": [
          "Stone Breathing",
          "Enhanced physical strength",
          "Exceptional sensory skills"
        ],
        "img": 'https://imgs.search.brave.com/arnVKQdgNEmmjPe7iwapxnFrKjSi4A91_YgX7iIWqGI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ib28t/cHJvZC5iLWNkbi5u/ZXQvZGF0YWJhc2Uv/cHJvZmlsZXMvMTcw/MDg0MzMxODQxM2Vk/ODliOTVlMmVhODAx/N2UzNTYzMjRlYTFh/NTMyNmRhLmpwZz9j/bGFzcz1zbQ'
      },
      {
        "id": 2,
        "name": "Sanemi Shinazugawa",
        "title": "Wind Hashira",
        "abilities": [
          "Wind Breathing",
          "Incredible speed",
          "Extensive combat experience"
        ],
        "img" : "https://imgs.search.brave.com/Mon-afSrnFPkdEtnJfs9YZR9Cz2N-NWD3tzdX0MS2YY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDgv/U2FuZW1pLVNoaW5h/enVnYXdhLVRoZS1X/aW5kLUhhc2hpcmEt/aW4tRGVtb24tU2xh/eWVyLUNyb3BwZWQu/anBn"
      },
      {
        "id": 3,
        "name": "Giyu Tomioka",
        "title": "Water Hashira",
        "abilities": [
          "Water Breathing",
          "Calm and composed fighting style",
          "Exceptional swordsmanship"
        ],
        "img" : 'https://imgs.search.brave.com/27OOYqgGV71EQ_w-ntNOhN07Gtf3N3pfubdgLKF8Dc0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDIv/Z2l5dS1zdGFyZS5q/cGc'
      },
      {
        "id": 4,
        "name": "Kyojuro Rengoku",
        "title": "Flame Hashira",
        "abilities": [
          "Flame Breathing",
          "Explosive attacks",
          "Passionate and determined"
        ],
        "img" : "https://imgs.search.brave.com/UlkQxYiCmkPG2j30e4SfxP1DJI9AF8fdAy_10VzmQag/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci84NjMv/NDQxL0hELXdhbGxw/YXBlci1reW9qdXJv/LXJlbmdva3UuanBn"
      },
      {
        "id": 5,
        "name": "Tengen Uzui",
        "title": "Sound Hashira",
        "abilities": [
          "Sound Breathing",
          "Tactical combat techniques",
          "Enhanced hearing senses"
        ],
        "img" : 'https://imgs.search.brave.com/shBhzna6inBaUtrmXeS_fdBZYgSQpsJVB1L23l1dbJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wb2dn/ZXJzLmNvbS9jZG4v/c2hvcC9hcnRpY2xl/cy8wOGZmNmM4ZDFm/MDcxOWM2NWY3NTJm/ZGIyZDJmNDVkNF8x/ODE4eDEwMjNfY3Jv/cF9jZW50ZXIud2Vi/cD92PTE3MDgxMjA5/MzQ'
      },
      {
        "id": 6,
        "name": "Mitsuri Kanroji",
        "title": "Love Hashira",
        "abilities": [
          "Love Breathing",
          "Extreme flexibility",
          "Immense strength"
        ],
        "img": "https://imgs.search.brave.com/QOkCRbdsoeNKH9E558wWjzqrji6HmRvP6Qy8dv6dLWc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbWl0c3VyaS1r/YW5yb2ppLXBpY3R1/cmVzLTVycGlmbXo4/MXhrcGhkbDQuanBn"
      },
      {
        "id": 7,
        "name": "Muichiro Tokito",
        "title": "Mist Hashira",
        "abilities": [
          "Mist Breathing",
          "High speed and agility",
          "Sharp and analytical mind"
        ],
        "img":"https://imgs.search.brave.com/A8WHCfUnvTt-FNExTzGtriIxuENR9ZlYd26vmqsHVHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDIv/bXVpY2hpcm8tdGhl/LW1pc3QtaGFzaGly/YS1kZW1vbi1zbGF5/ZXItc3dvcmRzbWl0/aC12aWxsYWdlLWFy/Yy0xLmpwZWc"
      },
      {
        "id": 8,
        "name": "Shinobu Kocho",
        "title": "Insect Hashira",
        "abilities": [
          "Insect Breathing",
          "Poison-based techniques",
          "High precision and intelligence"
        ],
        "img" : "https://imgs.search.brave.com/w5tlyYRr2BpzFOUadHWg_pIkTtLzZjFrHmXiOlufMHY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc2hp/bm9idS1rb2Noby1h/bmQtd2lzdGVyaWEt/bHB2azZiY3R3MDht/cTBlcS5qcGc"
      },
      {
        "id": 9,
        "name": "Obanai Iguro",
        "title": "Serpent Hashira",
        "abilities": [
          "Serpent Breathing",
          "Flexible and unpredictable movements",
          "Sharp reflexes"
        ],
        "img" : "https://imgs.search.brave.com/PK4qVCR4gtzqeItB36HoA8wEwau0AQMsELFRsGAXCrY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDEv/RGVtb24tU2xheWVy/LUV2ZXJ5LU5pY2hp/cmluLVN3b3JkLU93/bmVkLUJ5LVRoZS1I/YXNoaXJhLVJhbmtl/ZC1PYmFuYWktSWd1/cm8uanBn"
      }
    ]
    
    )
  return (
    <div className="App">
  <video
    className="background-video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={videoFile} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="main-content">
    <BrowserRouter>
      <Navb />
      <Routes>
      <Route path="/hashiras" element={<Disp hashira={hashira} />} />

        <Route path="/detail/:id" element={<Detail hashira={hashira} change={chHashira} />} />

        <Route path="/heros" element={<List  hashira={hashira}/>} />
      </Routes>
    </BrowserRouter>
  </div>
</div>

  );
}

export default App;