import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
import Typography from '@mui/material/Typography';
import { branches } from "../components/mockData.jsx"
const rows = branches.filter(branch => branch.warehouse === 0);

function Row(props) {
    const { row, onSave, onDelete } = props;

    // state for controlling row collapse
    const [open, setOpen] = React.useState(false);

    // state for holding form data, initialized from the row props
    const [formData, setFormData] = React.useState({ ...row });

    // state for delete confirmation dialog visibility
    const [dialogOpen, setDialogOpen] = React.useState(false);

    // handles input changes and updates form data accordingly
    const handleChange = (field) => (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData(prev => ({
            ...prev,
            [field]: typeof row[field] === 'number' && !isNaN(value) ? +value : value
        }));
    };

    // saves the edited form data and closes the collapse section
    const handleSave = () => {
        onSave(formData);
        setOpen(false);
    };

    // opens the delete confirmation dialog
    const handleDeleteConfirmation = () => {
        setDialogOpen(true);
    };

    // closes the dialog and deletes the row if confirmed
    const handleDialogClose = (confirmed) => {
        if (confirmed) {
            onDelete(row.id);
        }
        setDialogOpen(false);
    };

    // validates the form input before allowing save
    const isFormValid = () => {
        const {
            name,
            street,
            houseNo,
            capacity,
            city,
            postalCode,
            opens,
            closes
        } = formData;

        return (
            name.length <= 40 &&
            street.length <= 40 &&
            houseNo.length <= 40 &&
            city.length <= 40 &&
            capacity !== '' &&
            !isNaN(capacity) &&
            +capacity >= 0 &&
            capacity.toString().length <= 5 &&
            postalCode !== '' &&
            !isNaN(postalCode) &&
            +postalCode >= 10000 &&
            +postalCode <= 99999 &&
            !isNaN(opens) &&
            +opens >= 0 &&
            +opens <= 23 &&
            !isNaN(closes) &&
            +closes >= 0 &&
            +closes <= 23
        );
    };

    return (
        <>
            {/* main row displaying basic branch info */}
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell sx={{ minWidth: 0, width: 'auto' }}>{row.street} {row.houseNo}, {row.postalCode} {row.city}</TableCell>
                <TableCell sx={{ minWidth: 0, width: 'auto'}}>{row.capacity}</TableCell>
                <TableCell sx={{ minWidth: 0, width: 'auto' }}>{row.occupancy}%</TableCell>
                <TableCell sx={{ minWidth: 0, width: 'auto' }}>{row.open === 1 ? 'Yes' : 'No'}</TableCell>
                <TableCell sx={{ minWidth: 0, width: 'auto' }}>{row.owner}</TableCell>
                <TableCell sx={{ minWidth: 0, width: 'auto' }}>
                    <IconButton size="small" onClick={() => setOpen(!open)}><EditIcon /></IconButton>
                </TableCell>
                <TableCell sx={{ minWidth: 0, width: 'auto' }}>
                    <IconButton size="small" onClick={handleDeleteConfirmation}><DeleteIcon /></IconButton>
                </TableCell>
            </TableRow>

            {/* collapsible section with the editable form */}
            <TableRow>
                <TableCell colSpan={8} style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, margin: 1 }}>
                            {/* map image placeholder */}
                            <Box
                                component="img"
                                src="../assets/map.png"
                                alt="Tady by měla být mapa"
                                sx={{
                                    width: 350,
                                    height: 350,
                                    objectFit: 'cover',
                                    borderRadius: 1,
                                    border: '1px solid #ccc',
                                }}
                            />
                            {/* form fields section */}
                            <Box>
                                <Box sx={{ m: 1 }}>
                                    {/* name input */}
                                    <TextField
                                        sx={{ mr: 5, width: '30ch' }}
                                        label="Name"
                                        variant="standard"
                                        value={formData.name}
                                        onChange={handleChange('name')}
                                        inputProps={{ maxLength: 40 }}
                                        helperText={
                                            formData.name.length >= 40 ? 'Max name length: 40' : ''
                                        }
                                        FormHelperTextProps={{
                                            sx: {
                                                color: 'error.main',
                                                minHeight: '1.5em',
                                            },
                                        }}
                                    />
                                    {/* street input */}
                                    <TextField
                                        sx={{ mr: 5, width: '30ch' }}
                                        label="Street"
                                        variant="standard"
                                        value={formData.street}
                                        onChange={handleChange('street')}
                                        inputProps={{ maxLength: 40 }}
                                        helperText={
                                            formData.street.length >= 40 ? 'Max name length: 40' : ''
                                        }
                                        FormHelperTextProps={{
                                            sx: {
                                                color: 'error.main',
                                                minHeight: '1.5em',
                                            },
                                        }}
                                    />
                                </Box>

                                {/* owner name display (read-only) */}
                                <Box sx={{ m: 1 }}>
                                    <TextField
                                        sx={{ mr: 5, width: '30ch' }}
                                        label="Owner"
                                        variant="standard"
                                        value={formData.owner}
                                        disabled
                                    />
                                    <TextField
                                        sx={{ mr: 5, width: '30ch' }}
                                        label="House No."
                                        variant="standard"
                                        value={formData.houseNo}
                                        onChange={handleChange('houseNo')}
                                        inputProps={{ maxLength: 40 }}
                                        helperText={
                                            formData.houseNo.length >= 40 ? 'Max name length: 40' : ''
                                        }
                                        FormHelperTextProps={{
                                            sx: {
                                                color: 'error.main',
                                                minHeight: '1.5em',
                                            },
                                        }}
                                    />
                                </Box>

                                <Box sx={{ m: 1 }}>
                                    {/* capacity input */}
                                    <TextField
                                        sx={{ mr: 5, width: '30ch' }}
                                        label="Capacity"
                                        variant="standard"
                                        type="number"
                                        value={formData.capacity}
                                        onChange={handleChange('capacity')}
                                        inputProps={{
                                            maxLength: 5,
                                            min: 0,
                                        }}
                                        helperText={formData.capacity && formData.capacity <= 0 || formData.capacity >= 100000 ? 'Capacity must be between 1 and 100000' : ''}
                                        FormHelperTextProps={{
                                            sx: {
                                                color: 'error.main',
                                                minHeight: '1.5em',
                                            },
                                        }}
                                    />
                                    {/* city name input */}
                                    <TextField
                                        sx={{ mr: 5, width: '30ch' }}
                                        label="City"
                                        variant="standard"
                                        value={formData.city}
                                        onChange={handleChange('city')}
                                        inputProps={{ maxLength: 40 }}
                                        helperText={
                                            formData.city.length >= 40 ? 'Max name length: 40' : ''
                                        }
                                        FormHelperTextProps={{
                                            sx: {
                                                color: 'error.main',
                                                minHeight: '1.5em',
                                            },
                                        }}
                                    />
                                </Box>

                                <Box sx={{ m: 1 }}>
                                    {/* coordinates display (read-only) */}
                                    <TextField
                                        sx={{ mr: 5, width: '30ch' }}
                                        label="Coordinates"
                                        variant="standard"
                                        value={formData.coords}
                                        disabled
                                    />
                                    {/* postal code input */}
                                    <TextField
                                        sx={{ mr: 5, width: '30ch' }}
                                        label="Postal code"
                                        variant="standard"
                                        type="number"
                                        value={formData.postalCode}
                                        onChange={handleChange('postalCode')}
                                        inputProps={{
                                            maxLength: 5,
                                            min: 0,
                                        }}
                                        helperText={formData.postalCode && formData.postalCode <= 10000 || formData.postalCode >= 99999 ? 'Postal code has 5 characters' : ''}
                                        FormHelperTextProps={{
                                            sx: {
                                                color: 'error.main',
                                                minHeight: '1.5em',
                                            },
                                        }}
                                    />
                                </Box>

                                <Box sx={{ m: 1 }}>
                                    {/* opening hours input */}
                                    <TextField
                                        sx={{ mr: 4, width: '13ch' }}
                                        label="Opens"
                                        type="number"
                                        variant="standard"
                                        value={formData.opens}
                                        onChange={handleChange('opens')}
                                        inputProps={{ min: 0, max: 23 }}
                                        helperText={
                                            formData.opens > 23 ? 'Value too large for opening hours' : ''
                                        }
                                        FormHelperTextProps={{
                                            sx: {
                                                color: 'error.main',
                                                minHeight: '1.5em',
                                            },
                                        }}
                                    />
                                    {/* closing hours input */}
                                    <TextField
                                        sx={{ mr: 3, width: '13ch' }}
                                        label="Closes"
                                        type="number"
                                        variant="standard"
                                        value={formData.closes}
                                        onChange={handleChange('closes')}
                                        inputProps={{ min: 0, max: 23 }}
                                        helperText={
                                            formData.closes > 23 ? 'Value too large for closing hours' : ''
                                        }
                                        FormHelperTextProps={{
                                            sx: {
                                                color: 'error.main',
                                                minHeight: '1.5em',
                                            },
                                        }}
                                    />
                                    {/* open/closed switch */}
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                color="primary"
                                                checked={formData.open === 1}
                                                onChange={() =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        open: prev.open === 1 ? 0 : 1,
                                                    }))
                                                }
                                            />
                                        }
                                        label="Open"
                                        labelPlacement="top"
                                    />
                                    {/* open on sunday switch */}
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                color="primary"
                                                checked={formData.sunday === 1}
                                                onChange={() =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        sunday: prev.sunday === 1 ? 0 : 1,
                                                    }))
                                                }
                                            />
                                        }
                                        label="Sundays"
                                        labelPlacement="top"
                                    />
                                </Box>

                                <Box sx={{ m: 1 }}>
                                    {/* save button */}
                                    <Button
                                        sx={{ height: '36px', padding: 2, width: '20ch', ml: 1 }}
                                        variant="outlined"
                                        size="small"
                                        onClick={handleSave}
                                        disabled={!isFormValid()}
                                    >
                                        Save changes
                                    </Button>

                                    {/* validation warning */}
                                    {
                                        !isFormValid() && (
                                            <Typography variant="body2" sx={{ color: 'error.main', mt: 1 }}>
                                                Please fix all errors before saving.
                                            </Typography>
                                        )
                                    }
                                </Box>
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

