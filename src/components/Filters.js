import React from "react";
import { INDUSTRIES } from "../constants/industries";

export default function Filters({
  filters,
  visible,
  onSelectFilter,
  onToggleFilter
}) {
  return (
    <div id="filters" className="filters">
      <ul>
        <li>
          Techmaps.io 💻🗺️ <br />
          <a
            className="addnewbusiness"
            href="https://techmaps.typeform.com/to/WnqKsS"
          >
            add new business
          </a>
        </li>
        <li id="toggle">
          <label htmlFor="filter">
            <input
              onChange={onToggleFilter}
              id="filter"
              type="checkbox"
              checked={visible}
            />Filter ⛏
          </label>
        </li>
        {Object.entries(INDUSTRIES).map(
          ([id, industry]) =>
            visible && (
              <li key={id}>
                <label htmlFor={id}>
                  <input
                    onChange={onSelectFilter}
                    id={id}
                    type="checkbox"
                    value={id}
                    checked={filters.includes(id)}
                  />
                  <span role="img" aria-hidden>
                    {industry.icon}
                  </span>
                  {industry.label}
                </label>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
