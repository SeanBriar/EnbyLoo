class LocationsList extends React.Component {
  render() {
    return (
      <div className='locationsTable'>
        <table>
          <tbody>
          {this.props.locations.map((location, index)=> {
            return (
              <tr>
              <td className='locationName' onClick={()=> { this.props.getLocation(location); this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}}>
              {location.name}
              </td>
              <td>
              {location.address}, {location.city}, {location.state}
              </td>
              <td>
                <div className='deleteBtn'>
                  <button onClick={()=> this.props.deleteLocation(location, index)}>Delete</button>
                </div>
              </td>
              </tr>
            )
          })}
         </tbody>
        </table>
      </div>
    )
  }
}
