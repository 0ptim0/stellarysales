import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";

interface CalendarProps {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  width = "300px",
  height = "50px",
  top = "50px",
  left = "50px",
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ position: "relative", width, height, top, left }}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
        className="custom-datepicker" // Add a custom class name
      />
    </div>
  );
};

export default Calendar;
