const express = require('express');
const router = express.Router();

// Mock data for demonstration - in a real implementation, this would come from a database
const mockNamespaces = [
  { id: 'production', name: 'production', description: 'Production environment logs' },
  { id: 'staging', name: 'staging', description: 'Staging environment logs' },
  { id: 'development', name: 'development', description: 'Development environment logs' },
  { id: 'testing', name: 'testing', description: 'Testing environment logs' }
];

const mockServices = {
  production: [
    { id: 'api-gateway', name: 'api-gateway', description: 'API Gateway service', status: 'healthy' },
    { id: 'user-service', name: 'user-service', description: 'User management service', status: 'healthy' },
    { id: 'payment-service', name: 'payment-service', description: 'Payment processing service', status: 'degraded' },
    { id: 'notification-service', name: 'notification-service', description: 'Notification service', status: 'healthy' }
  ],
  staging: [
    { id: 'api-gateway', name: 'api-gateway', description: 'API Gateway service', status: 'healthy' },
    { id: 'user-service', name: 'user-service', description: 'User management service', status: 'healthy' },
    { id: 'payment-service', name: 'payment-service', description: 'Payment processing service', status: 'healthy' }
  ],
  development: [
    { id: 'api-gateway', name: 'api-gateway', description: 'API Gateway service', status: 'healthy' },
    { id: 'user-service', name: 'user-service', description: 'User management service', status: 'healthy' }
  ],
  testing: [
    { id: 'test-runner', name: 'test-runner', description: 'Automated test runner', status: 'healthy' },
    { id: 'mock-services', name: 'mock-services', description: 'Mock service endpoints', status: 'healthy' }
  ]
};

// GET /admin/log/namespaces
router.get('/admin/log/namespaces', (req, res) => {
  try {
    // In a real implementation, you would query your logging system here
    // For example: kubectl get namespaces, or query a logging database
    
    const response = {
      namespaces: mockNamespaces,
      total: mockNamespaces.length,
      timestamp: new Date().toISOString()
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching namespaces:', error);
    res.status(500).json({ 
      error: 'Failed to fetch namespaces',
      message: error.message 
    });
  }
});

// GET /admin/log/namespace/:namespace/services
router.get('/admin/log/namespace/:namespace/services', (req, res) => {
  try {
    const { namespace } = req.params;
    
    // Validate namespace parameter
    if (!namespace) {
      return res.status(400).json({ 
        error: 'Namespace parameter is required' 
      });
    }

    // Check if namespace exists
    const namespaceExists = mockNamespaces.some(ns => ns.id === namespace);
    if (!namespaceExists) {
      return res.status(404).json({ 
        error: 'Namespace not found',
        namespace: namespace 
      });
    }

    // Get services for the namespace
    const services = mockServices[namespace] || [];
    
    const response = {
      namespace: namespace,
      services: services,
      total: services.length,
      timestamp: new Date().toISOString()
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching services for namespace:', error);
    res.status(500).json({ 
      error: 'Failed to fetch services',
      message: error.message 
    });
  }
});

// Additional endpoint for getting service logs (bonus)
router.get('/admin/log/namespace/:namespace/service/:service/logs', (req, res) => {
  try {
    const { namespace, service } = req.params;
    const { limit = 100, offset = 0 } = req.query;
    
    // Validate parameters
    if (!namespace || !service) {
      return res.status(400).json({ 
        error: 'Namespace and service parameters are required' 
      });
    }

    // Check if namespace and service exist
    const namespaceExists = mockNamespaces.some(ns => ns.id === namespace);
    if (!namespaceExists) {
      return res.status(404).json({ 
        error: 'Namespace not found',
        namespace: namespace 
      });
    }

    const services = mockServices[namespace] || [];
    const serviceExists = services.some(svc => svc.id === service);
    if (!serviceExists) {
      return res.status(404).json({ 
        error: 'Service not found',
        namespace: namespace,
        service: service 
      });
    }

    // Mock log entries
    const mockLogs = Array.from({ length: Math.min(parseInt(limit), 50) }, (_, i) => ({
      id: `log-${i + 1}`,
      timestamp: new Date(Date.now() - i * 1000).toISOString(),
      level: ['INFO', 'WARN', 'ERROR'][Math.floor(Math.random() * 3)],
      message: `Sample log message ${i + 1} from ${service} service`,
      service: service,
      namespace: namespace
    }));

    const response = {
      namespace: namespace,
      service: service,
      logs: mockLogs,
      total: mockLogs.length,
      limit: parseInt(limit),
      offset: parseInt(offset),
      timestamp: new Date().toISOString()
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching service logs:', error);
    res.status(500).json({ 
      error: 'Failed to fetch service logs',
      message: error.message 
    });
  }
});

module.exports = router;

