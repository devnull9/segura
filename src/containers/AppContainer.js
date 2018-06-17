import {connect} from 'react-redux'

import {sendEvents, getAgreements} from '../reducers/instalments'

import App from '../components/App'

export const mapStateToProps = (state) => ({
  instalments: state.instalments.data
})

export const mapDispatchToProps = {
  sendEvents,
  getAgreements
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App)