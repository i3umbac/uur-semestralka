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

import TextField from '@mui/material/TextField';


import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Button from '@mui/material/Button';


const rows = [
    {
        id: 0,
        name: 'Restaruace u Čápa',
        street: 'Sídliště',
        houseNo: '4',
        city: 'Toužim',
        postalCode: '36401',
        capacity: 200,
        occupancy: 17.2,
        tax: '0%',
        open: 1,
        owner: 'Jakub Verner',
        coords: '50°3\'34.192\\"N,12°59\'4.462\\"E',
        opens: 7,
        closes: 14,
        sunday: 1
    },
    {
        id: 1,
        name: 'Nákupní středisko Petry Smutné',
        street: 'Vepřová',
        houseNo: '32',
        city: 'Huzová',
        postalCode: '79351',
        capacity: 2000,
        occupancy: 26.4,
        tax: '0%',
        open: 0,
        owner: 'Petra Smutná',
        coords: '49°49\'17.041\\"N,17°17\'53.068\\"E',
        opens: 6,
        closes: 21,
        sunday: 0
    },
    {
        id: 2,
        name: 'Hudební středisko HLAS',
        street: 'Kostelní',
        houseNo: '56',
        city: 'Stanovice',
        postalCode: '36432',
        capacity: 5000,
        occupancy: 2.7,
        tax: '5%',
        open: 1,
        owner: 'Karel Rachot',
        coords: '50°9\'57.066\\"N,12°52\'24.165\\"E',
        opens: 9,
        closes: 17,
        sunday: 1
    }
];

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell >{row.street} {row.houseNo}, {row.postalCode} {row.city}</TableCell>
                <TableCell >{row.capacity}</TableCell>
                <TableCell >{row.occupancy}%</TableCell>
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
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, margin: 1 }}>
                            <Box
                                component="img"
                                src="../assets/map.png"
                                alt="Tady by měla být mapa"
                                sx={{
                                    width: 350,
                                    height: 350,
                                    objectFit: 'cover',
                                    borderRadius: 1,
                                    border: '1px solid #ccc'
                                }}
                            />

                            <Box>
                                <Box sx={{ margin: 1 }}>
                                    <TextField sx={{ mr: 5, width: '30ch' }} id="standard-basic" label="Name" variant="standard" defaultValue={row.name} />
                                    <TextField sx={{ mr: 5, width: '30ch' }}id="standard-basic" label="Street" variant="standard" defaultValue={row.street} />
                                </Box>
                                <Box sx={{ margin: 1 }}>
                                    <TextField sx={{ mr: 5, width: '30ch' }} id="standard-basic" label="Owner" variant="standard" defaultValue={row.owner} />
                                    <TextField sx={{ mr: 5, width: '30ch' }} id="standard-basic" label="House No." variant="standard" defaultValue={row.houseNo} />
                                </Box>
                                <Box sx={{ margin: 1 }}>
                                    <TextField sx={{ mr: 5, width: '30ch' }} id="standard-basic" label="Capacity" variant="standard" defaultValue={row.capacity} />
                                    <TextField sx={{ mr: 5, width: '30ch' }} id="standard-basic" label="City" variant="standard" defaultValue={row.city} />
                                </Box>
                                <Box sx={{ margin: 1 }}>
                                    <TextField sx={{ mr: 5, width: '30ch' }} id="standard-basic" label="Coordinates" variant="standard" defaultValue={row.coords}/>
                                    <TextField sx={{ mr: 5, width: '30ch' }} id="standard-basic" label="Postal code" variant="standard" defaultValue={row.postalCode} />
                                </Box>
                                <Box sx={{ margin: 1 }}>
                                    <TextField sx={{ mr: 4, width: '13ch' }} id="standard-basic" label="Opens" variant="standard" defaultValue={row.opens}/>
                                    <TextField sx={{ mr: 3, width: '13ch' }} id="standard-basic" label="Closes" variant="standard" defaultValue={row.closes}/>

                                    <FormControlLabel
                                        value="open"
                                        control={<Switch color="primary" checked={row.open === 1} />}
                                        label="Open"
                                        labelPlacement="top"
                                    />

                                    <FormControlLabel
                                        value="sunday"
                                        control={<Switch color="primary" checked={row.sunday === 0} />}
                                        label="Sundays"
                                        labelPlacement="top"
                                    />

                                </Box>
                                <Button sx={{ height: '36px', padding: 2, width: '20ch', ml: 1 }} variant="outlined" size="small">Save changes</Button>
                            </Box>
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



export default function Branch() {
    return (
        <>
        <h1>Branches</h1>
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