// displaying and managing a list of branches
export default function Branch() {
    // state to hold the current list of warehouse branches
    const [rowsState, setRowsState] = React.useState(rows);

    // function to handle saving updates to a specific row
    const handleSave = (updatedRow) => {
        setRowsState(prev =>
            prev.map(row => (row.id === updatedRow.id ? updatedRow : row))
        );
    };

    // function to handle deleting a specific row by its ID
    const handleDelete = (idToDelete) => {
        setRowsState(prev => prev.filter(row => row.id !== idToDelete));
    };

    return (
        <>
            <h1>Branches</h1>

            {/* table container wrapping the warehouse table */}
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead >
                        <TableRow sx={{ borderBottom: '2px solid black' }}>
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 0, width: 'auto', whiteSpace: 'nowrap', borderBottom: '2px solid black' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 0, width: 'auto', whiteSpace: 'nowrap', borderBottom: '2px solid black' }}>Address</TableCell>
                            <TableCell colSpan={2} sx={{ fontWeight: 'bold', minWidth: 0, width: 'auto', whiteSpace: 'nowrap', borderBottom: '2px solid black' }}>Capacity</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 0, width: 'auto', whiteSpace: 'nowrap', borderBottom: '2px solid black' }}>Open</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 0, width: 'auto', whiteSpace: 'nowrap', borderBottom: '2px solid black' }}>Owner</TableCell>
                            {/* Empty header cells for actions like Edit/Delete */}
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 0, width: 'auto', whiteSpace: 'nowrap', borderBottom: '2px solid black' }} />
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 0, width: 'auto', whiteSpace: 'nowrap', borderBottom: '2px solid black' }} />
                        </TableRow>
                    </TableHead>

                    {/* rendering the body based on imported rows */}
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
