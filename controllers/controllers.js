const Contact = require('../Model/model'); // Adjust the path according to your directory structure

const saveContact = async (req, res) => {
    console.log('Received request body:', req.body); // Log the request body

    try {
        const { name, movieSuggestion, email, numberOfSeats } = req.body;
        
        // Basic validation
        if (!name || !email || !movieSuggestion || !numberOfSeats) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        
        // Create and save the new contact
        const newContact = new Contact({ name, movieSuggestion, email, numberOfSeats });
        await newContact.save();

        // Send a response with the saved contact details
        res.status(201).json({
            message: 'Contact saved successfully',
            contact: {
                name: newContact.name,
                movieSuggestion: newContact.movieSuggestion,
                email: newContact.email,
                numberOfSeats: newContact.numberOfSeats
            }
        });
    } catch (error) {
        console.error('Error saving contact:', error); // Log the error
        res.status(400).json({ 
            message: 'Error saving contact',
            error: error.message 
        });
    }
};

module.exports = saveContact;
