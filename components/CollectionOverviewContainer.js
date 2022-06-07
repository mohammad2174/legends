import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../redux/shop/shop.selectors'
import WithSpinner from './WithSpinner'
import CollectionOverView from './CollectionOverview'
import { compose } from 'redux'


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

// const collectionOverViewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverView))
const collectionOverViewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverView)

export default collectionOverViewContainer