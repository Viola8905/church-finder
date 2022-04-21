import { useRef } from "react";

import {
  Typography,
  Select,
  MenuItem,
  ListSubheader,
  InputLabel,
  FormControl,
  Paper,
  Card,
} from "@mui/material";
import Data from "./Data/Data";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [region, setRegion] = useState("");

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
        <span className="ch-name">{ch.name}</span>

        <div className="ch-address">{ch.address}</div>
        <div
          className="church-row"
          style={{ display: "flex", justifyContent: "center" }}
        >
         
          {ch.src < 20 ? (
            <div> Немає позначки на карті </div>
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
    <div className="wrapper">
      <div className="App">
        <div className="div">
          <div
            className="title"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://art-shop.com.ua/wp-content/uploads/2017/06/prapor-Ukrayini-PNG.png"
             
              className="flag1"
            />
            Храми Закарпатської єпархії Православної Церкви України
            <img
              src="https://art-shop.com.ua/wp-content/uploads/2017/06/prapor-Ukrayini-PNG.png"
             
              className="flag2"
            />
          </div>
        </div>
        <div
          style={{
            marginInline: "auto",
            padding: "20px 7px ",
            height: "100%",

            backgroundColor: "white",
            marginBottom: "10px",
          }}
        >
          <div style={{ padding: "15PX 0", fontWeight: "700" }}>
            Дані взято з сайту
            <a
              href="http://www.cerkva.uz.ua/2022/04/blog-post_11.html"
              style={{ color: "blue", marginLeft: "3px" }}
            >
              Закарпатської Єпархії
            </a>
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
                style={{ color: "#0044ff", minWidth: "100px" }}
              >
                Оберіть свій район
              </InputLabel>
              <Select
                sx={{ minWidth: "fit-content", minWidth: "200px" }}
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
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "#0044ff" }}
            >
              Оберіть церкву
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data}
              label="Data"
              onChange={(e) => {
                setData(e.target.value);
              }}
              style={{ margin: "10px auto", width: "200px" }}
            >
              <MenuItem>Перелік церков</MenuItem>
              {Data.filter((data) => data.region.includes(region)).map((city) =>
                city.churches.map((church) => (
                  <MenuItem
                    href="#mapItem"
                    key={church.name}
                    value={church.name}
                  >
                    <ListSubheader>{city.city}</ListSubheader>
                    <a
                      style={{
                        textDecoration: "none",
                        color: "black",
                        padding: "10px",
                      }}
                      href="#mapItem"
                    >
                      {church.name}
                    </a>
                  </MenuItem>
                ))
              )}
            </Select>
          </div>
          {data ? Filter() : <></>}
        </div>
        <div className="" style={{ padding: "5px 0" }}>
          © Vio{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
