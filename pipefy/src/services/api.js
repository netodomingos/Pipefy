export function loadLists() {
    return [
        {
            title: 'Tarefas',
            creatable: true,
            cards: [
                {
                    id: 1,
                    content: 'Estudar NodeJS',
                    labels: ['#7159c1'],
                    user: 'https://avatars1.githubusercontent.com/u/49910898?v=4'
                },
                {
                    id: 2,
                    content: 'Estudar ReactJS',
                    labels: ['#7159c1'],
                    user: 'https://avatars1.githubusercontent.com/u/49910898?v=4'
                },
            ]
        },
        {
            title: 'Fazendo',
            creatable: false,
            cards: [
                {
                    id: 3,
                    content: 'Recriando clone do Pipefy',
                    labels: ['#FCE608'],
                    user: 'https://avatars1.githubusercontent.com/u/49910898?v=4'
                }
            ]
        },
        {
            title: 'Pausado',
            creatable: false,
            cards: [
                {
                    id: 4,
                    content: 'Preparar Aulas',
                    labels: ['#F41907'],
                    user: 'https://avatars1.githubusercontent.com/u/49910898?v=4'
                },
                {
                    id: 5,
                    content: 'Deploy RealTime Chat ReactJs',
                    labels: ['#F41907'],
                    user: 'https://avatars1.githubusercontent.com/u/49910898?v=4'
                },
            ]
        },
        {
            title: 'Concluído',
            creatable: false,
            done: true,
            cards: [
                {
                    id: 6,
                    content: '30 Projetos Github!',
                    labels: ['#6FF407 '],
                    user: 'https://avatars1.githubusercontent.com/u/49910898?v=4',
                },
                {
                    id: 7,
                    content: '25 Projetos Github!',
                    labels: ['#6FF407 '],
                    user: 'https://avatars1.githubusercontent.com/u/49910898?v=4',
                },
                {
                    id: 8,
                    content: 'Inicio do Projeto do Pipefy',
                    labels: ['#6FF407 '],
                    user: 'https://avatars1.githubusercontent.com/u/49910898?v=4',
                }
            ]
        },
    ];
}