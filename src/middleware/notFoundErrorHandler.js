const notFoundErrorHandler = (err, req, res, next) => {
    console.log(err)
    if (err.name === 'Error') {
      return res.status(404).json({ message: err.message })
    }
  
    // next(err)
  }
  
  export default notFoundErrorHandler
  