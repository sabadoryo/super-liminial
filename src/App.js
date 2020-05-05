import React, {Component} from 'react';
import quizQuestions from './api/quizQuestions';
import questDef from './api/quizDef';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import logo from './svg/Superliminal_black_logo.png';
import './App.css';
import QuizYernar from "./Components/QuizYernar";
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {},
            result: '',
            quizCategory: 0,
            mainText: '',
            mainDef: 'Наши квесты содержат в себе случаи из жизни.' +
                'Для вас будут даны вопросы и ответы, один из которых самый корректный и позволит вам пройти квест дальше.' +
                'При неправильном ответе, будет дано обьяснение почему.' +
                'Все тесты были сделаны исключительно с нашей точки зрения. ' +
                'И мы не хотим навязывать это мнение.'
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentDidMount() {
        const shuffledAnswerOptions = quizQuestions.map(question =>
            this.shuffleArray(question.answers)
        );
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }

    shuffleArray(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        console.log(event.currentTarget.value);

        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    setUserAnswer(answer) {
        this.setState((state, props) => ({
            answersCount: {
                ...state.answersCount,
                [answer]: (state.answersCount[answer] || 0) + 1
            },
            answer: answer
        }));
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map(key => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);

        return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
    }

    setResults(result) {

        if (result.length === 1) {
            this.setState({result: result[0]});
        } else {
            this.setState({result: 'Undetermined'});
        }
        this.setState({mainDef: 'Спасибо, что прошли наш квест!'});
    }

    handleGoBack() {
        this.setState({quizCategory: 0});
    }

    renderQuiz() {
        if (this.state.quizCategory == 1) {
            return (
                <QuizYernar
                    allQuestions={quizQuestions} questDef={questDef}
                />

            );
        } else if (this.state.quizCategory == 2) {
            return (
                <QuizYernar
                    allQuestions={quizQuestions}
                    onBack={this.handleGoBack}
                />

            );
        } else if (this.state.quizCategory == 3) {
            return (
                <QuizYernar
                    allQuestions={quizQuestions}
                />

            );
        }
    }

    returnMain() {
        this.setState({result: ''});
        this.setState({quizCategory: 0});
    }

    renderResult() {
        return <div>
            <Result quizResult={this.state.result}/>;
            <button onClick={() => this.returnMain()}>
                Restart
            </button>
        </div>
    }

    handleButtonState(props) {
        if (props == 1) {
            this.setState({
                mainDef: 'Представьте ситуацию на улице. Вы гуляете во дворе и встретили вашего сверстника, ' +
                    'который только переехал. Ваша цель, достигнуть хорошего общего языка, и постараться подружиться.'
            })
        }
        if (props == 2) {
            this.setState({
                mainDef: 'Представьте ситуацию на улице. Вы гуляете во дворе и встретили вашего сверстника, ' +
                    'который только переехал. Ваша цель, достигнуть хорошего общего языка, и постараться подружиться.'
            })
        }
        if (props == 3) {
            this.setState({
                mainDef: 'Представьте ситуацию на улице. Вы гуляете во дворе и встретили вашего сверстника, ' +
                    'который только переехал. Ваша цель, достигнуть хорошего общего языка, и постараться подружиться.'
            })
        }
        this.setState({quizCategory: props});
    }

    renderButtonQuiz() {
        if (this.state.quizCategory == 0) {
            return <div className="choiceMain">
                <AwesomeButton type="primary" style={{left: '20px'}}
                               onPress={() => this.handleButtonState(1)}>Easy</AwesomeButton>
                <AwesomeButton type="primary" style={{left: '110px'}}
                               onPress={() => this.handleButtonState(2)}>Normal</AwesomeButton>
                <AwesomeButton type="primary" style={{left: '190px'}}
                               onPress={() => this.handleButtonState(3)}>Hard</AwesomeButton>
            </div>
        }
    }


    render() {
        return (

            <div className="App">
                <div className="App-header">
                    <svg className="sad" width="44px" height="44px" viewBox="0 0 44 44" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="fine" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                           transform="translate(0, 0)">
                            <circle id="body" fill="#E23D18" cx="22" cy="22" r="22"></circle>
                            <g id="face" transform="translate(13.000000, 20.000000)">
                                <g className="face">
                                    <path d="M7,4 C7,5.1045695 7.8954305,6 9,6 C10.1045695,6 11,5.1045695 11,4"
                                          className="mouth" stroke="#2C0E0F" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          transform="translate(9.000000, 5.000000) rotate(-180.000000) translate(-9.000000, -5.000000) "></path>
                                    <ellipse className="right-eye" fill="#2C0E0F" cx="16.0941176" cy="1.75609756"
                                             rx="1.90588235" ry="1.75609756"></ellipse>
                                    <ellipse className="left-eye" fill="#2C0E0F" cx="1.90588235" cy="1.75609756"
                                             rx="1.90588235" ry="1.75609756"></ellipse>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                {this.state.result ? this.renderResult() : this.renderQuiz()}
                {this.renderButtonQuiz()}
                <div className="center">
                    <p>{this.state.mainDef}</p>
                </div>
            </div>
        );
    }
}

export default App;