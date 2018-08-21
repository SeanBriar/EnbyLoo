class LocationsList extends React.Component {
  render() {
    return (
      <div>
        <div className="searchBar">
         <div className="input-field col s12 searchDiv">
              <input
                id="search"
                type="text"
                className="validate" />
                <label for="search"> Search</label>
          </div>
        </div>
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
                  <i onClick={()=> this.props.deleteLocation(location, index)} class="material-icons trash">delete_forever</i>
                </div>
              </td>
              </tr>
            )
          })}
         </tbody>
        </table>
        </div>
      </div>
    )
  }
}
