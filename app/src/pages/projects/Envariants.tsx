import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Alert,
  CircularProgress,
  Divider,
  Paper,
} from '@mui/material';
import {
  Storage as StorageIcon,
  Settings as SettingsIcon,
  BugReport as BugReportIcon,
} from '@mui/icons-material';
import BasePage from '../BasePage';
import { apiClient, Namespace, Service, LogEntry } from '../../utils/api';

function Envariants() {
  const [namespaces, setNamespaces] = useState<Namespace[]>([]);
  const [selectedNamespace, setSelectedNamespace] = useState<string | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load namespaces on component mount
  useEffect(() => {
    loadNamespaces();
  }, []);

  // Load services when namespace is selected
  useEffect(() => {
    if (selectedNamespace) {
      loadServices(selectedNamespace);
    }
  }, [selectedNamespace]);

  // Load logs when service is selected
  useEffect(() => {
    if (selectedNamespace && selectedService) {
      loadLogs(selectedNamespace, selectedService);
    }
  }, [selectedNamespace, selectedService]);

  const loadNamespaces = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.getNamespaces();
      setNamespaces(response.namespaces);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load namespaces');
    } finally {
      setLoading(false);
    }
  };

  const loadServices = async (namespace: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.getServices(namespace);
      setServices(response.services);
      setSelectedService(null); // Reset selected service
      setLogs([]); // Clear logs
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  const loadLogs = async (namespace: string, service: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.getServiceLogs(namespace, service, 50);
      setLogs(response.logs);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load logs');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'success';
      case 'degraded': return 'warning';
      case 'unhealthy': return 'error';
      default: return 'default';
    }
  };

  const getLogLevelColor = (level: string) => {
    switch (level) {
      case 'ERROR': return 'error';
      case 'WARN': return 'warning';
      case 'INFO': return 'info';
      default: return 'default';
    }
  };

  return (
    <BasePage 
      title="Envariants API Demo" 
      subtitle="Logging namespaces and services management"
    >
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {/* Namespaces Panel */}
        <Card sx={{ minWidth: 300, flex: 1 }}>
          <CardHeader
            title="Namespaces"
            avatar={<StorageIcon />}
            action={loading && <CircularProgress size={20} />}
          />
          <CardContent>
            <List dense>
              {namespaces.map((namespace) => (
                <ListItem key={namespace.id} disablePadding>
                  <ListItemButton
                    selected={selectedNamespace === namespace.id}
                    onClick={() => setSelectedNamespace(namespace.id)}
                  >
                    <ListItemText
                      primary={namespace.name}
                      secondary={namespace.description}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Services Panel */}
        <Card sx={{ minWidth: 300, flex: 1 }}>
          <CardHeader
            title={`Services${selectedNamespace ? ` in ${selectedNamespace}` : ''}`}
            avatar={<SettingsIcon />}
            action={loading && <CircularProgress size={20} />}
          />
          <CardContent>
            {selectedNamespace ? (
              <List dense>
                {services.map((service) => (
                  <ListItem key={service.id} disablePadding>
                    <ListItemButton
                      selected={selectedService === service.id}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <ListItemText
                        primary={service.name}
                        secondary={service.description}
                      />
                      <Chip
                        label={service.status}
                        color={getStatusColor(service.status) as any}
                        size="small"
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Select a namespace to view services
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>

      {/* Logs Panel */}
      {selectedNamespace && selectedService && (
        <Card sx={{ mt: 2 }}>
          <CardHeader
            title={`Logs for ${selectedService} in ${selectedNamespace}`}
            avatar={<BugReportIcon />}
            action={loading && <CircularProgress size={20} />}
          />
          <CardContent>
            {logs.length > 0 ? (
              <Paper sx={{ maxHeight: 400, overflow: 'auto' }}>
                {logs.map((log, index) => (
                  <Box key={log.id}>
                    <Box sx={{ p: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Chip
                        label={log.level}
                        color={getLogLevelColor(log.level) as any}
                        size="small"
                      />
                      <Typography variant="caption" color="text.secondary">
                        {new Date(log.timestamp).toLocaleString()}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ px: 1, pb: 1 }}>
                      {log.message}
                    </Typography>
                    {index < logs.length - 1 && <Divider />}
                  </Box>
                ))}
              </Paper>
            ) : (
              <Typography variant="body2" color="text.secondary">
                No logs available for this service
              </Typography>
            )}
          </CardContent>
        </Card>
      )}
    </BasePage>
  );
}

export default Envariants;

