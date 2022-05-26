import { Colors } from '../../../mainStyles'

export const Styles = {
  mainContainer: isRowBased => ({
    marginTop: isRowBased ? '35px' : '10px'
  }),
  card: isRowBased => ({
    backgroundColor: Colors.gray,
    height: isRowBased ? '65vh' : '30vh',
    width: '480px',
    margin: '10px'
  }),
  titleContainer: {
    backgroundColor: Colors.beige
  },
  title: {
    color: Colors.dark,
    fontWeight: 'bolder'
  },
  avatar: {
    height: '40px',
    marginRight: '10px'
  },
  paginationContainer: isRowBased => ({
    height: isRowBased ? '15vh' : '5vh',
    marginTop: isRowBased ? '50px' : '20px'
  }),
  legend: {
    color: Colors.dark,
    fontWeight: 'bolder',
    marginLeft: '5px'
  },
  button: {
    backgroundColor: Colors.green,
    marginLeft: '20px',
    width: '80px',
    border: 'none'
  },
  form: isRowBased => ({
    width: isRowBased ? '250px' : '380px',
    textAlign: 'center'
  })
}
