/* eslint-disable no-unused-expressions */
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import participantList from './participantList'
import App from './App'
import ChatMenu from './ChatMenu'
import Participant from './Participant'
import Stage from './Stage'
import StageBottom from './StageBottom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'



describe(`App Component`, () => {
    it(`Renders without errors`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<App /> , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it(`Shows the App component (a container) when rendered`, () => {
        const tree = renderer
            .create(<App />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

});

describe(`ChatMenu Component`, () => {
    it(`Renders without errors`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<ChatMenu /> , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it(`Shows the ChatMenu component when rendered`, () => {
        const tree = renderer
            .create(<ChatMenu />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})

describe(`Participant Component`,  () => {
     it(`Renders without errors`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<Participant list={participantList}/> , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it(`Shows the Participant component when rendered`, () => {
        const tree = renderer
            .create(<Participant list={participantList}/>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})

describe(`Stage Component`, () => {
    it(`Renders without errors`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<Stage list={participantList}/> , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it(`Shows the Stage component when rendered`, () => {
        const wrapper = shallow(<Stage list={participantList}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})

describe(`StageBottom Component`, () => {
    it(`Renders without errors`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<StageBottom /> , div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it(`Shows the StageBottom component when rendered`, () => {
        const tree = renderer
            .create(<StageBottom />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})