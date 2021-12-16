import React from 'react'
import FetchingUsers from '../../Components/Fetching'
import ScrollToTop from '../../scroll'
import Loyout from '../Loyout'

export default function MainPage() {
  return (
    <React.Fragment>
      <Loyout>
        <ScrollToTop />
        <FetchingUsers />
      </Loyout>
    </React.Fragment>
  )
}
