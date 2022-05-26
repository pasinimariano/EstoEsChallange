import { Colors } from '../../mainStyles'

export const Styles = {
  mainContainer: isRowBased => ({
    height: isRowBased ? '140vh' : '100vh',
    backgroundImage: 'url(https://wallpaperaccess.com/full/1930875.jpg)',
    backgoundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflowX: isRowBased ? 'auto' : 'none'
  }),
  form: isRowBased => ({
    backgroundColor: Colors.gray,
    opacity: 0.9,
    height: isRowBased ? '120vh' : '65vh',
    width: isRowBased ? '300px' : '484px',
    borderRadius: '32px',
    padding: '25px',
    position: 'relative',
    margin: 'auto',
    boxShadow: 'rgba(0,0,0,0.45) 0px 2px 10px'
  })
}
