const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Team = require('./lib/Team');

const team = new Team();

function getNext(option) {
    if (option === 'addManager') {
        addManager();
    }
    if (option === 'addEngineer') {
        addEngineer();
    }
    if (option === 'addIntern') {
        addIntern();
    }
    if (option === 'finish') {
        team.saveFile();
    }
}

function addManager() {
    inquirer
        .prompt([
            {
                name: 'managerName',
                message: "What is your manager's name?",
                type: 'input',
            },
            {
                name: 'managerID',
                message: "What is your manager's ID?",
                type: 'input',
            },
            {
                name: 'managerEmail',
                message: "What is your manager's email?",
                type: 'input',
            },
            {
                name: 'managerOfficeNumber',
                message: "What is your manager's office number?",
                type:   'input',
            },
            {
                name: 'addMore',
                type: 'list',
                choices: [
                    {
                        value:'addEngineer',
                        name: 'Add Engineer',
                    },
                    {
                        value:'addIntern',
                        name: "Add Intern",
                    },
                    {
                        value:'finish',
                        name: 'Finish',
                    },
                ], 
            },
            
        ])
        .then((data)=> {
            const manager = new Manager(
                data.managerName,
                data.managerID,
                data.managerEmail,
                data.managerOfficeNumber,
            );
            team.addMember(manager);
            getNext(data.addMore);
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            name:'engineerName',
            message: "What is your Engineer's name?",
            type: 'input',
        },
        {
            name:'EngineerID',
            message: "What is your Engineer's ID?",
            type: 'input',
        },
        {
            name:'engineerEmail',
            message: "What is your Engineer's email?",
            type: 'input',
        },
        {
            name:'engineerGithub',
            message: "What is your Engineer's Github?",
            type: 'input',
        },
        {
            name: 'addMore',
            type: 'list',
            choices: [
                {
                    value: 'addEngineer',
                    name: 'Add Engineer',
                },
                {
                    value: 'addIntern',
                    name: "Add Intern",
                },
                {
                    value: 'finish',
                    name: 'Finish',
                },
            ],
        },

    ])
    .then((data)=>{
        const engineer = new Engineer(
            data.engineerId,
            data.engineerName,
            data.engineerEmail,
            data.engineerGithub
        );
        team.addMember(engineer);
        getNext(data.addMore);
    });
}

function addIntern() {
    inquirer
        .prompt([
            {
                name: 'intern name',
                message: "What is your intern's name?",
                type: 'input',
            },
            {
                name: 'internId',
                message: "What is your intern's ID?",
                type: 'input',
            },
            {
                name: 'internEmail',
                message: "What is your intern's email?",
                type: 'input',
            },
            {
                name: 'internSchool',
                message: "What school does your Intern attend?",
                type: 'input',
            },
            {
                name: 'addMore',
                type: 'list',
                choices: [
                    {
                        value: 'addEngineer',
                        name: 'Add Engineer',
                    },
                    {
                        value: 'addIntern',
                        name: "Add Intern",
                    },
                    {
                        value: 'finish',
                        name: 'Finish',
                    },
                ]
            }
        ])
        .then((data)=> {
            const intern = new Intern(
                data.internId,
                data.internName,
                data.internEmail,
                data.internSchool,
            );
            team.addMember(intern);
            getNext(data.addMore);
        });
}

function generateHtml() {
    const stringifiedTeam = JSON.stringify(team);
    fs.writeFile('team.txt', stringifiedTeam, 'utf-8', (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('team successfully written');
      }
    });
  }

inquirer
  .prompt([
    {
      name: 'managerName',
      type: 'input',
      message: "What is the team manager's name?",
    },
    {
      name: 'employeeId',
      type: 'input',
      message: 'What is the employee ID?',
    },
    {
      name: 'managerEmail',
      type: 'input',
      message: "What is the manager's email address?",
    },
    {
      name: 'officeNumber',
      type: 'input',
      message: 'What is the office number?',
    },
    {
      name: 'addMore',
      type: 'list',
      choices: [
        {
          value: 'addEngineer',
          name: 'Add engineer',
        },
        {
          value: 'addIntern',
          name: 'Add intern',
        },
        {
          value: 'finish',
          name: 'Finish',
        },
      ],
    },
  ])
  .then((data) => {
    const manager = new Manager(
      data.employeeId,
      data.managerName,
      data.managerEmail,
      data.officeNumber
    );
    team.addMember(manager);
    getNext(data.addMore);
  });