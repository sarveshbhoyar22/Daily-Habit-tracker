import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";
import ProgressBar from "./ProgressBar";
import CalendarView from "./CalendarView";
import { calculateTodayCompletion } from "../utils/dateUtils";
import { AppState, Habit } from "../types";
import { toast } from "react-toastify";
import { set } from "date-fns";

interface DashboardProps {
  theme: AppState["theme"];
  onToggleTheme: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ theme, onToggleTheme }) => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [todayPercentage, setTodayPercentage] = useState(0);
  const[loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (token) {
      fetchHabits();
    }
  }, [token]);

  useEffect(() => {
    setTodayPercentage(calculateTodayCompletion(habits));
  }, [habits]);

  const url = import.meta.env.VITE_BASE_URL;
  const fetchHabits = async () => {
    try {
      setLoading(true);
      if (loading) {
        toast.loading("loading Habit...");
      }
      const res = await fetch(`${url}/api/habits`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      const data = await res.json();

      const mappedHabits: Habit[] = data.map((habit: any) => ({
        id: habit._id,
        name: habit.name,
        createdAt: habit.createdAt,
        completedDates: habit.dates,
        color: habit.color || undefined,
      }));
      if(mappedHabits){
        setLoading(false);
        toast.dismiss();
      }
      setHabits(mappedHabits);
    } catch (err) {
      console.error("Failed to fetch habits", err);
    }finally{
      setLoading(false);
      
    }
  };

  const handleAddHabit = async (name: string) => {
    try {
      setLoading(true);
      if(loading){
        toast.loading("Adding Habit...");
      }
        
      const res = await fetch(`${url}/api/habits`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });
      const habit = await res.json();
      const newHabit: Habit = {
        id: habit._id,
        name: habit.name,
        createdAt: habit.createdAt,
        completedDates: habit.dates,
        color: habit.color || undefined,
      };

      if(newHabit){
        setLoading(false);  
        toast.dismiss();
      }

      setHabits((prev) => [...prev, newHabit]);
    } catch (err) {
      console.error("Failed to add habit", err);
    }finally{
      setLoading(false);
      
    }
  };

  const handleDeleteHabit = async (id: string) => {
    try {
      
      await fetch(`${url}/api/habits/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setHabits((prev) => prev.filter((h) => h.id !== id));
    } catch (err) {
      console.error("Failed to delete habit", err);
    }
  };

  const handleToggleHabit = async (id: string, date: string) => {
    try {
      const res = await fetch(`${url}/api/habits/${id}/toggle`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ date }),
      });
      const updated = await res.json();
      const updatedHabit: Habit = {
        id: updated._id,
        name: updated.name,
        createdAt: updated.createdAt,
        completedDates: updated.dates,
        color: updated.color || undefined,
      };

      setHabits((prev) =>
        prev.map((h) => (h.id === updatedHabit.id ? updatedHabit : h))
      );
    } catch (err) {
      console.error("Failed to toggle habit", err);
    }
  };

  return (
    <main className="container mx-auto my-5 px-4 sm:px-6 pb-12 max-w-3xl">
      <HabitForm onAddHabit={handleAddHabit} />
      <ProgressBar percentage={todayPercentage} />
      <CalendarView habits={habits} onToggleHabit={handleToggleHabit} />
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        My Habits
      </h2>
      <HabitList
        habits={habits}
        onToggleHabit={handleToggleHabit}
        onDeleteHabit={handleDeleteHabit}
      />
    </main>
  );
};

export default Dashboard;
