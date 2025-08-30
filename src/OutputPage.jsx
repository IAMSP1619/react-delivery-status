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
        <Link
          to="/"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "15px",
            textDecoration: "none",
          }}
        >
          O
        </Link>

        {/* Show Text + Notes */}
        <div>
          {fixedOutputs.map((out, i) => (
            <div
              key={i}
              style={{
                marginBottom: "10px",
                whiteSpace: "pre-line",
                wordWrap: "break-word",
                maxWidth: "600px", // ✅ text boxes remain unchanged
              }}
            >
              {out.text && <p>{out.text}</p>}
              {out.note && <p style={{ color: "blue" }}>Note: {out.note}</p>}
            </div>
          ))}
        </div>

        {/* Show Package Table */}
        <table border="1" style={{ borderCollapse: "collapse", width: "90%" }}>
          <thead style={{ backgroundColor: "pink" }}>
            <tr>
              <th>Package</th>
              <th>Version</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.package}</td>
                <td style={{ whiteSpace: "nowrap", padding: "0 20px" }}>
                  {row.version}
                </td>
                <td
                  style={{
                    color: getStatusColor(row.status),
                    fontWeight: "bold",
                  }}
                >
                  {row.status}
                </td>
                {/* ✅ Only Remarks column updated */}
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    maxWidth: "300px",  // increased width
                    wordWrap: "break-word",
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
