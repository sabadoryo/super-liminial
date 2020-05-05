var quizQuestions = [
    {
        question: "Ваше первое действие?",
        answers: [
            {
                id: 1,
                type: "Microsoft",
                content: "Сразу спрошу имя.",
                definition:"Это неверно. Потому что, для начала необходимо представиться самому, " +
                    "так как собеседник может почувствовать дискомфорт"
            },
            {
                id: 2,
                type: "Nintendo",
                content: "Поздороваюсь и представлюсь",
                definition:"Это будет правильный ответ, потому что, когда представляетесь первым, вы создаете хорошее впечатление" +
                    " о себе, тем самым вы смягчая обстановку."
            },
            {
                id: 3,
                type: "Sony",
                content: "Толкну и скажу обидное слово ",
                definition:"Это неверно. Так как, вы создаете не лучшее впечатление о себе, " +
                    "что дизорентирует любого нормального человека."
            }
        ],
        correctAnswer: 2
    },
    {
        question: "Ваш собеседник тоже представился, и ждет ваших дальнейших действий. Ваш следующий шаг?",
        answers: [
            {
                id: 1,
                type: "Microsoft",
                content: "Спрошу свободен ли он на выходных?",
                definition:"Не стоит сильно забегать вперед, это насторожит собеседника так как вы только познакомились"
            },
            {
                id: 2,
                type: "Nintendo",
                content: "Расскажу о том где я учусь и чем люблю заниматься в свободное время",
                definition:"Это верно! Так вы сможете найти общие интересы и продолжить диалог"
            },
            {
                id: 3,
                type: "Sony",
                content: "Начну танцевать без какой либо причины",
                definition:"Нет! Не делайте так. Это странно"
            }
        ],
        correctAnswer: 2
    },
    {
        question: "Вы успешно завели диалог но, вашему собеседнику необходимо идти домой. Ваши действия?",
        answers: [
            {
                id: 1,
                type: "Microsoft",
                content: "Молча развернусь и уйду",
                definition:"Это неверно! Так как необходимо хотя бы попрощаться, в ином случае ваш новый знакомый возможно больше не захочет с вами общаться"
            },
            {
                id: 2,
                type: "Nintendo",
                content: "Попрошу его контактные данные, например в соц.сетях или мессенджерах",
                definition:"Это верно! Так у вас будет возмжность общаться в любое время, и договариваться о дальнейших встречах"
            },
            {
                id: 3,
                type: "Sony",
                content: "Пойду к нему домой вместе с ним",
                definition:"Это неверно! Неправильно проситься к кому то домой, если он сам вас не приглашает." + 
                "Возможно он не хочет этого, но ему неудобно вам отказать. Поэтому лучше избегать этого"
            }
        ],
        correctAnswer: 2
    },
    {
        question: "Which of these games do you think is best?",
        answers: [
            {
                id: 1,
                type: "Microsoft",
                content: "BioShock",
                definition:"Because sosi"
            },
            {
                id: 2,
                type: "Nintendo",
                content: "The Legend of Zelda: Ocarina of Time",
                definition:"Because krasava"
            },
            {
                id: 3,
                type: "Sony",
                content: "Final Fantasy VII",
                definition:"Because sosi"
            }
        ],
        correctAnswer: 2
    },
    {
        question: "What console would you prefer to own?",
        answers: [
            {
                id: 1,
                type: "Microsoft",
                content: "X-Box One",
                definition:"Because sosi"
            },
            {
                id: 2,
                type: "Nintendo",
                content: "Wii U",
                definition:"Because krasava"
            },
            {
                id: 3,
                type: "Sony",
                content: "Playstation 4",
                definition:"Because sosi"
            }
        ],
        correctAnswer: 2
    }
];

let questDef ="Представтьте ситуацию.......";

export default quizQuestions;
