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
    {
        customerName: 'Anna Králová',
        issueDate: '06. 05. 2025',
        dueDate: '13. 05. 2025',
        paymentMethod: 3,
        s: 2,
        m: 4,
        l: 0,
        customerAddress: {
            street: 'Dlouhá',
            houseNo: '10',
            postalCode: '36001',
            city: 'Karlovy Vary',
        },
    },
    {
        customerName: 'Petr Němec',
        issueDate: '07. 05. 2025',
        dueDate: '14. 05. 2025',
        paymentMethod: 1,
        s: 1,
        m: 1,
        l: 1,
        customerAddress: {
            street: 'Horní',
            houseNo: '44',
            postalCode: '11000',
            city: 'Praha',
        },
    },
    {
        customerName: 'Jitka Malá',
        issueDate: '08. 05. 2025',
        dueDate: '18. 05. 2025',
        paymentMethod: 2,
        s: 4,
        m: 2,
        l: 2,
        customerAddress: {
            street: 'Polní',
            houseNo: '7',
            postalCode: '77900',
            city: 'Olomouc',
        },
    },
    {
        customerName: 'Roman Vacek',
        issueDate: '09. 05. 2025',
        dueDate: '19. 05. 2025',
        paymentMethod: 3,
        s: 0,
        m: 5,
        l: 4,
        customerAddress: {
            street: 'Lesní',
            houseNo: '3',
            postalCode: '33011',
            city: 'Třemošná',
        },
    },
    {
        customerName: 'Barbora Sládková',
        issueDate: '10. 05. 2025',
        dueDate: '20. 05. 2025',
        paymentMethod: 2,
        s: 3,
        m: 1,
        l: 2,
        customerAddress: {
            street: 'Sadová',
            houseNo: '22',
            postalCode: '60200',
            city: 'Brno',
        },
    },
    {
        customerName: 'Jakub Horák',
        issueDate: '11. 05. 2025',
        dueDate: '21. 05. 2025',
        paymentMethod: 1,
        s: 2,
        m: 2,
        l: 2,
        customerAddress: {
            street: 'U rybníka',
            houseNo: '15',
            postalCode: '53002',
            city: 'Pardubice',
        },
    },
    {
        customerName: 'Kristýna Dušková',
        issueDate: '12. 05. 2025',
        dueDate: '22. 05. 2025',
        paymentMethod: 3,
        s: 1,
        m: 0,
        l: 4,
        customerAddress: {
            street: 'Na Výsluní',
            houseNo: '5',
            postalCode: '46001',
            city: 'Liberec',
        },
    },
    {
        customerName: 'Tomáš Urban',
        issueDate: '13. 05. 2025',
        dueDate: '23. 05. 2025',
        paymentMethod: 2,
        s: 5,
        m: 3,
        l: 1,
        customerAddress: {
            street: 'Pivovarská',
            houseNo: '8',
            postalCode: '30100',
            city: 'Plzeň',
        },
    },
    {
        customerName: 'Veronika Holá',
        issueDate: '14. 05. 2025',
        dueDate: '24. 05. 2025',
        paymentMethod: 1,
        s: 0,
        m: 0,
        l: 3,
        customerAddress: {
            street: 'Tyršova',
            houseNo: '11',
            postalCode: '10000',
            city: 'Praha',
        },
    },
    {
        customerName: 'Martin Zeman',
        issueDate: '15. 05. 2025',
        dueDate: '25. 05. 2025',
        paymentMethod: 3,
        s: 4,
        m: 4,
        l: 4,
        customerAddress: {
            street: 'Revoluční',
            houseNo: '9',
            postalCode: '58601',
            city: 'Jihlava',
        },
    },
    {
        customerName: 'Simona Křížová',
        issueDate: '16. 05. 2025',
        dueDate: '26. 05. 2025',
        paymentMethod: 2,
        s: 3,
        m: 5,
        l: 0,
        customerAddress: {
            street: 'Jabloňová',
            houseNo: '2',
            postalCode: '25001',
            city: 'Brandýs nad Labem',
        },
    },
    {
        customerName: 'Daniel Marek',
        issueDate: '17. 05. 2025',
        dueDate: '27. 05. 2025',
        paymentMethod: 1,
        s: 1,
        m: 1,
        l: 1,
        customerAddress: {
            street: 'U školky',
            houseNo: '17',
            postalCode: '29301',
            city: 'Mladá Boleslav',
        },
    },
    {
        customerName: 'Alena Růžičková',
        issueDate: '18. 05. 2025',
        dueDate: '28. 05. 2025',
        paymentMethod: 3,
        s: 2,
        m: 2,
        l: 6,
        customerAddress: {
            street: 'Nová',
            houseNo: '23',
            postalCode: '50003',
            city: 'Hradec Králové',
        },
    },
    {
        customerName: 'Ondřej Mach',
        issueDate: '19. 05. 2025',
        dueDate: '29. 05. 2025',
        paymentMethod: 2,
        s: 3,
        m: 3,
        l: 3,
        customerAddress: {
            street: 'Stará cesta',
            houseNo: '6',
            postalCode: '40001',
            city: 'Ústí nad Labem',
        },
    },
    {
        customerName: 'Renata Čechová',
        issueDate: '20. 05. 2025',
        dueDate: '30. 05. 2025',
        paymentMethod: 1,
        s: 0,
        m: 0,
        l: 0,
        customerAddress: {
            street: 'Růžová',
            houseNo: '8',
            postalCode: '39002',
            city: 'Tábor',
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
