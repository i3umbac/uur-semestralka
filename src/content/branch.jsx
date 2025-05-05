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

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
    },
    {
        id: 3,
        name: 'Kavárna U Stromu',
        street: 'Javorová',
        houseNo: '12',
        city: 'Brno',
        postalCode: '60200',
        capacity: 85,
        occupancy: 65.3,
        tax: '10%',
        open: 1,
        owner: 'Lucie Marečková',
        coords: '49°11\'43.2\\"N,16°36\'35.4\\"E',
        opens: 8,
        closes: 20,
        sunday: 1
    },
    {
        id: 4,
        name: 'Sportovní hala Třinec',
        street: 'Sportovní',
        houseNo: '99',
        city: 'Třinec',
        postalCode: '73961',
        capacity: 1500,
        occupancy: 30.5,
        tax: '21%',
        open: 0,
        owner: 'Vladimír Dvořák',
        coords: '49°40\'48.6\\"N,18°40\'59.2\\"E',
        opens: 6,
        closes: 22,
        sunday: 1
    },
    {
        id: 5,
        name: 'Knihkupectví Modrá Luna',
        street: 'Hlavní',
        houseNo: '8',
        city: 'Zlín',
        postalCode: '76001',
        capacity: 120,
        occupancy: 55.0,
        tax: '0%',
        open: 1,
        owner: 'Jana Bílá',
        coords: '49°13\'21.9\\"N,17°39\'59.7\\"E',
        opens: 9,
        closes: 18,
        sunday: 0
    },
    {
        id: 6,
        name: 'Květinářství U Anděla',
        street: 'Nádražní',
        houseNo: '27',
        city: 'Plzeň',
        postalCode: '30100',
        capacity: 60,
        occupancy: 40.8,
        tax: '15%',
        open: 1,
        owner: 'Tereza Fišerová',
        coords: '49°44\'34.5\\"N,13°22\'56.7\\"E',
        opens: 8,
        closes: 19,
        sunday: 1
    },
    {
        id: 7,
        name: 'Fitness centrum Raptor',
        street: 'Zdravotní',
        houseNo: '42',
        city: 'Olomouc',
        postalCode: '77900',
        capacity: 300,
        occupancy: 72.3,
        tax: '21%',
        open: 1,
        owner: 'Milan Krátký',
        coords: '49°35\'47.1\\"N,17°15\'59.4\\"E',
        opens: 5,
        closes: 23,
        sunday: 1
    },
    {
        id: 8,
        name: 'Dětské centrum Sluníčko',
        street: 'Školní',
        houseNo: '10',
        city: 'Třebíč',
        postalCode: '67401',
        capacity: 90,
        occupancy: 88.9,
        tax: '0%',
        open: 0,
        owner: 'Martina Pokorná',
        coords: '49°12\'2.3\\"N,15°52\'59.1\\"E',
        opens: 7,
        closes: 17,
        sunday: 0
    },
    {
        id: 9,
        name: 'Galerie Moderního Umění',
        street: 'Galerijní',
        houseNo: '2',
        city: 'Hradec Králové',
        postalCode: '50003',
        capacity: 250,
        occupancy: 11.4,
        tax: '5%',
        open: 0,
        owner: 'Šárka Novotná',
        coords: '50°12\'33.2\\"N,15°50\'42.3\\"E',
        opens: 10,
        closes: 18,
        sunday: 1
    }
];

