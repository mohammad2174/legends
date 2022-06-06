import { createSelector } from 'reselect';

const selectCard = state => state.card

export const selectCardItems = createSelector(
    [selectCard],
    (card) => card.cardItems
)

export const selectCardItemsCount = createSelector(
    [selectCardItems],
    cardItems => cardItems.reduce((accumolatedQuantity, cardItem) => accumolatedQuantity + cardItem.quantity, 0)
)

export const selectCardHidden = createSelector(
    [selectCard],
    card => card.hidden
)

export const selectCardTotal = createSelector(
    [selectCardItems],
    cardItems => cardItems.reduce((accumolatedQuantity, cardItem) => accumolatedQuantity + cardItem.quantity * cardItem.price, 0)
)