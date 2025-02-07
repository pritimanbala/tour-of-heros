
import { useState } from "react";
import { useParams } from "react-router-dom";

const Detail = ({ hashira, change }) => {
  const { id } = useParams();
  const hashiraIndex = parseInt(id) - 1;

  const [text, setText] = useState(
    hashira[hashiraIndex]?.name || ""
  );

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    const updatedHashira = hashira.map((h, index) =>
      index === hashiraIndex ? { ...h, name: text } : h
    );
    change(updatedHashira);
    alert("Name updated successfully!");
  };

  if (hashiraIndex < 0 || hashiraIndex >= hashira.length) {
    return <h2>Hashira not found</h2>;
  }

  return (
    <div className="dtl-div">
      <div key={hashiraIndex}>
        <h2>{hashira[hashiraIndex].name}</h2>
        <p>{hashira[hashiraIndex].title}</p>
        <br />
        <h2>Abilities</h2>
        {hashira[hashiraIndex].abilities.map((ability, index) => (
          <p key={index}>{ability}</p>
        ))}
      </div>

      <div>
        <h2>Change the name of your Hashira:</h2>
        <textarea
          rows="5"
          cols="40"
          value={text}
          onChange={handleChange}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "16px",
          }}
        />
        <br />
        <button
          onClick={handleSave}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Detail;

