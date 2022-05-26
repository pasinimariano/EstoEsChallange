import { Colors } from '../../../mainStyles'

export const Styles = {
  modalContainer: isRowBased => ({
    height: isRowBased ? '100%' : '55vh'
  }),
  formContainer: isRowBased => ({
    width: isRowBased ? '90%' : '80%'
  }),
  title: isRowBased => ({
    fontSize: isRowBased ? '12px' : '18px'
  }),
  form: {
    width: '90%',
    margin: '10px'
  },
  button: {
    backgroundColor: Colors.green,
    border: 'none',
    marginTop: '20px'
  },
  error: {
    color: Colors.coral
  },
  success: {
    color: Colors.green
  }
}
