import React from 'react'
import { useDispatch } from 'react-redux'
import { routeUtils } from 'src/utils'
import { routePath } from 'src/constants'
import { actions } from 'src/services/user/actions'

const Settings: React.FC = () => {
  const dispatch = useDispatch()

  const onClickLogout = () => {
    dispatch(actions.logout())
    routeUtils.push(routePath.HOME)
  }

  return (
    <section>
      <button onClick={onClickLogout}>logout</button>
    </section>
  )
}

export default Settings