function Row(props) {
    const { row, onSave, onDelete } = props;
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({ ...row });
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const handleChange = (field) => (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData(prev => ({
            ...prev,
            [field]: typeof row[field] === 'number' && !isNaN(value) ? +value : value
        }));
    };

    const handleSave = () => {
        onSave(formData);
        setOpen(false);
    };

    const handleDeleteConfirmation = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = (confirmed) => {
        if (confirmed) {
            onDelete(row.id);
        }
        setDialogOpen(false);
    };

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell>{row.street} {row.houseNo}, {row.postalCode} {row.city}</TableCell>
                <TableCell>{row.capacity}</TableCell>
                <TableCell>{row.occupancy}%</TableCell>
                <TableCell>{row.open === 1 ? 'Yes' : 'No'}</TableCell>
                <TableCell>{row.owner}</TableCell>
                <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}><EditIcon /></IconButton>
                </TableCell>
                <TableCell>
                    <IconButton size="small" onClick={handleDeleteConfirmation}><DeleteIcon /></IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={8} style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, margin: 1 }}>
                            <Box component="img" src="../assets/map.png" alt="Tady by měla být mapa"
                                 sx={{
                                     width: 350, height: 350, objectFit: 'cover',
                                     borderRadius: 1, border: '1px solid #ccc'
                                 }} />
                            <Box>
                                <Box sx={{ m: 1 }}>
                                    <TextField sx={{ mr: 5, width: '30ch' }} label="Name" variant="standard" value={formData.name} onChange={handleChange('name')} />
                                    <TextField sx={{ mr: 5, width: '30ch' }} label="Street" variant="standard" value={formData.street} onChange={handleChange('street')} />
                                </Box>
                                <Box sx={{ m: 1 }}>
                                    <TextField sx={{ mr: 5, width: '30ch' }} label="Owner" variant="standard" value={formData.owner} onChange={handleChange('owner')} />
                                    <TextField sx={{ mr: 5, width: '30ch' }} label="House No." variant="standard" value={formData.houseNo} onChange={handleChange('houseNo')} />
                                </Box>
                                <Box sx={{ m: 1 }}>
                                    <TextField sx={{ mr: 5, width: '30ch' }} label="Capacity" variant="standard" value={formData.capacity} onChange={handleChange('capacity')} />
                                    <TextField sx={{ mr: 5, width: '30ch' }} label="City" variant="standard" value={formData.city} onChange={handleChange('city')} />
                                </Box>
                                <Box sx={{ m: 1 }}>
                                    <TextField sx={{ mr: 5, width: '30ch' }} label="Coordinates" variant="standard" value={formData.coords} onChange={handleChange('coords')} />
                                    <TextField sx={{ mr: 5, width: '30ch' }} label="Postal Code" variant="standard" value={formData.postalCode} onChange={handleChange('postalCode')} />
                                </Box>
                                <Box sx={{ m: 1 }}>
                                    <TextField sx={{ mr: 4, width: '13ch' }} label="Opens" variant="standard" value={formData.opens} onChange={handleChange('opens')} />
                                    <TextField sx={{ mr: 3, width: '13ch' }} label="Closes" variant="standard" value={formData.closes} onChange={handleChange('closes')} />
                                    <FormControlLabel
                                        control={<Switch color="primary" checked={formData.open === 1} onChange={() => setFormData(prev => ({ ...prev, open: prev.open === 1 ? 0 : 1 }))} />}
                                        label="Open"
                                        labelPlacement="top"
                                    />
                                    <FormControlLabel
                                        control={<Switch color="primary" checked={formData.sunday === 1} onChange={() => setFormData(prev => ({ ...prev, sunday: prev.sunday === 1 ? 0 : 1 }))} />}
                                        label="Sundays"
                                        labelPlacement="top"
                                    />
                                </Box>
                                <Button sx={{ height: '36px', padding: 2, width: '20ch', ml: 1 }} variant="outlined" size="small" onClick={handleSave}>
                                    Save changes
                                </Button>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            {/* Delete Confirmation Dialog */}
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this branch?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleDialogClose(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleDialogClose(true)} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        houseNo: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        postalCode: PropTypes.string.isRequired,
        capacity: PropTypes.number.isRequired,
        occupancy: PropTypes.number.isRequired,
        open: PropTypes.number.isRequired,
        owner: PropTypes.string.isRequired,
        coords: PropTypes.string.isRequired,
        opens: PropTypes.number.isRequired,
        closes: PropTypes.number.isRequired,
        sunday: PropTypes.number.isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default function Branch() {
    const [rowsState, setRowsState] = React.useState(rows);

    const handleSave = (updatedRow) => {
        setRowsState(prev =>
            prev.map(row => (row.id === updatedRow.id ? updatedRow : row))
        );
    };

    const handleDelete = (idToDelete) => {
        setRowsState(prev => prev.filter(row => row.id !== idToDelete));
    };

    return (
        <>
            <h1>Branches</h1>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead sx={{ borderBottom: '2px solid black' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                            <TableCell colSpan={2} sx={{ fontWeight: 'bold' }}>Capacity</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Open</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Owner</TableCell>
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsState.map((row) => (
                            <Row
                                key={row.id}
                                row={row}
                                onSave={handleSave}
                                onDelete={handleDelete}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
