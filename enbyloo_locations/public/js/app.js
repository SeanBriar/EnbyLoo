class Locations extends React.Component {
  render() {
    return (
      <div className='locationsList'>
       <h3>Non-Binary Restrooms</h3>
      </div>
    )
  }
}


ReactDOM.render(
  <Locations />,
  document.querySelector('.locations')
)
