import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./Invoice";
import moment from "moment";

const Invoice = ({ data }) => {
  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "800px" }}>
        <InvoicePDF data={data} />
      </PDFViewer>
    </div>
  );
};

export default Invoice;
