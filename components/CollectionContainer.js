import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoaded } from '../redux/shop/shop.selectors'
import WithSpinner from './WithSpinner'
import CollectionPage from './Collection'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionLoaded(state)
})

const collectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default collectionPageContainer