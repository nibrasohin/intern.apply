const db = require('../database/db.service');
const validate = require('../services/job.validation.service');
const JobIdError = require('../models/error/job/jobIdError.model');
const JobSalaryError = require('../models/error/salary/jobSalaryError.model');
const JobSalaryTypeError = require('../models/error/salary/jobSalaryTypeError.model');
const UnknownError = require('../models/error/unkownError.model');

module.exports = (router) => {

    /**
     * POST a new salary
     * body format: { jobID: number, salary: number, salaryType: number }
     */
    router.post('/salary', (req, res) => {
        let request = req.body;
        let errors = [];

        if (!validate.validateJobID(request.jobID)) {
            errors.push(new JobIdError());
        }

        salary = request.salary;

        if (!validate.validateSalary(salary)) 
            errors.push(new JobSalaryError());

        if (!validate.validateSalaryType(request.salaryType))
            errors.push(new JobSalaryTypeError());
        
        if (request.salaryType == 0) //yearly
            salary = salary / 1000;
        else if (request.salaryType == 1) //monthly
            salary = (salary * 12) / 1000;
        else if (request.salaryType == 2) //biweekly
            salary = (salary * 2 * 12) / 1000;
        else if (request.salaryType == 3) //hourly
            salary = (salary * 8 * 23 * 12) / 1000;

        if (errors.length > 0) {
            res.status(400).send(errors);
        } else {
            db.addSalaryToJob(request.jobID, salary, (err, response, fields, newSalary, newNumofSalry) => {
                if (err) res.status(400).send([new UnknownError()]);
                else {
                    request.salary = newSalary;
                    request.salaryType = newNumofSalry;
                    res.status(200).send(request);
                }
            });
        }
    });
}