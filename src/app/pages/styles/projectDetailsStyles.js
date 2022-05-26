import { Colors } from '../../mainStyles'

export const Styles = {
  mainContainer: isRowBased => ({
    height: isRowBased ? '100vh' : '55vh',
    marginTop: isRowBased ? '5px' : '25px'
  }),
  cardContainer: isRowBased => ({
    height: isRowBased ? '80vh' : '70%'
  }),
  homeButton: {
    backgroundColor: Colors.green,
    border: 'none'
  },
  deleteButton: {
    backgroundColor: Colors.coral,
    border: 'none'
  }
}
