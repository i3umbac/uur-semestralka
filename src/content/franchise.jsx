import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function createData(name, address, capacity, occupancy, open, owner) {
    return {
        name,
        address,
        capacity,
        occupancy,
        open,
        owner,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell >{row.address}</TableCell>
                <TableCell >{row.capacity}</TableCell>
                <TableCell >{row.occupancy}</TableCell>
                <TableCell >{row.open}</TableCell>
                <TableCell >{row.owner}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        < EditIcon />
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        < DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData('Restaruace u Čápa', 'Sídliště 4, 36401 Toužim', 200, '0%' , 'Yes', 'Jakub Verner'),
    createData('Nákupní středisko Petry Smutné', 'Vepřová 32, 79351 Huzová', 2000, '0%', 'No (until 07. 05. 2024 )' , 'Petra Smutná'),
    createData('Hudební středisko HLAS', 'Kostelní 53, 36432 Stanovice', 5000, '5%', 'Yes', 'Karel Rachot'),
];

export default function Franchise() {
    return (
        <>
        <h1>Franchises</h1>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead sx={{ borderBottom: '2px solid black' }}>
                    <TableRow >
                        <TableCell sx={{fontWeight: 'bold' }}>Name</TableCell>
                        <TableCell sx={{fontWeight: 'bold' }}>Address</TableCell>
                        <TableCell colSpan={2} sx={{fontWeight: 'bold' }}>Capacity</TableCell>
                        <TableCell sx={{fontWeight: 'bold' }}>Open</TableCell>
                        <TableCell sx={{fontWeight: 'bold' }}>Owner</TableCell>
                        <TableCell />
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}
