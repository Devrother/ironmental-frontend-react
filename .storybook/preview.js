import { configure, addDecorator } from '@storybook/react'
import reduxDecorator from './reduxDecorator'
import routerDecorator from './routerDecorator'

import 'antd/dist/antd.css'

addDecorator(reduxDecorator)
addDecorator(routerDecorator)
configure(require.context('../src', true, /\.stories\.tsx$/), module)
