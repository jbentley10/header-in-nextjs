import * as React from 'react'
import {mount} from 'enzyme'
import IndexPage from '../pages/index'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<IndexPage/>)
      expect(wrap.find('h2').text()).toBe('Interested in working on a project?')
    })
  })  
})