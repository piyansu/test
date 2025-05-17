// server.js - gRPC-Web Proxy Server
const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load Proto Files
const COMMON_PROTO_PATH = path.resolve(__dirname, './protos/common.proto');
const LOGIN_PROTO_PATH = path.resolve(__dirname, './protos/login.proto');

// Load Proto Definitions
const packageDefinition = protoLoader.loadSync(
  [COMMON_PROTO_PATH, LOGIN_PROTO_PATH],
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const erpPackage = protoDescriptor.erp;

// Create gRPC client for Login Service
const loginClient = new erpPackage.LoginService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// API Endpoint for Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  console.log(`Login attempt for email: ${email}`);
  
  // Call the gRPC Login method
  loginClient.Login({ email, password }, (err, response) => {
    if (err) {
      console.error('Error calling Login service:', err);
      return res.status(500).json({ 
        error: 'Failed to connect to login service',
        details: err.message
      });
    }
    
    console.log('gRPC Login response:', response);
    
    // Return the gRPC response as JSON
    res.json(response);
  });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
  console.log(`Connected to gRPC backend at localhost:50051`);
});