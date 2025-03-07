---
sidebar_position: 1
---

The `ApplicantAnalytics` component is a React functional component designed to display key performance indicators (KPIs) and analytics related to job applicants in a human resources (HR) management system. It fetches data from multiple API endpoints and presents the information in a visually organized manner using reusable card components.


- **File Path**: `\hr-frontend\src\components\applicants\ApplicantAnalytics.js`
- **Dependencies**:
  - React (`useState`, `useEffect`, `useContext`)
  - `axios` for API requests
  - `AuthContext` for authentication
  - Reusable card components (`KpiCard`, `TopLocationCard`, `TopSkillsCard`, `RecentApplicantCard`)

### Key Features

1. **Data Fetching**: Fetches applicant analytics data from multiple API endpoints using `axios`.
2. **State Management**: Uses React's `useState` to manage the fetched data.
3. **Authentication**: Utilizes `AuthContext` to include authentication tokens in API requests.
4. **Reusable Components**: Displays data using reusable card components for better modularity and maintainability.


### State Variables
```javascript
const [totalApplicants, setTotalApplicants] = useState(null);
const [topLocation, setTopLocation] = useState({ location: '', count: 0 });
const [mostRecentApplicant, setMostRecentApplicant] = useState(null);
const [topSkill, setTopSkill] = useState(null);
const { authTokens } = useContext(AuthContext);
```
| Variable Name|Purpose|
|---|---|
| `totalApplicants`| Stores the total number of applicants.|
| `topLocation`| Stores the top location of applicants and the count of applicants from that location.|
| `mostRecentApplicant`|: Stores the timestamp of the most recent applicant.|
| `topSkill`| Stores the top skills among applicants.|
| `authTokens`| Retrieves authentication tokens from `AuthContext`.|


### Data Fetching with `useEffect`
```javascript
useEffect(() => {
    const fetchKpiData = async () => {
        const header = {
            'Authorization': `Bearer ${authTokens.access}`,
        };

        try {
            const [applicantsRes, locationRes, recentRes, skillRes] = await Promise.all([
                axios.get('/analytics/total-applicants/', { headers: header }),
                axios.get('/analytics/top-location/', { headers: header }),
                axios.get('/analytics/most-recent-applicant/', { headers: header }),
                axios.get('/analytics/top-skill/', { headers: header }),
            ]);

            setTotalApplicants(applicantsRes.data.total_applicants);
            setTopLocation({ location: locationRes.data.top_location, count: locationRes.data.applicant_count });
            setMostRecentApplicant(recentRes.data.most_recent_applicant);
            setTopSkill(skillRes.data.top_skills);
        } catch (error) {
            console.error("Error fetching KPI data", error);
        }
    };

    fetchKpiData();
}, []);
```
- **`useEffect`**: Fetches data when the component mounts.
- **`Promise.all`**: Concurrently fetches data from multiple endpoints to optimize performance.
- **Error Handling**: Logs errors if any API request fails.

### Rendering
- **Layout**: Uses a flexbox layout with a gap to space out the cards.
- **Card Components**:
  - `KpiCard`: Displays the total number of applicants.
  - `TopLocationCard`: Displays the top location and applicant count.
  - `RecentApplicantCard`: Displays the date and time of the most recent applicant.
  - `TopSkillsCard`: Displays the top skills among applicants.



### Error Handling
- Errors during API requests are logged to the console using `console.error`.
- Fallback values (e.g., `'Loading...'`) are displayed if data is not yet available.

---
