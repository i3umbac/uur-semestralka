import React from 'react';
import logo from "../assets/logo.svg"
import print from "../assets/printer.svg"
import signature from "../assets/signature.png"
import stamp from "../assets/stamp.png"

export default function Invoice({customer, issueDate, dueDate, transactions, total, paymentMethod, title}) {
    const priceNoTax = Math.ceil(total / 121 * 100);
    const tax = total - priceNoTax;

    return (
        <>
            <div className="invoice-wrapper">
                <img src={ print } className="icon center print-invoice" alt="print" onClick={() => window.print()} />
                <h4 className="form-header invoice-too-small center">
                    *The invoice is rescaled on this resolution. It will look normal when printed.
                </h4>

                <div id="invoice" className="center">
                    <img id="invoice-logo" className="invoice-right" src={ logo } alt="Logo" />
                    <br className="clear" />
                    <p>
                        Issue date: {issueDate}
                        <br />
                        Due date: {dueDate}
                    </p>
                    <p className="invoice-right">
                        Provider:<br />
                        <b>ShipMint s.r.o.</b><br />
                        Klínovecká 1197,<br />
                        363 01 Ostrov nad Ohří<br />
                        ID No: 40122199<br />
                        VAT No: CZ39444923
                    </p>
                    <p>
                        Customer:<br />
                        <b>{customer}</b><br /><br /><br /><br />
                    </p>
                    <br /><br />
                    <h3 className="center">{title}</h3>
                    <br /><br />
                    <div className="invoice-divider" />
                    <br />

                    <table className="invoice-table">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transactions.map((item, index) => (
                            item.quantity > 0 && (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price} CZK</td>
                                    <td>{item.total} CZK</td>
                                </tr>
                            )
                        ))}
                        </tbody>
                    </table>

                    <br />
                    <div className="invoice-divider" />
                    <br />
                    <div className="invoice-divider" />
                    <br />

                    <p className="invoice-right">
                        Price without VAT: {priceNoTax} CZK<br />
                        VAT 21%: {tax} CZK<br />
                        Total Price: {total} CZK
                    </p>

                    <br /><br /><br /><br />
                    <div className="invoice-divider" />
                    <br />
                    <p className="invoice-right">Payment Method: {paymentMethod === 1 ? 'Card' : 'Cash'}</p>
                    <p>
                        Stamp and Signature: <u>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</u>
                        <img id="invoice-signature" src={ signature } alt="signature" />
                        <img id="invoice-stamp" src={ stamp } alt="stamp" />
                    </p>
                </div>
            </div>
        </>
    );
}
