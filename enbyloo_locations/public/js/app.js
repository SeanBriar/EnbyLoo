class Locations extends React.Component {
  render() {
    return (
      <div className='locationsList'>
       <h5>Non-Binary Restrooms</h5>
       <table>
        <tr>
          <td>
          Location Name
          </td>
          <td>
          Address, City, State
          </td>
          <td>
          Cleanliness Rating
          </td>
          <td>
          Friendliness Rating
          </td>
        </tr>
       </table>
       <LocationsForm />
       <Location />
      </div>
    )
  }
}


ReactDOM.render(
  <Locations />,
  document.querySelector('.locations')
)
