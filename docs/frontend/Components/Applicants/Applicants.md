---
sidebar_position: 3
---

The `Applicants` component is a React-based component designed to display and manage a list of job applicants within the CandidHR application. It provides a tabular view of applicants, allowing users to filter, sort, and interact with applicant data. 

- **File Path:** `\hr-frontend\src\components\applicants\Applicants.js`

- **Table Component:** A custom table component for rendering applicant data.
- **DefaultUserImage:** A default avatar image used when an applicant's profile picture is not available.
- **API Constants:** `api` is used to define the base URL for API requests.

### State Management

- `userDetails`, `authTokens`, `logoutUser`, and `domain`: extracted from the `AuthContext`.
- `error` and `successMessage`: used to handle and display error and success messages.
- `navigate`: used for programmatic navigation.
- `applicants` and `filteredApplicants`: store the list of applicants and the filtered list, respectively.
- `applicantsLoading`: indicates whether the applicant data is being fetched.
- `searchTerm`, `sortingOption`, and `filterSearchTerm`: manage the search and filter criteria.
- `tableInstance`: stores the instance of the table for further manipulation.
- `tableRowCount` and `totalCount`: manage the count of rows in the table.
- `url`: stores the API endpoint for fetching applicant data.

### Field Mapping

```javascript
const fieldMapping = {
  name: "name",
  overall_score: "resumes__resume_score__overall_score",
  total_duration: "resumes__total_duration",
  city: "candidate_city",
  state: "candidate_state",
  created_at: "latest_resume_created_at",
  experience: "resumes__relevant_experience_in_months",
  job_name: "applied_jobs__title"
};
```

- **Field Mapping:** Maps the frontend table fields to the corresponding backend fields.

### Table Columns

```javascript
const columns = [
  {
    title: "Name",
    field: "name",
    hozAlign: "left",
    vertAlign: "middle",
    minWidth: 120,
    titleFormatter: function (cell, formatterParams, onRendered) {
      return (
        '<div class="column-container">' +
        `<label class="column-title">${cell.getValue()}</label>` +
        "</div>"
      );
    },
    formatter: linkFormatter,
    cellClick: function (e, cell) {
      const id = cell.getData().id;
      const latestJobId = cell.getData().applied_jobs[0]?.id || null;
      if (latestJobId) {
        navigate(`/app/user/applicants/applicant/${id}/profile/${latestJobId}/overview/`);
      }
    },
    headerFilter: true,
    headerFilterFunc: "like",
    headerFilterParams: {
      elementAttributes: {
        class: "w-full rounded-lg border border-gray-300 p-2 my-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
        placeholder: "",
      },
    },
  },
];
```

- **Columns Configuration:** Defines the columns for the table, including their titles, alignment, formatters, and filter options.

### Functions and Methods

1. Formatter Functions
- **Formatter Functions:** Custom functions to format the display of email, contact, and other fields in the table.

```javascript
function emailFormatter(cell, formatterParams, onRendered) {
  return `<div class="flex gap-x-2">
            //More Formatting Logic...
            <span class="me-2">${cell.getValue()}</span>
          </div>`;
}

function contactFormatter(cell, formatterParams, onRendered) {
  const str = cell?.getValue()?.toString();
  const match = str?.match(/["'\(]?(\d{10,})["'\)]?/);
  const value = match ? match[1] : null;
  return value
    ? `<div class="flex gap-x-2">
        //More Formatting Logic...
        <span class="me-2">${value}</span>
      </div>`
    : null;
}

function openOutlook(toEmail) {
  const subject = "CandidHR : Your Subject";
  const mailtoUrl = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoUrl;
}
```


2. Search and Filter Functions
- **Search and Filter Functions:** Functions to handle search and filter operations on the applicant data.

```javascript
const handleSearch = (fieldName, searchValue) => {
  setSearchTerm(searchValue);
  const newSearch = { ...filterSearchTerm };
  newSearch[fieldName] = searchValue;
  setFilterSearchTerm(newSearch);
  const filtered = applicants.filter((applicant) =>
    applicant[fieldName].toLowerCase().includes(searchValue.toLowerCase())
  );
  setFilteredApplicants(filtered);
};

function skillsFilterFunction(value, data, filterParams) {
  if (data && value) {
    return data.some((skill) =>
      skill.toLowerCase().includes(value.toLowerCase())
    );
  }
}

function dateFilter(value, data, filterParams) {
  return new Date(data).toDateString() == new Date(value).toDateString();
}
```

### Rendering
The component renders a header section with applicant count and status indicators, followed by the `Table` component that displays the applicant data.


---

