import "./App.css";
import {
  Typography,
  Select,
  MenuItem,
  ListSubheader,
  InputLabel,
  FormControl,
} from "@mui/material";
import Data from "./Data/Data";
import Map from "./Components/Map";
import { useState } from "react";
import image from './imgAndr/img/Уж2.jpg'

function App() {
  const [data, setData] = useState("");
  const [region, setRegion] = useState("");
  const handleChange = (name) => {
    console.log("value changed");
  };

  // console.log(data)

  function Filter() {
    let ch;
    Data.map((obj) =>
      obj.churches.map((church) => {
        if (church.name == data) {
          ch = church;
        }
      })
    );

    console.log(ch.img);
    return (
      <div>
        <div className="ch-name">{ch.name}</div>
        <div className="ch-address">{ch.address}</div>
        <div
          className="church-row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* <div className="church-img">
            <img src={} />
          </div> */}
          {ch.src < 20 ? (
            <div> No map </div>
          ) : (
            <iframe
              src={ch.src}
              className="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* <Map /> */}

      {/* <div style={{ margin: "50px auto" }}>
        <InputLabel id="demo-simple-select-label">UPZ Churches</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label="Data"
          onChange={(e) => setData(e.target.value)}
          style={{ margin: "10px auto", width: "50%" }}
        >
          {Data.map((city) =>
            city.churches.map((church) => (
              <MenuItem key={church.name} value={church.name}>
                <ListSubheader>{city.city}</ListSubheader>
                {church.name}
              </MenuItem>
            ))
          )}
        </Select>
      </div> */}
      <div className="title">
        Храми Закарпатської єпархії Православної Церкви України на Закарпатті.
      </div>

      <div
        className="choose-region"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <InputLabel
            id="demo-simple-select-label"
            style={{ color: "#0044ff" }}
          >
            Оберіть свій район
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Severity"
            className="choose-region"
            onChange={(e) => setRegion(e.target.value)}
          >
            <MenuItem value={"берегівський"}>Берегівський</MenuItem>
            <MenuItem value={"мукачівський"}>Мукачівський</MenuItem>
            <MenuItem value={"рахівський"}>Рахівський</MenuItem>
            <MenuItem value={"тячівський"}>Тячівський</MenuItem>
            <MenuItem value={"ужгородський"}>Ужгородський</MenuItem>
            <MenuItem value={"хустський"}>Хустський</MenuItem>
          </Select>
        </div>
        <div className="img">
          <img
            src="https://varosh.com.ua/wp-content/uploads/2020/11/1604237927.png"
            style={{ maxWidth: "500px" }}
          />
        </div>
      </div>

      <div style={{ margin: "50px auto" }}>
        <InputLabel id="demo-simple-select-label" style={{ color: "#0044ff" }}>
          Оберіть церкву
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label="Data"
          onChange={(e) => setData(e.target.value)}
          style={{ margin: "10px auto", width: "50%" }}
        >
          <MenuItem>Перелік церков</MenuItem>
          {Data.filter((data) => data.region.includes(region)).map((city) =>
            city.churches.map((church) => (
              <MenuItem key={church.name} value={church.name}>
                <ListSubheader>{city.city}</ListSubheader>
                {church.name}
              </MenuItem>
            ))
          )}
        </Select>
      </div>
      {data ? Filter() : <></>}
    </div>
  );
}

export default App;
