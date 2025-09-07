import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Dashboard from "../components/Dashboard";

// Types for our data
interface Order {
  id: number;
  customer: string;
  address: string;
  status: "picked_up" | "in_progress" | "ready" | "delivered";
  value: number;
  pickup_time: string;
  type: "residential" | "business" | "airbnb";
}

interface DashboardStats {
  todayOrders: number;
  todayRevenue: number;
  activeRoutes: number;
  avgRating: number;
}

interface LoaderData {
  orders: Order[];
  stats: DashboardStats;
  dailyStats: Array<{ date: string; orders: number; revenue: number; }>;
}

export const meta: MetaFunction = () => [
  { title: "Dashboard | Bags Of Laundry" },
  { name: "description", content: "Business dashboard for Bags Of Laundry laundry service" },
];

export const loader: LoaderFunction = async ({ request }) => {
  // TODO: Add authentication check here
  // const user = await requireUser(request);
  
  // Mock data - replace with real database queries
  const orders: Order[] = [
    { id: 1, customer: "Sarah Johnson", address: "123 Main St", status: "picked_up", value: 45, pickup_time: "2024-01-15T10:00:00", type: "residential" },
    { id: 2, customer: "Motor City Gym", address: "456 Woodward Ave", status: "in_progress", value: 120, pickup_time: "2024-01-15T11:30:00", type: "business" },
    { id: 3, customer: "Detroit Airbnb Host", address: "789 Corktown St", status: "ready", value: 85, pickup_time: "2024-01-15T14:00:00", type: "airbnb" },
    { id: 4, customer: "Mike Chen", address: "321 Belle Isle Dr", status: "delivered", value: 32, pickup_time: "2024-01-15T09:15:00", type: "residential" },
    { id: 5, customer: "Riverside Spa", address: "654 Jefferson Ave", status: "picked_up", value: 200, pickup_time: "2024-01-15T12:45:00", type: "business" }
  ];

  const stats: DashboardStats = {
    todayOrders: orders.length,
    todayRevenue: orders.reduce((sum, order) => sum + order.value, 0),
    activeRoutes: 3,
    avgRating: 4.9
  };

  const dailyStats = [
    { date: 'Mon', orders: 24, revenue: 1240 },
    { date: 'Tue', orders: 28, revenue: 1580 },
    { date: 'Wed', orders: 32, revenue: 1820 },
    { date: 'Thu', orders: 29, revenue: 1650 },
    { date: 'Fri', orders: 35, revenue: 2100 },
    { date: 'Sat', orders: 42, revenue: 2680 },
    { date: 'Sun', orders: 18, revenue: 980 }
  ];

  return json<LoaderData>({ orders, stats, dailyStats });
};

export default function DashboardRoute() {
  const data = useLoaderData<LoaderData>();
  
  // Add safety checks in case data is undefined
  const { orders = [], stats = { todayOrders: 0, todayRevenue: 0, activeRoutes: 0, avgRating: 0 }, dailyStats = [] } = data || {};

  return (
    <Dashboard 
      orders={orders}
      stats={stats}
      dailyStats={dailyStats}
    />
  );
}