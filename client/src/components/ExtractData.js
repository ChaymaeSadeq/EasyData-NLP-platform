import React from "react";
import FileUpload from "./FileUpload";

function ExtractData() {
  const [data, setData] = React.useState({});
  const [display, setDisplay] = React.useState("");

  React.useEffect(() => {
    if (data.data) {
      let temp = "";
      for (let item in data.data) {
        temp += `\n${item} : `;
        data.data[item].forEach((element) => {
          temp += `${element}  `;
        });
      }
      setDisplay(temp);
    }

    //  for i in set(d.keys()):

    //      f.write("\n\n")
    //      f.write(i + ":"+"\n")
    //      for j in set(d[i]):
    //          f.write(j.replace('\n', '')+"\n")
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        width: "65%",
        margin: "2rem auto",
      }}
    >
      <FileUpload data={setData}></FileUpload>
      <div style={{ background: "#CCC", width: "100%" }}>
        <h1>Here you see the result :</h1>
        {display.split("\n").map((value) => {
          return <p>{value}</p>;
        })}
      </div>
    </div>
  );
}

ExtractData.propTypes = {};

export default ExtractData;
