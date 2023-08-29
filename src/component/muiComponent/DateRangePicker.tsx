import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Import the styles
import "react-date-range/dist/theme/default.css"; // Import the default theme

export default function DateRangeCalendar() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleFocusChange = (ranges: any) => {

    
    setDateRange([ranges.selection]);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <DateRange
        moveRangeOnFirstSelection={true}
        retainEndDateOnFirstSelection={true}
        onChange={handleFocusChange}
        ranges={dateRange}
        editableDateInputs={true}
      />
    </div>
  );
}
