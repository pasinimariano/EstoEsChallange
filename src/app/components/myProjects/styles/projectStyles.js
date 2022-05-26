import { Colors } from '../../../mainStyles'

export const Styles = {
  mainContainer: isRowBased => ({
    height: isRowBased ? '160vh' : '85vh'
  }),
  card: isRowBased => ({
    height: isRowBased ? '145vh' : '75vh',
    width: isRowBased ? '95%' : '480px',
    backgroundColor: Colors.gray,
    border: 'none',
    borderRadius: '20px',
    marginTop: isRowBased ? '2px' : '80px'
  }),
  title: {
    height: '10%',
    width: '100%',
    backgroundColor: Colors.beige,
    fontWeight: 'bolder',
    color: Colors.dark
  },
  formContainer: isRowBased => ({
    width: isRowBased ? '90%' : '380px'
  }),
  form: {
    width: '100%',
    margin: '20px'
  },
  button: {
    width: '260px',
    margin: '15px',
    backgroundColor: Colors.green,
    color: Colors.gray
  },
  error: {
    color: Colors.coral,
    marginTop: '10px'
  },
  success: {
    color: Colors.green,
    marginTop: '10px'
  }
}
