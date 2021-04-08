import { ProjectModel, CompetencyType, UserCompetencyType, TeamStatusses } from 'src/features/statistics/models'

export const fakeProjects: ProjectModel[] = [
  {
    id: 0,
    name: 'Разработка самого лучшего проекта',
    curator: 'Хлебников Н.А.',
    organization: 'УрФУ',
    contacts: 'Иванов Иван Иванович - 89990990909\nАндреев Николай - a.d.asd@mail.com',
    purpose: 'Ut in dui vitae justo tincidunt accumsan ac ac lacus. Suspendisse accumsan, enim sed pretium eleifend, ante risus rutrum lorem, sit amet sollicitudin felis urna a tellus. Suspendisse potenti. In tincidunt nisi vitae gravida vulputate. Quisque vitae erat leo.',
    result: 'Duis condimentum, sem sed facilisis laoreet, est magna aliquam sapien, sit amet laoreet dolor enim ut velit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales orci sit amet tempus hendrerit. Suspendisse vestibulum quis nulla quis imperdiet. Suspendisse ornare, sem et euismod volutpat, velit lectus pellentesque felis, et dignissim turpis augue vel justo. Vestibulum eleifend gravida aliquam.',
    fillTeamsCount: 1,
    teamCapacity: 4,
    participantsCount: 3,
    isPromoted: true,
    maxTeamCount: 3,
    isAvailable: true,
    image: 'https://urfu.ru/fileadmin/user_upload/common_files/about/brand/UrFULogo_U.png',
    lifeScenario: {
      id: 1,
      name: 'Веб разработка',
    },
    keyTechnology: {
      id: 1,
      name: 'Front-end разработка',
    },
    competencies: [
      {
        id: 0,
        name: 'Frontend',
        competencyType: CompetencyType.HardSkill,
      },
      {
        id: 1,
        name: 'UI/UX',
        competencyType: CompetencyType.SoftSkill,
      },
      {
        id: 2,
        name: 'Аналитика',
        competencyType: CompetencyType.HardSkill,
      },
      {
        id: 3,
        name: 'Менеджемент',
        competencyType: CompetencyType.SoftSkill,
      },
      {
        id: 4,
        name: 'Управление проектами',
        competencyType: CompetencyType.HardSkill,
      },
      {
        id: 5,
        name: 'Системный анализ',
        competencyType: CompetencyType.HardSkill,
      },
      {
        id: 6,
        name: 'Длинное название для компетенции, которое не влезает в строчку',
        competencyType: CompetencyType.SoftSkill,
      },
    ],
    matchedCompetenciesCount: 5,
    teams: [
      {
        id: 1,
        name: 'Coders',
        teamStatus: TeamStatusses.Incomplete,
        users: [
          {
            id: 0,
            lastName: 'Иванов',
            firstName: 'Илья',
            middleName: 'Сергеевич',
            academicGroup: 'ФО-320001',
            role: {
              id: 0,
              name: 'Frontend',
            },
            competencies: [
              {
                id: 0,
                name: 'Frontend',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 1,
                name: 'UI/UX',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 2,
                name: 'Аналитика',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
            ],
          },
          {
            id: 1,
            lastName: 'Иванов',
            firstName: 'Илья',
            middleName: 'Сергеевич',
            academicGroup: 'ФО-320001',
            role: {
              id: 0,
              name: 'Backend',
            },
            competencies: [
              {
                id: 0,
                name: 'Frontend',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 1,
                name: 'UI/UX',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 2,
                name: 'Аналитика',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
            ],
          },
          {
            id: 2,
            lastName: 'Иванов',
            firstName: 'Илья',
            middleName: 'Сергеевич',
            academicGroup: 'ФО-320001',
            role: {
              id: 0,
              name: 'UI/UX',
            },
            competencies: [
              {
                id: 0,
                name: 'Frontend',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 1,
                name: 'UI/UX',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 2,
                name: 'Аналитика',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'SuperTeam',
        teamStatus: TeamStatusses.Completed,
        users: [
          {
            id: 0,
            lastName: 'Иванов',
            firstName: 'Илья',
            middleName: 'Сергеевич',
            academicGroup: 'ФО-320001',
            role: {
              id: 0,
              name: 'UI/UX',
            },
            competencies: [
              {
                id: 0,
                name: 'Frontend',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 1,
                name: 'UI/UX',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 2,
                name: 'Аналитика',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
            ],
          },
          {
            id: 1,
            lastName: 'Иванов',
            firstName: 'Илья',
            middleName: 'Сергеевич',
            academicGroup: 'ФО-320001',
            role: {
              id: 1,
              name: 'Аналитик',
            },
            competencies: [
              {
                id: 0,
                name: 'Frontend',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 1,
                name: 'UI/UX',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 2,
                name: 'Аналитика',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
            ],
          },
          {
            id: 2,
            lastName: 'Иванов',
            firstName: 'Илья',
            middleName: 'Сергеевич',
            academicGroup: 'ФО-320001',
            competencies: [
              {
                id: 0,
                name: 'Frontend',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 1,
                name: 'UI/UX',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
              {
                id: 2,
                name: 'Аналитика',
                competencyType: CompetencyType.HardSkill,
                userCompetencyType: UserCompetencyType.Current,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: '',
        users: [],
        teamStatus: TeamStatusses.Incomplete,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'UI/UX',
      },
      {
        id: 2,
        name: 'Backend',
      },
      {
        id: 3,
        name: 'Frontend',
      },
      {
        id: 4,
        name: 'Аналитик',
      },
      {
        id: 5,
        name: 'Менеджер',
      },
    ],
  },
  {
    id: 1,
    name: 'Разработка самого лучшего проекта 1',
    curator: 'Хлебников Н.А.',
    organization: 'УрФУ',
    contacts: 'Иванов Иван Иванович - 89990990909',
    purpose: 'Создание приложения для расчета разности массы в момент когда вы находитесь на планете земля и на других планетах нашей солнечной системы',
    result: 'Прототип приложения',
    description: 'Большое описание большого проекта',
    teamCapacity: 2,
    fillTeamsCount: 0,
    participantsCount: 4,
    maxTeamCount: 3,
    isPromoted: true,
    isAvailable: true,
    lifeScenario: {
      id: 1,
      name: 'Веб разработка',
    },
    keyTechnology: {
      id: 1,
      name: 'Front-end разработка',
    },
    competencies: [],
    matchedCompetenciesCount: 4,
    teams: [
      {
        id: 1,
        name: 'Test Team 1',
        users: [],
        teamStatus: TeamStatusses.Incomplete,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'UI/UX',
      },
      {
        id: 2,
        name: 'Backend',
      },
    ],
  },
  {
    id: 2,
    name: 'Разработка самого лучшего проекта 2',
    curator: 'Хлебников Н.А.',
    organization: 'УрФУ',
    contacts: 'Иванов Иван Иванович - 89990990909',
    purpose: 'Создание приложения для расчета разности массы в момент когда вы находитесь на планете земля и на других планетах нашей солнечной системы',
    result: 'Прототип приложения',
    description: 'Большое описание большого проекта',
    teamCapacity: 2,
    participantsCount: 3,
    fillTeamsCount: 0,
    maxTeamCount: 3,
    isAvailable: true,
    lifeScenario: {
      id: 1,
      name: 'Веб разработка',
    },
    keyTechnology: {
      id: 1,
      name: 'Front-end разработка',
    },
    competencies: [],
    matchedCompetenciesCount: 5,
    teams: [
      {
        id: 1,
        name: '',
        users: [],
        teamStatus: TeamStatusses.Incomplete,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'UI/UX',
      },
      {
        id: 2,
        name: 'Backend',
      },
    ],
  },
  {
    id: 3,
    name: 'Разработка самого лучшего проекта 3',
    curator: 'Хлебников Н.А.',
    organization: 'УрФУ',
    contacts: 'Иванов Иван Иванович - 89990990909',
    purpose: 'Создание приложения для расчета разности массы в момент когда вы находитесь на планете земля и на других планетах нашей солнечной системы',
    result: 'Прототип приложения',
    description: 'Большое описание большого проекта',
    teamCapacity: 2,
    fillTeamsCount: 1,
    participantsCount: 2,
    maxTeamCount: 3,
    isAvailable: false,
    lifeScenario: {
      id: 1,
      name: 'Веб разработка',
    },
    keyTechnology: {
      id: 1,
      name: 'Front-end разработка',
    },
    competencies: [],
    matchedCompetenciesCount: 3,
    teams: [
      {
        id: 1,
        name: '',
        users: [],
        teamStatus: TeamStatusses.Incomplete,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'UI/UX',
      },
      {
        id: 2,
        name: 'Backend',
      },
    ],
  },
  {
    id: 4,
    name: 'Разработка самого лучшего проекта 4',
    curator: 'Хлебников Н.А.',
    organization: 'УрФУ',
    contacts: 'Иванов Иван Иванович - 89990990909',
    purpose: 'Создание приложения для расчета разности массы в момент когда вы находитесь на планете земля и на других планетах нашей солнечной системы',
    result: 'Прототип приложения',
    description: 'Большое описание большого проекта',
    teamCapacity: 2,
    fillTeamsCount: 1,
    participantsCount: 3,
    maxTeamCount: 3,
    isAvailable: false,
    lifeScenario: {
      id: 1,
      name: 'Веб разработка',
    },
    keyTechnology: {
      id: 1,
      name: 'Front-end разработка',
    },
    competencies: [],
    matchedCompetenciesCount: 3,
    teams: [
      {
        id: 1,
        name: '',
        users: [],
        teamStatus: TeamStatusses.Incomplete,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'UI/UX',
      },
      {
        id: 2,
        name: 'Backend',
      },
    ],
  },
  {
    id: 5,
    name: 'Разработка самого лучшего проекта 5',
    curator: 'Иванов Иван Иванович, Николаев Николай Николаевич',
    organization: 'Длинное название организации заказчика',
    contacts: 'Иванов Иван Иванович - 89990990909',
    purpose: 'Создание приложения для расчета разности массы в момент когда вы находитесь на планете земля и на других планетах нашей солнечной системы',
    result: 'Прототип приложения',
    description: 'Большое описание большого проекта',
    teamCapacity: 2,
    fillTeamsCount: 4,
    participantsCount: 3,
    maxTeamCount: 3,
    isAvailable: true,
    lifeScenario: {
      id: 1,
      name: 'Веб разработка',
    },
    keyTechnology: {
      id: 1,
      name: 'Front-end разработка',
    },
    competencies: [],
    matchedCompetenciesCount: 4,
    teams: [
      {
        id: 1,
        name: '',
        users: [],
        teamStatus: TeamStatusses.Incomplete,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'UI/UX',
      },
      {
        id: 2,
        name: 'Backend',
      },
    ],
  },
]
