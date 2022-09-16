const Razorpay = require('razorpay');
var instance = new Razorpay({
    key_id: 'rzp_test_zoXB9JxruFIFPV',
    key_secret: '43kh2ez219Ow0FXb4WXXU1ai',
  });

var options = {
  amount: 50000,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11"
};
instance.orders.create(options, function(err, order) {
  console.log(order);
});
