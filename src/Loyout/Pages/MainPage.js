import React from 'react'
import Fetching from '../../Components/Fetching'
import Loyout from '../Loyout'

export default function MainPage() {
  return (
    <React.Fragment>
      <Loyout>
        <Fetching />
      </Loyout>
    </React.Fragment>
  )
}
