import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EventSeatIcon from '@mui/icons-material/EventSeat';

// Dummy data representing events
const eventsData = [
  {
    name: 'Event 1',
    date: '2023-01-01',
    price: '$20',
    totalTickets: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Event 2',
    date: '2023-02-01',
    price: '$15',
    totalTickets: 50,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more events as needed
];

// Define seats organized by rows
const seatsByRows = [
  ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
  ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'],
  ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
  ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'],
];

const EventRow = ({ event, onBuyTicketClick }) => {
  const [open, setOpen] = React.useState(false);

  const handleRowClick = (e) => {
    if (!e.target.closest('.buy-ticket-button')) {
      setOpen(!open);
    }
  };

  return (
    <>
      <TableRow onClick={handleRowClick} style={{ cursor: 'pointer' }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            sx={{ marginRight: '-12px' }}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{event.name}</TableCell>
        <TableCell>{event.date}</TableCell>
        <TableCell>{event.price}</TableCell>
        <TableCell>{event.totalTickets}</TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onBuyTicketClick(event)}
            className="buy-ticket-button"
          >
            Buy Ticket!
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <Typography variant="body2" gutterBottom>
                {event.description}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const SeatSelection = ({ open, onClose, event }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Seat Selection</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1" gutterBottom>
          Event: {event?.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Date: {event?.date}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Price per ticket: {event?.price}
        </Typography>
        {seatsByRows.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', marginBottom: '10px' }}>
            {row.map((seat) => (
              <IconButton key={seat} aria-label={`seat-${seat}`}>
                <EventSeatIcon />
                <Typography variant="caption">{seat}</Typography>
              </IconButton>
            ))}
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Body = () => {
  const [openBuyTicketModal, setOpenBuyTicketModal] = React.useState(false);
  const [openSeatSelection, setOpenSeatSelection] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const handleBuyTicketClick = (event) => {
    setOpenBuyTicketModal(true);
    setSelectedEvent(event);
  };

  const handleBuyTicketClose = () => {
    setOpenBuyTicketModal(false);
    setSelectedEvent(null);
  };

  const handleSeatSelectionClick = (event) => {
    setSelectedEvent(event);
    setOpenSeatSelection(true);
  };

  const handleSeatSelectionClose = () => {
    setOpenSeatSelection(false);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total Tickets Left</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventsData.map((event, index) => (
              <EventRow
                key={index}
                event={event}
                onBuyTicketClick={handleSeatSelectionClick}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Buy Ticket modal */}

      {/* Seat Selection modal */}
      <SeatSelection open={openSeatSelection} onClose={handleSeatSelectionClose} event={selectedEvent} />
    </div> 
  );
};

export default Body;
