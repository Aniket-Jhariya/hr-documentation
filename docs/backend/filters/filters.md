---
sidebar_position: 3
---

# Filters

### ResumeDataFilter
Filters resumes based on various criteria.

#### Fields:
- `updated_at__in` (DateFilter): Filters by update date.
- `o` (OrderingFilter): Allows sorting by resume score, name, status, etc.

#### Methods:
- `filter_date(queryset, name, value)`: Filters resumes within a specific date range.

---

### JobDataFilter
Filters job postings based on specific attributes.

#### Fields:
- `skills` (CharFilter): Filters by required job skills.
- `must_skills` (CharFilter): Filters by must-have skills.
- `published__icontains` (BooleanFilter): Filters by job publication status.
- `o` (OrderingFilter): Allows sorting by title, created date, etc.

#### Methods:
- `filter_published(queryset, name, value)`: Filters jobs by published status.
- `filter_skills(queryset, name, value)`: Filters jobs based on skill requirements.
- `filter_must_have_skills(queryset, name, value)`: Filters jobs based on must-have skills.

---

### CandidateDataFilter
Filters candidates based on various criteria.

#### Fields:
- `cgpa_gt__icontains` (NumberFilter): Filters candidates with CGPA greater than the specified value.
- `cgpa_lt__icontains` (NumberFilter): Filters candidates with CGPA less than the specified value.
- `work_experience__icontains` (CharFilter): Filters by work experience.
- `skills__icontains` (CharFilter): Filters by skills.
- `updated_at__in` (DateFilter): Filters by update date.
- `o` (OrderingFilter): Allows sorting by resume score, name, email, etc.

#### Methods:
- `filter_date(queryset, name, value)`: Filters candidates by date.
- `filter_education_cgpa_gt(queryset, name, value)`: Filters candidates with CGPA greater than a threshold.
- `filter_education_cgpa_lt(queryset, name, value)`: Filters candidates with CGPA less than a threshold.
- `filter_work_experience(queryset, name, value)`: Filters candidates by work experience.
- `filter_skills_has(queryset, name, value)`: Filters candidates by possessed skills.
- `filter_skills_matched(queryset, name, value)`: Filters candidates by matched skills.
- `filter_projects(queryset, name, value)`: Filters candidates by project experience.
- `filter_candidate_city(queryset, name, value)`: Filters candidates by city.
- `filter_candidate_state(queryset, name, value)`: Filters candidates by state.

---

### TestLogDataFilter
Filters test logs based on specific parameters.

#### Fields:
- `assigned_at__exact` (DateTimeFilter): Filters by assigned date.
- `valid_to__exact` (DateTimeFilter): Filters by validity date.
- `o` (OrderingFilter): Allows sorting by test attributes.

#### Methods:
- `filter_assigned_at_exact(queryset, name, value)`: Filters test logs by assigned date.
- `filter_valid_to_exact(queryset, name, value)`: Filters test logs by validity date.

---

## PersonalityScreeningDataFilter
Filters personality screening data based on parameters.

#### Fields:
- `assigned_at__exact` (DateTimeFilter): Filters by assigned date.
- `expired_at__exact` (DateTimeFilter): Filters by expiration date.
- `o` (OrderingFilter): Allows sorting by screening attributes.

#### Methods:
- `filter_assigned_at_exact(queryset, name, value)`: Filters screenings by assigned date.
- `filter_expired_at_exact(queryset, name, value)`: Filters screenings by expiration date.

---

## JobUniversalStatusFilter
Filters job universal status records.

#### Fields:
- `updated_at` (DateFilter): Filters by update date.
- `job__title` (CharFilter): Filters by job title.
- `status` (CharFilter): Filters by job status.
- `candidate__id` (CharFilter): Filters by candidate ID.

