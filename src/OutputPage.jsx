import React from "react";
import { Link } from "react-router-dom";

const OutputPage = ({ rows, fixedOutputs, selectedDate }) => {
  const getStatusColor = (status) => {
    if (status.toLowerCase() === "delivered") return "green";
    if (status.toLowerCase() === "ready for delivery") return "orange";
    if (status.toLowerCase() === "pending") return "red";
    return "blue";
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleString("en-US", options).replace(",", "");
  };

  return (
    <>
      <div style={{ padding: 20, position: "relative", minHeight: "100vh" }}>
        {/* Top-right Date-Time */}
        {selectedDate && (
          <div
            style={{
              position: "fixed",
              top: "10px",
              right: "10px",
              fontSize: 14,
              fontWeight: "bold",
              padding: "6px 12px ",
            }}
          >
            {formatDate(selectedDate)}
          </div>
        )}

        {/* Back Link */}
        <Link to="/"style={{position: "fixed",bottom: "25px",right: "15px",textDecoration: "none",}}>O</Link>

        {/* Show Text + Notes (full width) */}
        <div>
          {fixedOutputs.map((out, i) => (
            <div
              key={i}
              style={{
                marginBottom: "10px",
                whiteSpace: "pre-line",
                wordWrap: "break-word",
                width: "100%", // Full width
              }}
            >
              {out.text && <p>{out.text}</p>}
              {out.note && (
                <p style={{color:"black"}}>
                    <span style={{fontWeight:"bold"}}>Note: </span>{out.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Show Package Table */}
        <table border="1" style={{ borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "pink" }}>
            <tr>
              <th style={{ padding: "4px 10px" }}>Package</th>
              <th style={{ padding: "4px 10px" }}>Version</th>
              <th style={{ padding: "4px 10px" }}>Status</th>
              <th style={{ width: "300px" }}>Remarks</th> {/* Fixed width */}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td style={{ padding: "4px 10px" }}>{row.package}</td>
                <td style={{ whiteSpace: "nowrap", padding: "4px 10px" }}>
                  {row.version}
                </td>
                <td
                  style={{
                    color: getStatusColor(row.status),
                    fontWeight: "bold",
                    padding: "4px 10px",
                  }}
                >
                  {row.status}
                </td>
                {/* Remarks column locked at 300px */}
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    width: "300px",
                  }}
                >
                  {row.remarks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Extra text1 Output */}
      <div>
        {fixedOutputs.map(
          (out, i) =>
            out.text1 && (
              <div
                key={i}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
                {out.text1}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default OutputPage;
