import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import Question from '../Components/Question';
import QuestionCount from '../Components/QuestionCount';
import AnswerOption from '../Components/AnswerOption';
import {AwesomeButton} from "react-awesome-button";
import {Helmet} from "react-helmet";
import '../quiz.css';


class QuizYernar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentQuestionId: 0,
            currentDefinition: '',
            currentIndex: -1,
            isResult: false,
        };
    }

    handleQuestionAnswer(definition, answerId) {
        if(this.props.allQuestions[this.state.currentQuestionId].correctAnswer != this.state.currentIndex) {
            this.props.emoji(`sad`);
        }

        this.setState({currentDefinition: definition});
        this.setState({currentIndex: answerId});
    }

    renderDefinition() {
        return <div>
            <p>{this.state.currentDefinition}</p>
        </div>
    }

    renderQuestion() {
        const classes = this.state.open ? 'basket' : 'basket hide'
        if (this.state.isResult) {
            return <div>
                Спасибо, что прошли наш квест!
            </div>
        } else {
            return <CSSTransitionGroup
                className="container"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={8000}
                transitionLeaveTimeout={5000}
                transitionAppear
                transitionAppearTimeout={5000}
            >
                <label className="question" style={{textAlign:'center'}}>
                    {this.props.allQuestions[this.state.currentQuestionId].question}
                </label>
                <div>
                    <div>
                        {this.props.allQuestions[this.state.currentQuestionId].answers.map(
                            s => <ul className="answerOptions">
                                <AwesomeButton type="primary" style={{left:'20px',backgroundColor:'#00ffff'}} onPress={() => this.handleQuestionAnswer(s.definition, s.id)}
                                               key={s.id}>{s.content}</AwesomeButton>
                            </ul>
                        )}
                    </div>
                </div>
            </CSSTransitionGroup>
        }
    }

    renderNextQuestion() {
        if (this.state.currentQuestionId == this.props.allQuestions.length - 1) {
            this.setState({isResult: true});
            this.setState({currentDefinition: ''});
        } else {
            this.setState({currentQuestionId: this.state.currentQuestionId + 1})
            this.setState({currentDefinition: ''});
        }
    }

    refreshPage() {
        window.location.reload(false);
    }


    renderButton() {
        if (this.state.currentDefinition &&
            this.props.allQuestions[this.state.currentQuestionId].correctAnswer == this.state.currentIndex) {
            return <div>
                <AwesomeButton type="secondary" onPress={() => this.renderNextQuestion()}>Дальше!</AwesomeButton>
            </div>
        } else if (this.state.isResult) {
            return <div>
                <button onClick={this.refreshPage}>
                    Go back!
                </button>
            </div>
        }
    }

    render() {
        return <div>
            {this.renderQuestion()}
            {this.renderDefinition()}
            {this.renderButton()}
        </div>
    }
}

export default QuizYernar;