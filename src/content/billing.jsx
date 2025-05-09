import Invoice from '../components/invoice.jsx';
import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { billingData } from "../components/mockData.jsx";
const testData = billingData;

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
