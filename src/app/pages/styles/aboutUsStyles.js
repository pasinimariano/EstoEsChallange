export const Styles = {
  mainContainer: isRowBased => ({
    width: isRowBased ? '320px' : '100wv'
  }),
  image: isRowBased => ({
    width: isRowBased ? '300px' : '100wv',
    marginTop: isRowBased ? '10px' : '40px',
    marginBottom: isRowBased ? '10px' : '40px'
  })
}
