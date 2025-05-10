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
    // state to track the currently expanded accordion panel
    const [expanded, setExpanded] = useState(null); // index of the expanded panel or null

    // function to handle changing the expanded panel
    const handleChange = (panelIndex) => (event, isExpanded) => {
        // update expanded panel state or set it to null if the panel is collapsed
        setExpanded(isExpanded ? panelIndex : null);
    };

    return (
        <div>
            {/* disabled Accordion as a static header */}
            <Accordion disabled className={"invoice-ui"}>
                <AccordionSummary aria-controls="panel-disabled-content" id="panel-disabled-header">
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography component="span">Transaction from:</Typography>
                        <Typography component="span">By customer:</Typography>
                    </div>
                </AccordionSummary>
            </Accordion>

            {/* map through testData to render each accordion panel */}
            {testData.map((data, index) => (
                <Accordion
                    className={"invoice-border"}
                    key={index}
                    expanded={expanded === index}  // check if current panel is expanded
                    onChange={handleChange(index)}  // handle expansion on change
                >
                    <AccordionSummary
                        className={"invoice-ui"}
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography component="span">{data.issueDate}</Typography>  {/* display issue date */}
                            <Typography component="span">{data.customerName}</Typography>  {/* display customer name */}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* passing data to Invoice component */}
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
