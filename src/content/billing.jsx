import Invoice from '../components/invoice.jsx';

import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const testData = [
    {
        customerName: 'Jan Novák',
        issueDate: '01. 05. 2025',
        dueDate: '10. 05. 2025',
        paymentMethod: 1,
        s: 2,
        m: 4,
        l: 2,
        customerAddress: {
            street: 'Zámecká',
            houseNo: '2',
            postalCode: '12345',
            city: 'Mrtník',
        },
    },
    {
        customerName: 'Petra Dvořáková (testovací, schválně má neplatnou adresu)',
        issueDate: '02. 05. 2025',
        dueDate: '12. 05. 2025',
        paymentMethod: 2,
        s: 1,
        m: 3,
        l: 5,
        customerAddress: 'pes',
    },
    {
        customerName: 'Karel Hrubý',
        issueDate: '03. 05. 2025',
        dueDate: '15. 05. 2025',
        paymentMethod: 3,
        s: 0,
        m: 2,
        l: 7,
        customerAddress: {
            street: 'Nádražní',
            houseNo: '99',
            postalCode: '10000',
            city: 'Praha',
        },
    },
    {
        customerName: 'Lucie Benešová',
        issueDate: '04. 05. 2025',
        dueDate: '09. 05. 2025',
        paymentMethod: 1,
        s: 5,
        m: 0,
        l: 1,
        customerAddress: {
            street: 'Hlavní',
            houseNo: '1',
            postalCode: '67555',
            city: 'Třebíč',
        },
    },
    {
        customerName: 'Milan Svoboda',
        issueDate: '05. 05. 2025',
        dueDate: '11. 05. 2025',
        paymentMethod: 2,
        s: 3,
        m: 3,
        l: 3,
        customerAddress: {
            street: 'Komenského',
            houseNo: '6',
            postalCode: '46825',
            city: 'Liberec',
        },
    },
];

export default function Billing() {
    const [expanded, setExpanded] = useState(null); // index nebo null

    const handleChange = (panelIndex) => (event, isExpanded) => {
        setExpanded(isExpanded ? panelIndex : null);
    };

    return (
        <div>
            <Accordion disabled className={"invoice-ui"}>
                <AccordionSummary aria-controls="panel-disabled-content" id="panel-disabled-header">
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography component="span">Transaction from:</Typography>
                        <Typography component="span">By customer:</Typography>
                    </div>
                </AccordionSummary>
            </Accordion>

            {testData.map((data, index) => (
                <Accordion
                    className={"invoice-border"}
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                >
                    <AccordionSummary  className={"invoice-ui"}
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography component="span">{data.issueDate}</Typography>
                            <Typography component="span">{data.customerName}</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Invoice
                            customer={data.customerName}
                            issueDate={data.issueDate}
                            dueDate={data.dueDate}
                            paymentMethod={data.paymentMethod}
                            customerAddress={data.customerAddress}
                            s={data.s}
                            m={data.m}
                            l={data.l}
                        />
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
