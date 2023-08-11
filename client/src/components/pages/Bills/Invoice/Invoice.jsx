import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import moment from "moment";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    maxWidth: 400,
    margin: "0 auto",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 5,
    marginBottom: 10,
  },
  billTo: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 5,
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
    alignItems: "center", // Align items vertically in the row
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    marginVertical: 5,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  paymentSignatureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const InvoicePDF = ({ data }) => {
  return (
    <Document>
      <Page size="A5" style={styles.container}>
        <Text style={styles.title}>ShopEase</Text>
        <View style={styles.header}>
          <View>
            <Text style={{ fontSize: 10 }}>INVOICE</Text>
            <Text style={{ fontSize: 10 }}>
              {`Date: ${moment(data.Date).format("DD/MM/YYYY")}`}
            </Text>
            <Text style={{ fontSize: 10 }}>
              {`Invoice: ${Math.round(data.InvoiceNumber / 100000)}`}
            </Text>
          </View>
          <View style={styles.billTo}>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>Bill To:</Text>
            <Text style={{ fontSize: 12 }}>{data.CoustomerName}</Text>
          </View>
        </View>
        <View style={styles.tableHeader}>
          <Text style={{ fontSize: 12 }}>Products</Text>
          <Text style={{ fontSize: 12 }}>QTY</Text>
          <Text style={{ fontSize: 12 }}>Price</Text>
          <Text style={{ fontSize: 12 }}>Total</Text>
        </View>
        {data.Products.map((item) => (
          <View style={styles.tableRow} key={item._id}>
            <Text style={{ fontSize: 12 }}>{item.ProductName}</Text>
            <Text style={{ fontSize: 12 }}>{item.Qty}</Text> {/* Quantity */}
            <Text style={{ fontSize: 12 }}>{item.Price}</Text>
            <Text style={{ fontSize: 12 }}>{item.Price * item.Qty}</Text>
          </View>
        ))}
        <View style={styles.divider} /> {/* Divider after products */}
        <View style={styles.subtotalContainer}>
          <View style={styles.totalRow}>
            <Text style={{ fontSize: 12 }}>Subtotal:</Text>
            <Text style={{ fontSize: 12 }}>{data.SubTotal}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={{ fontSize: 12 }}>GrandTotal:</Text>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>
              {data.GrandTotal}
            </Text>
          </View>
        </View>
        <View style={styles.paymentSignatureContainer}>
          <Text
            style={{ fontSize: 12 }}
          >{`Payment Method: ${data.PaymentMethod}`}</Text>
          <Text style={{ fontSize: 12 }}>Signature</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
