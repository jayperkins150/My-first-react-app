import React from 'react';

const JobBoard = () => {
    const companyName = "Microsoft";
    const jobCount = 16;

    const getJobMessage = () => {
        const nextWeekJobs = jobCount * 1.5;
        if (jobCount === 0) {
            return "No jobs available";
        } else if (jobCount < 5) {
            return `Few jobs running today. Jobs running today from bot: ${jobCount}, 
            Expected number of jobs next week: ${nextWeekJobs}`;
        } else if (jobCount > 5) {
            return `Plenty of jobs running today. Jobs running today from bot: ${jobCount}, 
            Expected number of jobs next week: ${nextWeekJobs}`;
        }
    };

    return (
        <div>
            <h1>{companyName}</h1>
            <p>{getJobMessage()}</p>
            <br></br><br></br><br></br>
        </div>
    );

};

export default JobBoard