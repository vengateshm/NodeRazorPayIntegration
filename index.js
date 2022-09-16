const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var instance = new Razorpay({
    key_id: 'rzp_test_zoXB9JxruFIFPV',
    key_secret: '43kh2ez219Ow0FXb4WXXU1ai',
  });

app.post('/orders', (req, res) => {
    var options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        res.send(order);
      });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
