
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputPage = ({ setRows, setFixedOutputs, setSelectedDate }) => {
  const [form, setForm] = useState({
    package: "",
    version: "",
    status: "",
    remarks: "",
  });
  const [text, setText] = useState("");
  const [note, setNote] = useState("");
  const [datetime, setDatetime] = useState("");
  const navigate = useNavigate();
  const [text1, setText1] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.package || !form.version || !form.status) return;
    setRows((prev) => [...prev, form]);
    setForm({ package: "", version: "", status: "", remarks: "" });
  };

  const handleFix = () => {
    if (text.trim() !== "" || note.trim() !== "" || text1.trim() !== "") {
      setFixedOutputs((prev) => [...prev, { text, note, text1 }]);
      setText("");
      setNote("");
      setText1("");
    }
  };

  const handleGoToOutput = () => {
    if (datetime) setSelectedDate(datetime);
    navigate("/output");
  };

  return (
    <div id="inputpage">
      <div style={{ padding: 20 }}>
        <h2>Inputs Page</h2>

        {/* Date & time */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "orange" }}>Date & Time: </label>
          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </div>

        {/* Text & Note inputs */}
        <div>
          <textarea
            placeholder="Type something"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={2}
            style={{ width: "300px" }}
          />
          <br />
          <br />
          <textarea
            placeholder="Type Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            style={{ width: "300px" }}
          />
          <br />
          <br />
          <button onClick={handleFix} style={{ backgroundColor: "yellow" }}>
            Submit Input
          </button>
        </div>
        <br />

        {/* Package Form in one line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <input
            type="text"
            name="package"
            placeholder="Package Name"
            value={form.package}
            onChange={handleChange}
          />
          <input
            type="text"
            name="version"
            placeholder="Version"
            value={form.version}
            onChange={handleChange}
          />
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="Delivered">Delivered</option>
            <option value="Ready for Delivery">Ready for Delivery</option>
            <option value="Pending">Pending</option>
          </select>
          {/* ✅ Remarks inline */}
          <textarea
            name="remarks"
            placeholder="Remarks"
            value={form.remarks}
            onChange={handleChange}
            rows={2}
            style={{ width: "200px" }}
          />
          <button onClick={handleSubmit} style={{ backgroundColor: "yellow" }}>
            Add
          </button>
        </div>

        {/* Extra text1 input */}
        <textarea
          placeholder="Type something"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          rows={2}
          style={{ width: "300px", marginTop: "15px" }}
        />
        <br />

        <button
          onClick={handleGoToOutput}
          style={{ backgroundColor: "yellow", marginTop: "10px" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputPage;
