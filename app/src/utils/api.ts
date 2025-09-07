// API client for Envariants endpoints

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:5000/api';

export interface Namespace {
  id: string;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
}

export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR';
  message: string;
  service: string;
  namespace: string;
}

export interface NamespacesResponse {
  namespaces: Namespace[];
  total: number;
  timestamp: string;
}

export interface ServicesResponse {
  namespace: string;
  services: Service[];
  total: number;
  timestamp: string;
}

export interface LogsResponse {
  namespace: string;
  service: string;
  logs: LogEntry[];
  total: number;
  limit: number;
  offset: number;
  timestamp: string;
}

class ApiClient {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // GET /admin/log/namespaces
  async getNamespaces(): Promise<NamespacesResponse> {
    return this.request<NamespacesResponse>('/admin/log/namespaces');
  }

  // GET /admin/log/namespace/:namespace/services
  async getServices(namespace: string): Promise<ServicesResponse> {
    return this.request<ServicesResponse>(`/admin/log/namespace/${encodeURIComponent(namespace)}/services`);
  }

  // GET /admin/log/namespace/:namespace/service/:service/logs
  async getServiceLogs(
    namespace: string, 
    service: string, 
    limit: number = 100, 
    offset: number = 0
  ): Promise<LogsResponse> {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });
    
    return this.request<LogsResponse>(
      `/admin/log/namespace/${encodeURIComponent(namespace)}/service/${encodeURIComponent(service)}/logs?${params}`
    );
  }

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return this.request<{ status: string; timestamp: string }>('/health');
  }
}

export const apiClient = new ApiClient();

