// BuyTicket.js

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const BuyTicket = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="buy-ticket-modal"
      aria-describedby="buy-ticket-modal-description"
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Buy Ticket
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* Add content related to seat selection */}
              Seats: A1, A2, A3
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Modal>
  );
};

export default BuyTicket;
