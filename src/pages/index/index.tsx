import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtRadio, AtCard } from 'taro-ui'
import { questions, getResult } from '../../constants/questions'
import './index.scss'

interface State {
  currentQuestion: number
  answers: number[]
  showResult: boolean
  totalScore: number
  isTesting: boolean
}

export default class Index extends Component<{}, State> {
  state: State = {
    currentQuestion: 0,
    answers: [],
    showResult: false,
    totalScore: 0,
    isTesting: false
  }

  startTest = () => {
    this.setState({ isTesting: true, currentQuestion: 0, answers: [], showResult: false });
  }

  handleSelect = (value: string) => {
    const { currentQuestion, answers } = this.state
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = Number(value)
    this.setState({ answers: newAnswers })
  }

  handleNext = () => {
    const { currentQuestion, answers } = this.state
    if (currentQuestion < questions.length - 1) {
      this.setState({
        currentQuestion: currentQuestion + 1
      })
    } else {
      const score = answers.reduce((acc, curr) => acc + curr, 0)
      this.setState({
        totalScore: score,
        showResult: true
      })
    }
  }

  handlePrevious = () => {
    const { currentQuestion } = this.state
    if (currentQuestion > 0) {
      this.setState({
        currentQuestion: currentQuestion - 1
      })
    }
  }

  renderResult() {
    const { totalScore } = this.state
    const result = getResult(totalScore)
    return (
      <AtCard title='测试结果'>
        <View className='at-article__h2'>{result.title}</View>
        <View className='at-article__p'>总分：{totalScore}</View>
        <View className='at-article__p'>{result.description}</View>
        <AtButton type='primary' onClick={() => this.setState({ isTesting: false })}>
          返回首页
        </AtButton>
      </AtCard>
    )
  }

  renderQuestion() {
    const { currentQuestion, answers } = this.state
    const question = questions[currentQuestion]
    return (
      <AtCard title={`第 ${currentQuestion + 1} 题`}>
        <View className='question-title'>{question.title}</View>
        <AtRadio
          options={question.options.map(opt => ({
            label: opt.text,
            value: String(opt.score),
            disabled: false
          }))}
          value={String(answers[currentQuestion] || '')}
          onClick={this.handleSelect}
          className='radio-options'
        />
        <View className='at-row button-container'>
          <View className='at-col at-col-6'>
            <AtButton
              type='secondary'
              onClick={this.handlePrevious}
              className='at-button--small'
            >
              上一题
            </AtButton>
          </View>
          <View className='at-col at-col-6' style={{ paddingLeft: '10px' }}>
            <AtButton
              type='primary'
              disabled={!answers[currentQuestion]}
              onClick={this.handleNext}
              className='at-button--small'
            >
              {currentQuestion === questions.length - 1 ? '查看结果' : '下一题'}
            </AtButton>
          </View>
        </View>
      </AtCard>
    )
  }

  renderHomePage() {
    return (
      <View className='home-page'>
        <View className='home-title'>欢迎来到恋爱脑测试</View>
        <AtButton type='primary' onClick={this.startTest}>
          开始测试
        </AtButton>
      </View>
    )
  }

  render() {
    const { showResult, isTesting } = this.state
    return (
      <View className='at-article'>
        {isTesting ? (showResult ? this.renderResult() : this.renderQuestion()) : this.renderHomePage()}
      </View>
    )
  }
}
