---
sidebar_position: 1
---

# Endpoints
## `total-applicants/`
- **View:** TotalApplicantsView
- Get the jobs shared with the user, Filter candidates based on the user's jobs (owned or shared) and Return the total count of candidates.
- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "id":"1234"
        }
    }
    ```
    **Response**
    ```json
    {
        "total_applicants":12
    }
    ```

## `top-location/`
- **View:** TopLocationView
- Group applicants by city and return the top location
- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "id":"1234"
        }
    }
    ```
    **Response**
    ```json
   {
    "top_location": "Pune",
    "applicant_count": 123
    }
    ```

## `top-skill/`
- **View:** TopSkillView
- Get top 3 skills sorted by count in descending order.
- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "id":"1234"
        }
    }
    ```
    **Response**
    ```json
   {
    "most_recent_applicant": "2024-10-25T14:30:00Z"
    }
    ```
## `most-recent-applicant/`
- **View:** MostRecentApplicantView
- Filter by resumes and order by the most recent resume's created_at and get the most recent resume's created_at field
- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "id":"1234"
        }
    }
    ```
    **Response**
    ```json
   {
    "most_recent_applicant": "2024-10-25T14:30:00Z"
    }
    ```

## `details/`
- **View:** DashboardKpiView
- Generate and retrieve the key performance indicators for a particular job.
- **Helper functions**
    - `credits_per_hire(self,job_id,candidates)`
        Helper function to calculate the credits consumed per hire based on the candidates 
        who have been hired for a particular job.
        
        `return`: The credits consumed per hire as a rounded value.
    - `fetch_assessment_ratio(self,total_applicants,user_org_id=None,job_id=None)`
        Helper function to calculate the assessment ratio from the applicants.

        `return`: The assessment ratio as a percentage (0 to 100).
    - `fetch_personality_screening_ratio(self,total_applicants,user_org_id=None,job_id=None)`
        Helper function to calculate the personality screening ratio from the applicants.

        `return`: The personality screening ratio as a percentage (0 to 100).
    - `fetch_close_fill(self,applicants, job_id=None)`
        Helper function to get the first 'Hired' status from the applicants.

        `return`: The first hired status object or None if not found.
- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "job_id":"1234"
        }
    }
    ```
    **Response**
    for one job
    ```json
    {
        "close_fills":...user object with hired status,
        "total_applicants": 123,
        "assessment_ratio":1.2,
        "personality_screening_ratio":2.3,
        "credits_per_hire": 12
    }
    ```
    for multiple job instances

    ```json
    {
        "total_applicants": 123,
        "total_jobs":1234,
        "assessment_ratio":1.2,
        "personality_screening_ratio":2.3,
        "close_fill":...user object with hired status,
        "closed_jobs_count":123,
        "opened_jobs_count":1231
    }
    ```

    |Response Code|Description|
    |---|---|
    |200|SUCCESS: KPI retrieved|
    |204|FAIL: Not enough data|
    |404|FAIL: Job not found|

## `weekly-graph/`
- **View:** DashboardWeeklyGraphView
- Provide weekly statistics for the dashboard, including applications received, assessments assigned, and video interviews assigned over the last 12 weeks.
- **Helper functions**
    - `applications_received_weekly_graph(self,twelve_weeks_ago,org_id,job_id=None)`
        Generate weekly data for applications received in the last 12 weeks.

        `return`: list of 12 integers representing the number of applications received per week.
    
    - `assessments_weekly_graph(self, twelve_weeks_ago,org_id,job_id=None)`
        Generate weekly data for assessments assigned in the last 12 weeks.

        `return`: list of 12 integers representing the number of assessments assigned per week.
    - `video_interviews_weekly_graph(self,twelve_weeks_ago,org_id,job_id=None)`
        Generate weekly data for video interviews assigned in the last 12 weeks.

        `return`: list of 12 integers representing the number of video interviews assigned per week and the ID of the job to filter assessments. Defaults to None.
    - `fill_data(self,weekly_data,column_name)`
        Fill missing weekly data to ensure a complete 12-week dataset.

        `return`: list of 12 integers, with zeroes for missing weeks

- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "job_id":"1234",
            "org":{
                ...
                "org_id":"12345"
            }
            
        }
    }
    ```
    **Response**
    ```json
   {
    "results":{
            "applications_received":{
                "weeks":12,
                "data":...data from applications
            },
            "assessments":{
                "weeks":23,
                "data":...data from assessments
            },
            "video_interviews":{
                "weeks":13,
                "data":...data from video interviews
            }
        }
    }
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Results fetched|

## `applicants-stage-graph/`
- **View:** DashboardWeeklyGraphView
- Retrieves applicant counts across different stages of a hiring process for a job or an organization.
- **Helper functions**
    - `get_latest_candidates(self, qs, job_id, stage_name, org_id)`
        Filters candidates based on job_id, org_id, and stage name to retrieve the latest candidates.

        `return`: the latest count of candidates in a specific stage 
    
    - `get_latest_rejected_candidates(self, qs, job_id, stage_name, org_id)`
        Filters candidates based on job_id, org_id, and stage name to retrieve the latest rejected candidates.

        `return`: he latest count of candidates who are rejected or not shortlisted.

- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "job_id":"1234",
            "org":{
                ...
                "org_id":"12345"
            }
            
        }
    }
    ```
    **Response**
    ```json
   {
    "results":{
            "resume_screening": 12,
            "assessment_test": 23,
            "video_interview": 13,
            "rejected": 1,
            "on_hold": 2,
            "hired": 3,
        }
    }
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Results fetched|

## `score-distribution-graph/`
- **View:** ScoreDistributionGraphView
- Retrieves the distribution of resumes based on their `overall_score` field.

- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "job_id":"1234",
            "org":{
                ...
                "org_id":"12345"
            }
            
        }
    }
    ```
    **Response**
    ```json
   {
    "results":[...List of dictionaries with keys "score" (int) and "count" (int)]
    }
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Results fetched|

## `applicants-stage-graph-overview/`
- **View:** ApplicationStagesOverviewGraphView
- Retrieves stage-wise applicant counts for all jobs or a specific job in an organization.

- **Payload**
    - GET
    ```json
    {
        "user":{
            ...
            "job_id":"1234",
            "org":{
                ...
                "org_id":"12345"
            }
            
        }
    }
    ```
    **Response**
    ```json
   {
    "results":[
        ...
        {
            "job_name":"Software Tester",
            "stages":{
                "resume_screening":12,
                "video_interview":23,
                "assessment_test":13,
                "hired":1,
                "on_hold":2,
                "reject":3
            }
        }
    ]
    }
    ```
    |Response Code|Description|
    |---|---|
    |200|SUCCESS: Results fetched|
